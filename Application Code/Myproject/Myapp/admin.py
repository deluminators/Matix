from django.contrib import admin
from django.contrib.auth.models import Group
from . models import order,laptop,socialData
# Register your models here.


class orderAdmin(admin.ModelAdmin):
    list_display = ('orderID','orderDate','deadline','status','backlog','lastModified')

class laptopAdmin(admin.ModelAdmin):
    list_display = ('name','laptopID','totalTime')

admin.site.site_title ='DELL ADMIN'
admin.site.site_header ='DELL ADMINISTRATION'
admin.site.index_title = "ADMIN DASHBOARD"

admin.site.unregister(Group)

admin.site.register(order,orderAdmin)
admin.site.register(laptop,laptopAdmin)
