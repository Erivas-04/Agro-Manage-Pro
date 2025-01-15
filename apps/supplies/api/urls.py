from django.urls import path
from .views.warehouse_views import WarehouseList
from .views.supplies_views import SuppliesList

warehouse_url = [
    path('warehouse/list/<int:id_user>', WarehouseList.as_view(), name='warehouse-list'),
]

supplies_url = [
    path('list/<int:id_user>', SuppliesList.as_view(), name='supplies-list'),
]

urlpatterns = warehouse_url + supplies_url
