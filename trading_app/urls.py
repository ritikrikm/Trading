from . import views
from django.urls import path
from .views import CurrencyListView, CurrencyDetailView, UserRegistrationView
from django.shortcuts import render

app_name = 'trading_app'
def home(request):
    return render(request, 'trading_app/home.html')
urlpatterns = [
      path('', views.home, name='home'),
    path('currencies/', CurrencyListView.as_view(), name='currency-list'),
    path('currency/<int:pk>/', CurrencyDetailView.as_view(), name='currency-detail'),
    path('register/', UserRegistrationView.as_view(), name='register'),
]
