# Generated by Django 3.1.3 on 2020-11-20 20:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Myapp', '0017_laptop_totaltime'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='lastModified',
            field=models.DateField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='orderDate',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]