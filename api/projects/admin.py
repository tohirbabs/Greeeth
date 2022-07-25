from django.contrib import admin
from .models import *

# Register your models here.

@admin.register(Project)
class ProjectAdmins(admin.ModelAdmin):
    list_display = ["name","created_by","created_on","status","ended_on"]


@admin.register(ProjectAdmin)
class ProjectAdminAdmin(admin.ModelAdmin):
    list_display = ["user","assigned_on","project"]

@admin.register(UserProject)
class UserProjectAdmin(admin.ModelAdmin):
    list_display = ["id","user","project","status","requested_on","approved_on","approved_by"]