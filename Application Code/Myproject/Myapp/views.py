from django.shortcuts import render,redirect
from django.http import HttpResponse
#for AUTHENTICATION
from django.contrib.auth import login
from rest_framework import generics, permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView
from .serializers import UserSerializer
from knox.models import AuthToken
#for API HANDLING
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from .models import order,laptop,socialData
from .serializers import orderSerializer,orderDetailsSerializer,laptopSerializer,formatData,formatDataByLaptop,formatPredict,socialSerializer
import json
#for ML_CODES
from .ML_codes import forecast_predict,forecast_trainmodel,forecast_append_csv,forecast_delete_csv
from . import scrapper

from datetime import date,datetime,timedelta

class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)    
        return super(LoginAPI, self).post(request, format=None)



@api_view(["GET"])
def dashboardDetails(request):
    params = []
    orders = order.objects.all()
    params.append(len(orders))
    orders = order.objects.filter(status="completed")
    params.append(len(orders))
    orders = order.objects.filter(status="pending")
    params.append(len(orders))    
    return Response(params)


@api_view(["GET"])
def orderList(request):
    orders = order.objects.all()
    serializer = orderDetailsSerializer(orders, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def orderDetails(request,pk):
    orders = order.objects.get(orderID=pk)
    serializer = orderSerializer(orders, many=False)
    return Response(serializer.data)

@api_view(["POST"])
def orderCreate(request):
    serializer = orderSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    forecast_append_csv.append_csv(serializer.data)
    forecast_trainmodel.TimeSeriesForecastTrain()
    return Response(serializer.data)


@api_view(["DELETE"])
def orderDelete(request, pk):
    order_delete = order.objects.get(orderID=pk)
    serializer = orderSerializer(order_delete, many=False)
    forecast_delete_csv.delete_csv(serializer.data)
    forecast_trainmodel.TimeSeriesForecastTrain()
    order_delete.delete()
    return Response("DELETE SUCCESS")

@api_view(["GET"])
def orderToday(request,pk):
    orders = order.objects.filter(orderDate=pk)
    serializer = orderSerializer(orders, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def orderByDeadline(request,pk):
    orders = order.objects.filter(deadline=pk)
    serializer = orderSerializer(orders, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def orderPending(request):
    orders = order.objects.filter(status="pending")
    serializer = orderSerializer(orders, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def orderRunning(request):
    orders = order.objects.filter(status="running")
    serializer = orderSerializer(orders, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def orderCompleted(request):
    orders = order.objects.filter(status="completed")
    serializer = orderSerializer(orders, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def orderWeek(request,pk):
    temp=[]
    params={}
    for i in range(0,6):
        orders = order.objects.filter(orderDate=pk)
        serializer = orderSerializer(orders, many=True)
        temp.append(serializer.data)
        pk = (datetime.strptime(pk, '%Y-%m-%d') + timedelta(days=1)).strftime('%Y-%m-%d')
        params = formatData(temp)
    return Response(params)


@api_view(["GET"])
def orderWeekByLaptop(request,pk):
    temp=[]
    params=[]
    today = date.today().strftime('%Y-%m-%d')
    for i in range(0,6):
        
        orders = order.objects.filter(orderDate=today)
        serializer = orderSerializer(orders, many=True)
        temp.append(serializer.data)
        today = (datetime.strptime(today, '%Y-%m-%d') - timedelta(days=1)).strftime('%Y-%m-%d')        
    params.append(formatPredict(forecast_predict.predict(),pk))
    params.append(formatDataByLaptop(formatData(temp),pk))
    return Response(params)


@api_view(["GET"])
def laptopList(request):
    laptops = laptop.objects.all()
    serializer = laptopSerializer(laptops, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def laptopDetails(request,pk):
    laptops = laptop.objects.get(laptopID=pk)
    serializer = laptopSerializer(laptops, many=False)
    return Response(serializer.data)

@api_view(["GET"])
def laptopRatings(request,pk):
    params = scrapper.fetchData(pk)
    return Response(params)


# @api_view(["GET"])
# def socialPredict(request):
#     try:
#         serializer = socialSerializer(data = [23.67,34.89])
#         if serializer.is_valid():
#             serializer.save()
#         param = serializer.data
#         return JsonResponse(param, safe=False)
#     except ValueError as e:
#         return Response(e.args[0],status.HTTP_400_BAD_REQUEST)


# @api_view(["GET"])
# def socialDPredict(request):
#     try:
#         param = socialMedia.socialMedia()
#         return JsonResponse(param, safe=False)
#     except ValueError as e:
#         return Response(e.args[0],status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def forecastPredict(request,pk):
    try:
        param = forecast_predict.predict(pk)
        return JsonResponse(param, safe=False)
    except ValueError as e:
        return Response(e.args[0],status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def forecastPredictToday(request,pk):
    try:
        param = forecast_predict.predictToday(pk)
        return JsonResponse(param, safe=False)
    except ValueError as e:
        return Response(e.args[0],status.HTTP_400_BAD_REQUEST)

#refresh_model
def forecastTrain(request):
    forecast_trainmodel.TimeSeriesForecastTrain()
    return HttpResponse("DONE")

#  def socialTrain(request):
#     forecast_trainmodel.TimeSeriesForecastTrain()
#     return HttpResponse("DONE")
