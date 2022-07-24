from django.db import models
from accounts.models import CustomUser as User
from django.db.models.signals import post_save
from django.dispatch import receiver
from datetime import datetime
# Create your models here.


class Project(models.Model):
    project_status = [
        ('active','active'),
        ('ended','ended'),
    ]
    name = models.CharField(max_length=100,unique=True)
    created_by = models.ForeignKey(User,on_delete=models.CASCADE,related_name="projects_created")
    created_on = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=30,choices=project_status,default="active")
    ended_on = models.DateTimeField(null=True)
    location = models.CharField(max_length=50)

    # adding administrators
    def addAdmins(self,user) -> 'ProjectAdmin':
        return self.admins.create(user=user)

    # creating user project
    def projectUser(self,user,status)-> 'UserProject':
        projectUser = self.users.create(user=user,status=status)
        if status == 'active':
            projectUser.approved_on = datetime.now()
            projectUser.approved_by = self.created_by
            projectUser.save()
        return projectUser

    def __str__(self) -> str:
        return self.name

# auto create owner as administrator and part of the project
@receiver(post_save, sender=Project)
def auto_create_admin(sender, instance, **kwargs):
    instance.addAdmins(user=instance.created_by)
    instance.projectUser(user=instance.created_by,status='active')


class ProjectAdmin(models.Model):
    user = models.ForeignKey(User,related_name="projects_admin",on_delete=models.CASCADE)
    assigned_on = models.DateTimeField(auto_now_add=True)
    project = models.ForeignKey(Project,on_delete=models.CASCADE,related_name="admins")
    class Meta:
        unique_together = ['user','project']

class UserProject(models.Model):
    project_choices = [
        ('pending','pending'),
        ('active','active'),
    ]
    user = models.ForeignKey(User,on_delete=models.CASCADE,related_name="projects")
    project = models.ForeignKey(Project,on_delete=models.CASCADE,related_name="users")
    status = models.CharField(max_length=30,choices=project_choices,default="pending")
    requested_on = models.DateTimeField(auto_now_add=True)
    approved_on = models.DateTimeField(null=True)
    approved_by = models.ForeignKey(User,on_delete=models.CASCADE,null=True)


    class Meta:
        unique_together = ['user','project']

    # approving project access request
    def approveRequest(self,user):
        self.status='active'
        self.approved_on = datetime.now()
        self.approved_by=user
        self.save()
        return self