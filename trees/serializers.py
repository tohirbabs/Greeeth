from rest_framework import serializers
from .models import *

class TreeSerializer(serializers.ModelSerializer):
    planter = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = Tree
        fields = '__all__'
