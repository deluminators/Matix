from rest_framework import serializers
from django.contrib.auth.models import User
from . models import order,laptop,socialData



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')



class orderSerializer(serializers.ModelSerializer):

    class Meta:
        model= order
        fields = ('orderID',
            'orderDate',
            'deadline',
            'Laptop1',
            'Quantity1',
            'Laptop2',
            'Quantity2',
            'Laptop3',
            'Quantity3',
            'Laptop4',
            'Quantity4',
            'Laptop5',
            'Quantity5',
            'Laptop6',
            'Quantity6',
            'Laptop7',
            'Quantity7',
            'Laptop8',
            'Quantity8',
            'Laptop9',
            'Quantity9',
            'Laptop10',
            'Quantity10',
            )
        #fields = '__all__'

class orderDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model= order
        fields = ('orderID',
            'orderDate',
            'deadline',
            'status',
            'Laptop1',
            'Quantity1',
            'Laptop2',
            'Quantity2',
            'Laptop3',
            'Quantity3',
            'Laptop4',
            'Quantity4',
            'Laptop5',
            'Quantity5',
            'Laptop6',
            'Quantity6',
            'Laptop7',
            'Quantity7',
            'Laptop8',
            'Quantity8',
            'Laptop9',
            'Quantity9',
            'Laptop10',
            'Quantity10',
            )
        #fields = '__all__'

class laptopSerializer(serializers.ModelSerializer):

    class Meta:
        model= laptop
        #fields = ('firstname','lastname')
        fields = '__all__'

class socialSerializer(serializers.ModelSerializer):

    class Meta:
        model= socialData
        fields = '__all__'


def formatData(data):
    from datetime import datetime
    final={}
    for elements in data:
        row=[{'item':'1','demand':0},
             {'item':'2','demand':0},
             {'item':'3','demand':0},
             {'item':'4','demand':0},
             {'item':'5','demand':0},
             {'item':'6','demand':0},
             {'item':'7','demand':0},
             {'item':'8','demand':0},
             {'item':'9','demand':0},
             {'item':'10','demand':0}]
        
        try:
            val=elements[0]['Quantity1']
            test=True

        except:
            test=False
            pass
        
        if test == True:
            for ind in elements:
                row[0]['demand']+=ind['Quantity1']
                row[1]['demand']+=ind['Quantity2']
                row[2]['demand']+=ind['Quantity3']
                row[3]['demand']+=ind['Quantity4']
                row[4]['demand']+=ind['Quantity5']
                row[5]['demand']+=ind['Quantity6']
                row[6]['demand']+=ind['Quantity7']
                row[7]['demand']+=ind['Quantity8']
                row[8]['demand']+=ind['Quantity9']
                row[9]['demand']+=ind['Quantity10']
            for ind in elements:
                row[0]['demand']=str(row[0]['demand'])
                row[1]['demand']=str(row[1]['demand'])
                row[2]['demand']=str(row[2]['demand'])
                row[3]['demand']=str(row[3]['demand'])
                row[4]['demand']=str(row[4]['demand'])
                row[5]['demand']=str(row[5]['demand'])
                row[6]['demand']=str(row[6]['demand'])
                row[7]['demand']=str(row[7]['demand'])
                row[8]['demand']=str(row[8]['demand'])
                row[9]['demand']=str(row[9]['demand'])
        if test==True:
            final[str((datetime.strptime(elements[0]['orderDate'],'%Y-%m-%d')).strftime("%Y/%m/%d"))]=row

    return final

def formatDataByLaptop(data,item):
    final={}
    for key,elements in data.items():
        for ind in elements:
            if(ind['item']==item):
                final[key]=ind['demand']

    return final

def formatPredict(data,item):
    final={}
    for elements in data:
        if(elements['item']==item):
            final[elements['date']]=elements['demand']

    return final

