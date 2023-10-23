from django.shortcuts import render
from django.shortcuts import redirect
from django.shortcuts import render
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
def home(request):
    return render(request, 'trading_app/home.html')

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            # Log the user in after registration
            login(request, user)
            return redirect('home')  # Redirect to the home page after registration
    else:
        form = UserCreationForm()
    return render(request, 'registration_form.html', {'form': form})

def user_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')  # Redirect to the home page after login
    return render(request, 'login.html')

def user_logout(request):
    logout(request)
    return redirect('login')  # Redirect to the login page after logout