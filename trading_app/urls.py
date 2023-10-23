from . import views
from django.urls import path
from django.shortcuts import render

app_name = 'trading_app'
def home(request):
    return render(request, 'trading_app/home.html')
urlpatterns = [
      path('', views.home, name='home'),
       path('register/', views.register, name='register'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
]
