from django.test import TestCase, Client
from django.urls import reverse
from Myapp.models import order,laptop 
import json
from .test_setup import TestSetUp

class TestViews(TestSetUp):

	def test_dashboard_details_GET(self):
		response = self.client.get(self.dashboard_details_url )
		self.assertEquals(response.status_code,200)


	def test_order_list_GET(self):
		response = self.client.get(self.order_list_url) #test codes
		self.assertEquals(response.status_code,200)



	def test_order_create_POST_adds_order(self):
		response = self.client.post(self.order_create_url, self.order1, format="json")
		self.assertEquals(response.status_code,200)


