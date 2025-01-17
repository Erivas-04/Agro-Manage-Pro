from rest_framework import serializers
from django.contrib.auth import get_user_model
from apps.supplies.models import Supplies

User = get_user_model()

class SuppliesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplies
        exclude = ['company', 'warehouse']

class SuppliesSerializerCreate(serializers.ModelSerializer):
    class Meta:
        model = Supplies
        exclude = ['company', 'warehouse', 'creator']
    def create(self, validated_data):
        company_id = self.context['view'].kwargs.get('company_id')
        creator_id = self.context['view'].kwargs.get('creator_id')
        warehouse_id = self.context['view'].kwargs.get('warehouse_id')

        validated_data['company_id'] = company_id
        validated_data['creator_id'] = creator_id
        validated_data['warehouse_id'] = warehouse_id

        return super().create(validated_data)
