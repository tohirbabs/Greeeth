from django.shortcuts import render
from rest_framework.generics import CreateAPIView,UpdateAPIView
from .models import *
import random
import string
from .serializers import *
# Create your views here.


class TreeSharing(CreateAPIView):
    queryset = TreeShare.objects.all()
    serializer_class = TreeShareCreateSerailizer

    def create_share_code(self,length):
        return ''.join(random.choice(string.ascii_letters) for _ in range(length))

    def perform_create(self, serializer):
        return serializer.save(sender=self.request.user,share_code=self.create_share_code(8))


class AcceptTree(UpdateAPIView):
    queryset  = TreeShare.objects.all()
    serializer_class = TreeAcceptSerializer
    lookup_field = 'share_code'


    def perform_update(self, serializer):
        return serializers.save(recepient=self.request.user,received_on=datetime.now())