from django.contrib import admin
from django.urls import path
from SimpleApplication import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('homes/', views.homes),  # Home page route
]
