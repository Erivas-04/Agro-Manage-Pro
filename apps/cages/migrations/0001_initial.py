# Generated by Django 5.0.7 on 2024-11-04 18:00

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('animals', '0001_initial'),
        ('company', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='FeedAnimal',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False, unique=True, verbose_name='Id')),
                ('animal_amount', models.IntegerField(verbose_name='Cantidad de animales')),
            ],
        ),
        migrations.CreateModel(
            name='FeedAnimalFood',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False, unique=True, verbose_name='Id')),
                ('food_animal_amount', models.FloatField(verbose_name='Cantidad de concentrado')),
            ],
        ),
        migrations.CreateModel(
            name='Cage',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False, unique=True, verbose_name='Id')),
                ('code', models.CharField(max_length=8, validators=[django.core.validators.MinLengthValidator(1)], verbose_name='Codigo')),
                ('hability', models.BooleanField(verbose_name='Habilitado')),
                ('observations', models.CharField(blank=True, max_length=100, null=True, verbose_name='Observaciones')),
                ('animal', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='animals.animal')),
                ('animal_food', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='animals.animalfood')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='company.userasigned')),
                ('feed_animal', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='cages.feedanimal')),
                ('feed_animal_food', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='cages.feedanimalfood')),
            ],
            options={
                'verbose_name': 'Corral',
                'verbose_name_plural': 'Corrales',
            },
        ),
    ]
