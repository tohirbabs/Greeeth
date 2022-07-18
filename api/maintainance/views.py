from django.shortcuts import render
from .models import TreeMaintainance
from rest_framework.generics import ListCreateAPIView
from .serializers import *



class TreeMaintain(ListCreateAPIView):
    serializer_class = MaintainSerializer


    def perform_create(self, serializer):
        serializer.save(maintained_by=self.request.user)

    def get_queryset(self):
        return self.request.user.tree_maintaince.all()