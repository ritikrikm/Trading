# projectname/urls.py
from django.contrib import admin
from django.urls import include, path
from authentication.views import CustomLoginView

urlpatterns = [
    path('', include('trading_app.urls')),
    path('admin/', admin.site.urls),
     path('login/', CustomLoginView.as_view(), name='login'),
]
