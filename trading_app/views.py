from django.shortcuts import render
from django.views.generic.detail import DetailView
from django.views.generic.list import ListView
from django.views.generic import View
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from .models import Currency

def home(request):
    return render(request, 'trading_app/home.html')

class CurrencyDetailView(DetailView):
    model = Currency
    template_name = 'currency_detail.html'
    context_object_name = 'currency'

class CurrencyListView(ListView):
    model = Currency
    template_name = 'currency_list.html'  # Update with the correct template name
    context_object_name = 'currencies'


# Create a view for user registration
class UserRegistrationView(View):
    def get(self, request):
        form = UserCreationForm()
        return render(request, 'registration/registration_form.html', {'form': form})

    def post(self, request):
        form = UserCreationForm(request.POST)
        if form.is_valid():
            new_user = form.save()
            # Log the user in.
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('currency-list')  # Redirect to your currency list page
        return render(request, 'registration/registration_form.html', {'form': form})
