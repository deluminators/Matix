# Generated by Django 3.1.3 on 2020-11-17 19:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Myapp', '0003_auto_20201118_0119'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='suit',
            field=models.IntegerField(choices=[(1, 'Diamond'), (2, 'Spade'), (3, 'Heart'), (4, 'Club')], default=1),
        ),
    ]
