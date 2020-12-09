# Generated by Django 3.1.3 on 2020-11-20 18:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Myapp', '0015_auto_20201121_0023'),
    ]

    operations = [
        migrations.AddField(
            model_name='laptop',
            name='colour',
            field=models.CharField(default='', max_length=10),
        ),
        migrations.AddField(
            model_name='laptop',
            name='name',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='laptop',
            name='step1',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='laptop',
            name='step2',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='laptop',
            name='step3',
            field=models.IntegerField(default=0),
        ),
    ]
