from rest_framework import serializers
from .models import *

class TreeShareCreateSerailizer(serializers.ModelSerializer):
    sender = serializers.StringRelatedField(read_only=True)
    share_code = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = TreeShare
        fields = '__all__'


class TreeAcceptSerializer(serializers.ModelSerializer):
    tree = serializers.StringRelatedField(read_only=True)
    share_code = serializers.StringRelatedField(read_only=True)
    recepient = serializers.StringRelatedField(read_only=True)
    received_on = serializers.DateTimeField(read_only=True)


    class Meta:
        model = TreeShare
        fields = ['tree','share_code','recepient','received_on'],