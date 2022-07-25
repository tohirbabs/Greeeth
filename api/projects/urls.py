from django.contrib import admin

from greeeth import urls
from .views import *
from django.urls import path,include


urlpatterns = [
    path('create',ProjectListCreate.as_view()),
    path('<int:project>/admins',AssignAdministrators.as_view()),
    path('<int:project>/add',UserProjectAdd.as_view()),
    path('<int:pk>/approve',ApproveProject.as_view()),
]
