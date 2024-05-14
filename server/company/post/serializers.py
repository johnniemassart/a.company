from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import *


class PostSerializer(ModelSerializer):
    # user = serializers.StringRelatedField()

    class Meta:
        model = Post
        fields = "__all__"


class ProfilePostsSerializer(ModelSerializer):
    posts = PostSerializer(many=True)

    class Meta:
        model = Profile
        fields = ["user", "posts"]


class FollowingPostsSerializer(ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta:
        model = Post
        fields = "__all__"
