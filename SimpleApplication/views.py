from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
#function based view
def home(request):
    return HttpResponse("Hello, this is the home page.")
def homes(request):
    return render(request, 'home.html')
