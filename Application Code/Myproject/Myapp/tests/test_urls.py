from django.test import SimpleTestCase
from django.urls import reverse,resolve
from Myapp.views import dashboardDetails,laptopDetails,laptopRatings,laptopList,orderList,orderDetails,orderCreate,orderDelete,orderToday,orderWeek,orderWeekByLaptop,orderByDeadline,orderPending,orderRunning,orderCompleted,forecastPredict,forecastPredictToday,forecastTrain

class TestUrls(SimpleTestCase):

	def test_dashboard_details_url_is_resolved(self):
		url = reverse('dashboard-details')
		self.assertEquals(resolve(url).func, dashboardDetails)

	def test_laptop_details_url_is_resolved(self):
		url = reverse('laptop-details', args=['pk'])
		self.assertEquals(resolve(url).func, laptopDetails)

	def test_laptop_ratings_url_is_resolved(self):
		url = reverse('laptop-ratings', args=['pk'])
		self.assertEquals(resolve(url).func, laptopRatings)

	def test_laptop_list_url_is_resolved(self):
		url = reverse('laptop-list')
		self.assertEquals(resolve(url).func, laptopList)

	def test_order_list_url_is_resolved(self):
		url = reverse('order-list')
		self.assertEquals(resolve(url).func, orderList)

	def test_order_details_url_is_resolved(self):
		url = reverse('order-details', args=['pk'])
		self.assertEquals(resolve(url).func, orderDetails)

	def test_order_create_url_is_resolved(self):
		url = reverse('order-create')
		self.assertEquals(resolve(url).func, orderCreate)

	def test_order_delete_url_is_resolved(self):
		url = reverse('order-delete', args=['pk'])
		self.assertEquals(resolve(url).func, orderDelete)

	def test_order_today_url_is_resolved(self):
		url = reverse('order-today', args=['pk'])
		self.assertEquals(resolve(url).func, orderToday)

	def test_order_week_url_is_resolved(self):
		url = reverse('order-week', args=['pk'])
		self.assertEquals(resolve(url).func, orderWeek)

	def test_order_weekbylaptop_url_is_resolved(self):
		url = reverse('order-weekbylaptop', args=['pk'])
		self.assertEquals(resolve(url).func, orderWeekByLaptop)

	def test_order_bydeadline_url_is_resolved(self):
		url = reverse('order-bydeadline', args=['pk'])
		self.assertEquals(resolve(url).func, orderByDeadline)

	def test_order_pending_url_is_resolved(self):
		url = reverse('order-pending')
		self.assertEquals(resolve(url).func, orderPending)

	def test_order_running_url_is_resolved(self):
		url = reverse('order-running')
		self.assertEquals(resolve(url).func, orderRunning)

	def test_order_completed_url_is_resolved(self):
		url = reverse('order-completed')
		self.assertEquals(resolve(url).func, orderCompleted)

	def test_forecast_url_is_resolved(self):
		url = reverse('forecast', args=['pk'])
		self.assertEquals(resolve(url).func, forecastPredict)

	def test_forecast_today_url_is_resolved(self):
		url = reverse('forecast-today', args=['pk'])
		self.assertEquals(resolve(url).func, forecastPredictToday)

