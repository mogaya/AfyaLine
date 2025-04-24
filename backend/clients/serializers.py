from rest_framework import serializers
from .models import Client

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id', 'full_name', 'email', 'phone_number', 'date_of_birth', 'gender', 'date_registered']
        read_only_fields = ['id', 'date_registered']
