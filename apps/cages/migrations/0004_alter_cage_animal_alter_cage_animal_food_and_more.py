# Generated by Django 5.0.7 on 2024-11-05 23:13

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('animals', '0002_alter_animal_id_alter_animalfood_id'),
        ('cages', '0003_cage_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cage',
            name='animal',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='animals.animal'),
        ),
        migrations.AlterField(
            model_name='cage',
            name='animal_food',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='animals.animalfood'),
        ),
        migrations.AlterField(
            model_name='cage',
            name='feed_animal',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='cages.feedanimal'),
        ),
        migrations.AlterField(
            model_name='cage',
            name='feed_animal_food',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='cages.feedanimalfood'),
        ),
    ]
