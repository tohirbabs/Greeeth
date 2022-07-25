from .models import *
from rest_framework import serializers


class MaintainSerializer(serializers.ModelSerializer):
    maintained_by = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = TreeMaintainance
        fields = '__all__'