from . import views
from django.urls import path
from django.shortcuts import render

app_name = 'trading_app'
def home(request):
    return render(request, 'trading_app/home.html')
urlpatterns = [
      path('', views.home, name='home'),
]
