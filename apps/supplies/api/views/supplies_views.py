from rest_framework import generics, status
from apps.supplies.api.serializers.supplies_serializers import SuppliesSerializer
from rest_framework.response import Response
from apps.company.models import UserAsigned
from apps.supplies.models import Supplies
from apps.login_logout.authentication_mixins import Authentication

class SuppliesList(Authentication, generics.ListCreateAPIView):
    serializer_class = SuppliesSerializer

    def get_queryset(self):
        id_user = self.kwargs.get('id_user')
        user = UserAsigned.objects.filter(id=id_user).first()

        return Supplies.objects.filter(company__id=user.company.id)
