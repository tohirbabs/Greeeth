from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import WalletSerializer
from rest_framework.response import Response
from .models import *
# Create your views here.

class MyWallet(APIView):
    def get(self,request):
        wallet, created = Wallet.objects.get_or_create(user=request.user)
        return Response(WalletSerializer(wallet).data)




