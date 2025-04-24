from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProgamViewSet

router = DefaultRouter()
router.register(r'', ProgamViewSet, basename='programs')

urlpatterns = [
    path('', include(router.urls)),
]