# Generated by Django 3.1.3 on 2020-11-20 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Myapp', '0016_auto_20201121_0024'),
    ]

    operations = [
        migrations.AddField(
            model_name='laptop',
            name='totalTime',
            field=models.IntegerField(default=0),
        ),
    ]