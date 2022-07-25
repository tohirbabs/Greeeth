from django.shortcuts import render
from .serializers import *
from rest_framework.generics import RetrieveUpdateAPIView,ListCreateAPIView


# Create your views here.

class AwardCreate(ListCreateAPIView):
    serializer_class = AwardSerializer
    queryset = Award.objects.all()

    def perform_create(self,serializer):
        return serializer.save(updated_by=self.request.user)


class AwardEdit(RetrieveUpdateAPIView):
    serializer_class = AwardEditSerializer
    queryset = Award.objects.all()
    lookup_field = 'code'
    
    def perform_update(self, serializer):
        return serializer.save(updated_by=self.request.user)