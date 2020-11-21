import unittest
from django.test import Client
from rest_framework import status

class CustomersTest(unittest.TestCase):
    def setUp(self):
        self.client = Client()
        self.baseUrl = 'http://localhost:8000/customers/'
        self.contentType='application/json'
        self.customer_test = {"id": 1,
                              "name": "Customer Test Django Rest",
                              "age": 30,
                              "city": "City Test Django Rest"}

    def test_api_getAllCustomers(self):
        response = self.client.get(self.baseUrl)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_api_getCustomerTest(self):
        response = self.client.get(self.baseUrl+ str(self.customer_test['id'])+ '/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)     

    def test_api_paginate10Perpage(self):
        response = self.client.get(self.baseUrl)
        self.assertEqual(len(response.data['results']), 10)

    def test_api_post405NotAlowwed(self):
        response = self.client.post(path= self.baseUrl,
                                    data= self.customer_test, 
                                    format= 'json', 
                                    content_type= self.contentType)
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_api_put200_Ok(self):
        response = self.client.put(path= self.baseUrl + str(self.customer_test['id'])+ '/',
                                   data= self.customer_test, 
                                   format= 'json', 
                                   content_type= self.contentType)
        self.assertEqual(response.status_code, status.HTTP_200_OK) 

    def test_api_delete_405NotAllowed(self):
        response = self.client.delete(self.baseUrl + str(self.customer_test['id'])+ '/')
        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_api_customerTestData_after_put(self):
        response = self.client.get(self.baseUrl + str(self.customer_test['id'])+ '/')
        self.assertEqual(response.data, self.customer_test)


