from rest_framework.generics import ListCreateAPIView
from .models import *
from .serializers import *


class TreePlantation(ListCreateAPIView):
    serializer_class = TreeSerializer

    def get_queryset(self):
        return self.request.user.trees_planted.all()

    def perform_create(self, serializer):
        return serializer.save(planter=self.request.user)
