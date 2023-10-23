from django.shortcuts import render
def home(request):
    return render(request, 'trading_app/home.html')
