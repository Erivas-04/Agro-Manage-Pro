from rest_framework import generics, status
from apps.supplies.api.serializers.supplies_serializers import SuppliesSerializer, SuppliesSerializerCreate
from rest_framework.response import Response
from apps.company.models import UserAsigned
from apps.supplies.models import Supplies
from apps.login_logout.authentication_mixins import Authentication

class SuppliesList(Authentication, generics.ListCreateAPIView):
    serializer_class = SuppliesSerializer

    def get_queryset(self):
        id_user = self.kwargs.get('id_user')
        user = UserAsigned.objects.filter(id=id_user).first()

        if not user:
            return Supplies.objects.none()

        return Supplies.objects.filter(company__id=user.company.id)

class SuppliesCreate(Authentication, generics.CreateAPIView):
    serializer_class = SuppliesSerializerCreate


    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data = {
                'message': 'Supplies created successfully'
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
