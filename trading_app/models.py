from django.db import models
from django.contrib.auth.models import User

# Model for Currency (e.g., Bitcoin, EURO, USD)
class Currency(models.Model):
    name = models.CharField(max_length=100)
    symbol = models.CharField(max_length=10)  # Add symbol field for currency symbol
    exchange_rate = models.DecimalField(max_digits=10, decimal_places=2)  # Add exchange rate

   
    def __str__(self):
        return self.name

# Model for Payment History
class PaymentHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    currency = models.ForeignKey(Currency, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_type = models.CharField(max_length=10, choices=[("buy", "Buy"), ("sell", "Sell")])
    transaction_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.currency.name} - {self.amount} ({self.transaction_type})"

# Model for User Profile
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    valid_id_or_photo = models.ImageField(upload_to='user_ids/')  # Store user's ID or photo

# Model for Payment Gateway (You can customize this based on the payment service you integrate)
class PaymentGateway(models.Model):
    name = models.CharField(max_length=100)
    # Add fields as needed (e.g., API keys, configurations)

    def __str__(self):
        return self.name

# You can add more models for additional features as needed

# Example of a model for a specific feature (e.g., Stock):
# class Stock(models.Model):
#     symbol = models.CharField(max_length=10)
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     # Add more fields as needed

