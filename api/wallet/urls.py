from django.contrib import admin
from .views import *
from django.urls import path,include

urlpatterns = [
    path('my',MyWallet.as_view())
]
