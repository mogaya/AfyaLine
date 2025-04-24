from django.db import models
from clients.models import Client
from programs.models import Program

# Create your models here.
class Enrollment(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='enrollments')
    program = models.ForeignKey(Program, on_delete=models.CASCADE, related_name='enrollments')
    enrollment_date = models.DateField(auto_now_add=True)

    class Meta:
        unique_together = ('client', 'program')
        ordering = ['-enrollment_date']

    def __str__(self):
        return f"{self.client.full_name} enrolled in {self.program.name} on {self.enrollment_date}"