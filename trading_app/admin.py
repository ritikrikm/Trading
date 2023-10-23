from django.contrib import admin
from .models import Currency, PaymentHistory

admin.site.register(Currency)
admin.site.register(PaymentHistory)
