from rest_framework import serializers
from django.contrib.auth import get_user_model
from apps.supplies.models import Supplies

User = get_user_model()

class SuppliesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplies
        exclude = ['company', 'warehouse']
