from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Warehouse(models.Model):
    name = models.CharField(max_length=100)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    company = models.ForeignKey('company.Company', on_delete=models.CASCADE)
    phone = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = 'Almacenes'
        verbose_name = 'Almacen'

    def __str__(self):
        return self.name

class Supplies(models.Model):
    name = models.CharField(max_length=1000)
    cost_price = models.DecimalField(max_digits=10, decimal_places=2, default = 0)
    company = models.ForeignKey('company.Company', on_delete=models.CASCADE)
    stock = models.IntegerField(default = 0)
    warehouse = models.ForeignKey(Warehouse, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = 'Insumos'
        verbose_name = 'Insumo'

    def __str__(self):
        return self.name

