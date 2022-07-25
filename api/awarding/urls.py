from django.contrib import admin
from .views import *
from django.urls import path,include

urlpatterns = [
    path('',AwardCreate.as_view()),
    path('<int:code>',AwardEdit.as_view())
]
