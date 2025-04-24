from rest_framework import serializers
from .models import Enrollment
from clients.models import Client
from programs.models import Program

class EnrollmentSerializer(serializers.ModelSerializer):
    client_full_name = serializers.ReadOnlyField(source='client.full_name')
    program_name = serializers.ReadOnlyField(source='program.name')

    class Meta:
        model = Enrollment
        fields = ['id', 'client', 'client_full_name', 'program', 'program_name', 'enrollment_date']
        read_only_fields = ['id', 'enrollment_date', 'client_full_name', 'program_name']
