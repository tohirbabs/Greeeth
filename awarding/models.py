from django.db import models
from accounts.models import CustomUser as User
from django.contrib.contenttypes.fields import GenericForeignKey,GenericRelation
from django.contrib.contenttypes.models import ContentType
from wallet.models import Debit

# Create your models here.

class Award(models.Model):
    name = models.CharField(max_length=50,unique=True)
    code = models.IntegerField(unique=True)
    points = models.IntegerField()
    last_updated = models.DateTimeField(auto_now_add=True)
    updated_by = models.ForeignKey(User,on_delete=models.CASCADE)


class TreeAwarding(models.Model):
    award = models.ForeignKey(Award,on_delete=models.CASCADE,related_name="awardings")
    points = models.DecimalField(decimal_places=2,max_digits=30)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE,related_name='awardings')
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')
    debit =GenericRelation(Debit,related_name="debits")
