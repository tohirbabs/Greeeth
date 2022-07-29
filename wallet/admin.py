from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(Wallet)
class WalletAdmin(admin.ModelAdmin):
    list_display = ["user","balance"]