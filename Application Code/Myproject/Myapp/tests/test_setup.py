from rest_framework.test import APITestCase
from django.urls import reverse


class TestSetUp(APITestCase):

	def setUp(self):
		
		self.dashboard_details_url = reverse('dashboard-details')
		self.order_list_url = reverse('order-list')
		# self.order_details_url = reverse('order-details')
		self.order_create_url = reverse('order-create')
		# self.pk = "2"

		self.order1 = {"orderID": 26,
	    "orderDate": "2020-11-23",
	    "deadline": "2020-11-25",
	    "Laptop1": 1,
	    "Quantity1": 0,
	    "Laptop2": 2,
	    "Quantity2": 40,
	    "Laptop3": 3,
	    "Quantity3": 0,
	    "Laptop4": 4,
	    "Quantity4": 0,
	    "Laptop5": 5,
	    "Quantity5": 0,
	    "Laptop6": 6,
	    "Quantity6": 0,
	    "Laptop7": 7,
	    "Quantity7": 0,
	    "Laptop8": 8,
	    "Quantity8": 0,
	    "Laptop9": 9,
	    "Quantity9": 0,
	    "Laptop10": 10,
	    "Quantity10": 0
		}


		return super().setUp()


	def tearDown(self):


		return super().tearDown()