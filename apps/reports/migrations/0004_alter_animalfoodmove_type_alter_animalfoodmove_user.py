# Generated by Django 5.0.7 on 2024-11-27 22:30

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0004_rename_usernameextension_company_usernameextension'),
        ('reports', '0003_alter_animalmove_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='animalfoodmove',
            name='type',
            field=models.PositiveSmallIntegerField(choices=[(0, 'Uso'), (1, 'Ingreso')], verbose_name='Tipo de movimiento'),
        ),
        migrations.AlterField(
            model_name='animalfoodmove',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='company.userasigned'),
        ),
    ]
