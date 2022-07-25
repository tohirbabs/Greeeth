import django
from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(Award)
class AwardAdmin(admin.ModelAdmin):
    list_display = ["name","code","points","last_updated","updated_by"]

