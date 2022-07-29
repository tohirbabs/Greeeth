from django.contrib import admin
from .views import *
from django.urls import path,include

urlpatterns = [
    path('',TreeSharing.as_view()),
    path('/receive/<str:share_code',AcceptTree.as_view())
]
