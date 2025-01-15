from django.contrib import admin
from .models import Warehouse, Supplies

@admin.register(Warehouse)
class WarehouseAdmin(admin.ModelAdmin):
    list_display = ['name', 'creator', 'company', 'phone']
    search_fields = ['name', 'creator', 'company', 'phone']

@admin.register(Supplies)
class SuppliesAdmin(admin.ModelAdmin):
    list_display = ['name', 'cost_price', 'company', 'stock', 'warehouse']
    search_fields = ['name', 'cost_price', 'company', 'stock', 'warehouse']


