# authentication/views.py
from django.contrib.auth.views import LoginView
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.shortcuts import render

class CustomLoginView(LoginView):
    template_name = 'login.html'

    def form_valid(self, form):
        # Custom logic after successful login
        # For example, you can redirect the user to a different page:
        return redirect('dashboard')
    
@login_required
def dashboard(request):
    # Your dashboard logic here
    return render(request, 'dashboard.html')
