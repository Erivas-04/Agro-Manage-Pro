from rest_framework import generics, status
from apps.supplies.api.serializers.warehouse_serializers import WarehouseSerializer
from rest_framework.response import Response
from apps.company.models import UserAsigned
from apps.supplies.models import Warehouse
from apps.login_logout.authentication_mixins import Authentication

class WarehouseList(Authentication, generics.ListCreateAPIView):
    serializer_class = WarehouseSerializer

    def get_queryset(self):
        id_user = self.kwargs.get('id_user')
        user = UserAsigned.objects.filter(id=id_user).first()
        return Warehouse.objects.filter(company__id=user.company.id)
