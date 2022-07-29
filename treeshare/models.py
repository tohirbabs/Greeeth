from django.db import models
from trees.models import *
from accounts.models import CustomUser as User
from datetime import datetime
from django.db.models.signals import post_save
from django.dispatch import receiver
from sendy import gmail_send_message
from awarding.models import *
from wallet.models import Credit

# Create your models here.


class TreeShare(models.Model):
    sender = models.ForeignKey(User,on_delete=models.CASCADE,related_name="sent_trees")
    sent_on = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=30,default="pending")
    share_code = models.CharField(max_length=30)

    tree = models.ForeignKey(Tree,related_name="shared",on_delete=models.CASCADE)

    title = models.CharField(max_length=30)
    purpose = models.CharField(max_length=100)
    message = models.TextField()


    recepient_email = models.EmailField()

    recepient = models.ForeignKey(User,related_name="received_trees",null=True,on_delete=models.CASCADE)
    received_on = models.DateTimeField(auto_now_add=False,null=True)


@receiver(post_save,sender=TreeShare)
def sendShareEmail(self,instance,**kwargs):
    subject = f"{instance.title}"
    body = f"{instance.message} \n"
    body += f"Tree No {instance.tree} was sent to you by {instance.sender}\n"
    body += f"Use This code to unlock to tree {instance.share_code} \n"
    body += "Via https://greeeth.com"

    gmail_send_message(subject=subject,recepient=[instance.recepient_email],body=body)


@receiver(post_save,sender=TreeShare)
def credit_sender(self,instance,**kwargs):
    # sending tree code
    points = Award.objects.get_or_create(code=3001,defaults={'name':'Tree Sending','points':30,'updated_by':instance.sender})

    # crediting account
    Credit.objects.create(content_object=instance,point=points,wallet=instance.sender.wallet)

