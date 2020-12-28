from django.db import models
# Create your models here.

class order(models.Model):

    orderID = models.AutoField(primary_key=True)
    orderDate = models.DateField(auto_now_add=True, editable=False)
    lastModified = models.DateField(auto_now=True)
    deadline = models.DateField()
    backlog = models.BooleanField(default=False)
    STATUS = [('pending', 'PENDING'),
            ('backlog', 'BACKLOG'),
            ('running', 'RUNNING'),
            ('completed', 'COMPLETED')]
    status = models.CharField(max_length=20, choices=STATUS, default='pending')

    class Laptops(models.IntegerChoices):
        XPS_13 = 1
        XPS_15 = 2
        Inspiron_3567 = 3
        Inspiron_5379 = 4
        Inspiron_7567 = 5
        Vostro_3568 = 6
        Vostro_5370  = 7
        Latitude_5480 = 8
        Alienware_15 = 9
        Alienware_17 = 10

    Laptop1 = models.IntegerField(choices=Laptops.choices,default=1)
    Quantity1 = models.IntegerField(default=0)
    Laptop2 = models.IntegerField(choices=Laptops.choices, default=2)
    Quantity2 = models.IntegerField(blank=True,default=0)
    Laptop3 = models.IntegerField(choices=Laptops.choices, default=3)
    Quantity3 = models.IntegerField(blank=True,default=0)
    Laptop4 = models.IntegerField(choices=Laptops.choices, default=4)
    Quantity4 = models.IntegerField(blank=True,default=0)
    Laptop5 = models.IntegerField(choices=Laptops.choices, default=5)
    Quantity5 = models.IntegerField(blank=True,default=0)
    Laptop6 = models.IntegerField(choices=Laptops.choices, default=6)
    Quantity6 = models.IntegerField(blank=True,default=0)
    Laptop7 = models.IntegerField(choices=Laptops.choices, default=7)
    Quantity7 = models.IntegerField(blank=True,default=0)
    Laptop8 = models.IntegerField(choices=Laptops.choices, default=8)
    Quantity8 = models.IntegerField(blank=True,default=0)
    Laptop9 = models.IntegerField(choices=Laptops.choices, default=9)
    Quantity9 = models.IntegerField(blank=True,default=0)
    Laptop10 = models.IntegerField(choices=Laptops.choices, default=10)
    Quantity10 = models.IntegerField(blank=True,default=0)


class laptop(models.Model):
    laptopID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, default="")
    step1 = models.IntegerField(default=0)
    step2 = models.IntegerField(default=0)
    step3 = models.IntegerField(default=0)
    totalTime = models.IntegerField(default=0)
    colour = models.CharField(max_length=10,default="")
    link = models.CharField(max_length=200, default="")


class socialData(models.Model):
    dell_tech = models.DecimalField(max_digits=4, decimal_places=2, default="")
    dell_digital = models.DecimalField(max_digits=4, decimal_places=2, default="")