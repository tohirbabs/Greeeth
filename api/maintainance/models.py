from django.db import models
from trees.models import *


def image_location(instance,filename):
    return Path(f'plantations/{instance.tree.planter.pk}')/filename


class TreeMaintainance(models.Model):
    tree = models.ForeignKey(Tree,related_name="maintainances",on_delete=models.CASCADE)
    maintained_on = models.DateTimeField(auto_now=True)
    maintained_by = models.ForeignKey(User,related_name="tree_maintaince",on_delete=models.CASCADE)
    location = models.PointField(geography=True,)
    height = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to=image_location)