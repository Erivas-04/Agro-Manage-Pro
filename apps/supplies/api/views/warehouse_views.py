from rest_framework import generics, status
from apps.supplies.api.serializers.warehouse_serializers import WarehouseSerializer, WarehouseSerializerCreate
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

class WarehouseCreate(Authentication, generics.CreateAPIView):
    serializer_class = WarehouseSerializerCreate

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data = {
                'message': 'Warehouse created successfully'
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
