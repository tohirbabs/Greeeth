from django.contrib.gis.db import models
from accounts.models import CustomUser as User
from pathlib import Path

# Create your models here.


def image_location(instance,filename):
    return Path(f'plantations/{instance.planter.pk}')/filename

class Tree(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)
    planter = models.ForeignKey(User,related_name="trees_planted",on_delete=models.CASCADE)
    location = models.PointField(geography=True,)
    height = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to=image_location)

