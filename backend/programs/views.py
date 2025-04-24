from rest_framework import viewsets
from .models import Program
from .serializers import ProgramSerializer

# Create your views here.
class ProgamViewSet(viewsets.ModelViewSet):
    queryset = Program.objects.all().order_by('-start_date')
    serializer_class = ProgramSerializer