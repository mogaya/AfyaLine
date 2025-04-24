from rest_framework import viewsets
from .models import Enrollment
from .serializers import EnrollmentSerializer

# Create your views here.
class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.all().order_by('-enrollment_date')
    serializer_class = EnrollmentSerializer