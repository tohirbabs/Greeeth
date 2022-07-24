from django.shortcuts import render
from .serializers import *
from rest_framework.generics import RetrieveUpdateAPIView


# Create your views here.


class AwardEdit(RetrieveUpdateAPIView):
    serializer_class = AwardSerializer
    queryset = Award.objects.all()

    def perform_update(self, serializer):
        return serializer.save(updated_by=self.request.user)