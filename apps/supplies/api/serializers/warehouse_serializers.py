from rest_framework import serializers
from django.contrib.auth import get_user_model
from apps.supplies.models import Warehouse
User = get_user_model()

# serializador para los supplies y warehouses
class WarehouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Warehouse
        fields = '__all__'


