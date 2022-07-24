from sre_constants import MAX_UNTIL
from django.db import models
from accounts.models import CustomUser as User
from django.db.models import Count,Q,Sum,F
from django.db.models.signals import post_save
from django.dispatch import receiver



from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
# Create your models here.

class Wallet(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,related_name="wallet")
    balance = models.DecimalField(max_digits=100,decimal_places=2)

    @property
    def total_debit(self):
        return self.debits.all().aggregate(total=Sum('point'))['total']
    
    @property
    def total_credit(self):
        return self.credits.all().aggregate(total=Sum('point'))['total']

    @property
    def calculated_balance(self):
        return self.total_debit-self.total_credit

    def updateWallet(self):
        self.balance=self.calculated_balance
        self.save()

class Credit(models.Model):
    wallet = models.ForeignKey(Wallet,related_name="debits",on_delete=models.CASCADE)
    point = models.DecimalField(max_digits=100,decimal_places=2)
    credited_on = models.DateTimeField(auto_now_add=True)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE,related_name='credits')
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')


class Debit(models.Model):
    wallet = models.ForeignKey(Wallet,related_name="debits",on_delete=models.CASCADE)
    point = models.DecimalField(max_digits=100,decimal_places=2)
    debited_on = models.DateTimeField(auto_now_add=True)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE,related_name='debits')
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')


@receiver(post_save,sender=[Credit,Debit])
def updateWalletBalance(self, instance, **kwargs):
    instance.wallet.updateWallet()