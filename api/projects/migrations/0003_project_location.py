# Generated by Django 4.0.4 on 2022-07-21 21:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_alter_userproject_approved_by'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='location',
            field=models.CharField(default='Lagos', max_length=50),
            preserve_default=False,
        ),
    ]