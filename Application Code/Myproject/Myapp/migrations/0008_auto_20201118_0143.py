# Generated by Django 3.1.3 on 2020-11-17 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Myapp', '0007_auto_20201118_0141'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='orderDate',
            field=models.DateField(),
        ),
    ]