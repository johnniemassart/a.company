from rest_framework.serializers import ModelSerializer
from .models import *


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "username", "email"]


# class ProfileSerializer(ModelSerializer):
#     class Meta:
#         model = Profile
#         fields = "__all__"
