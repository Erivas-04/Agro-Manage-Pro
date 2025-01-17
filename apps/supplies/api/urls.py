from django.urls import path
from .views.warehouse_views import WarehouseList, WarehouseCreate
from .views.supplies_views import SuppliesList, SuppliesCreate

warehouse_url = [
    path('warehouse/list/<int:id_user>/', WarehouseList.as_view(), name='warehouse-list'),
    path('warehouse/create/<int:creator_id>/creator/<int:company_id>/company/', WarehouseCreate.as_view(), name='warehouse-create'),
]

supplies_url = [
    path('list/<int:id_user>/', SuppliesList.as_view(), name='supplies-list'),
    path('create/<int:warehouse_id>/warehouse/<int:creator_id>/creator/<int:company_id>/company/', SuppliesCreate.as_view(), name='supplies-create'),
]

urlpatterns = warehouse_url + supplies_url
