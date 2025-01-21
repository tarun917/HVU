from rest_framework import serializers
from .models import Course
from django.contrib.auth.models import User

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'  # या ['id', 'title', 'description', 'created_at']
        
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']  # आदि