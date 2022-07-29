from django.contrib import admin
from .models import *
# Register your models here.


@admin.register(TreeShare)
class TreeShareAdmin(admin.ModelAdmin):
    list_display = ["sender","sent_on","status","share_code","tree","title","recepient_email","recepient","received_on"]