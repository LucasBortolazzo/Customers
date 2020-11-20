from django.shortcuts import render
from rest_framework import viewsets, filters
from core.models import Customer
from core.serializers import CustomerSerializer
from django_filters.rest_framework import DjangoFilterBackend

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all().order_by('-id')
    serializer_class = CustomerSerializer
    http_method_names = ['get', 'put']
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ['id', 'name', 'age', 'city']
    search_fields = ['id', 'name', 'age', 'city']

