from django.shortcuts import render
from rest_framework import viewsets
from core.models import Customer
from core.serializers import CustomerSerializer

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all().order_by('-id')
    serializer_class = CustomerSerializer

