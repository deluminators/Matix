#Code to redirect pages and data from the provided urls by calling corresponding functions

from django.urls import path
from . import views
from knox import views as knox_views

urlpatterns=[


    path('login/', views.LoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),

    path('dashboard-details/', views.dashboardDetails, name="dashboard-details"),

    path('laptop-details/<str:pk>/', views.laptopDetails, name="laptop-details"),
    path('laptop-ratings/<str:pk>/', views.laptopRatings, name="laptop-ratings"),#ML
    path('laptop-list/', views.laptopList, name="laptop-list"),

    path('order-list/', views.orderList, name="order-list"),
    path('order-details/<str:pk>/', views.orderDetails, name="order-details"),
    path('order-create/', views.orderCreate, name="order-create"),
    path('order-delete/<str:pk>', views.orderDelete, name="order-delete"),

    path('order-today/<str:pk>', views.orderToday, name="order-today"),
    path('order-week/<str:pk>', views.orderWeek, name="order-week"),
    path('order-weekbylaptop/<str:pk>', views.orderWeekByLaptop, name="order-weekbylaptop"),
    path('order-bydeadline/<str:pk>', views.orderByDeadline, name="order-bydeadline"),

    path('order-pending/', views.orderPending, name="order-pending"),
    path('order-running/', views.orderRunning, name="order-running"),
    path('order-completed/', views.orderCompleted, name="order-completed"),
    
    # path('social-predict/', views.socialPredict, name="social-predict"),
    # path('social-delltrain', views.socialTrain, name="social-train"),


    path('forecast/<str:pk>', views.forecastPredict, name="forecast"),
    path('forecast-today/<str:pk>', views.forecastPredictToday, name="forecast-today"),
    path('forecast-train', views.forecastTrain, name="forecast-train"),
]
