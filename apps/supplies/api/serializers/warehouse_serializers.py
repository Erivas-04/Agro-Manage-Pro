from rest_framework import serializers
from django.contrib.auth import get_user_model
from apps.supplies.models import Warehouse
User = get_user_model()

# serializador para los supplies y warehouses
class WarehouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Warehouse
        fields = '__all__'

class WarehouseSerializerCreate(serializers.ModelSerializer):
    class Meta:
        model = Warehouse
        exclude = ['company', 'creator']

    def create(self, validated_data):
        company_id = self.context['view'].kwargs.get('company_id')
        creator_id = self.context['view'].kwargs.get('creator_id')

        validated_data['company_id'] = company_id
        validated_data['creator_id'] = creator_id

        return super().create(validated_data)
