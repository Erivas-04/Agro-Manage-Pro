# Generated by Django 5.0.7 on 2025-01-17 23:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('animals', '0002_alter_animal_id_alter_animalfood_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='animal',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images/', verbose_name='Imagen de animal'),
        ),
    ]
