from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import *


class PostImageSerializer(ModelSerializer):

    class Meta:
        model = PostImage
        fields = "__all__"


class PostImageOnlySerializer(ModelSerializer):

    class Meta:
        model = PostImage
        fields = ["id", "image"]


class PostSerializer(ModelSerializer):
    # user = serializers.StringRelatedField()
    images = PostImageOnlySerializer(many=True, read_only=True, required=False)
    uploaded_images = serializers.ListField(
        child=serializers.ImageField(max_length=100000, use_url=False),
        write_only=True,
        required=False,
    )

    class Meta:
        model = Post
        fields = [
            "id",
            "title",
            "content",
            "images",
            "uploaded_images",
            "favorites",
            "created_at",
            "user",
        ]

    def create(self, validated_data):
        if validated_data.get("uploaded_images") is not None:
            uploaded_images = validated_data.pop("uploaded_images")
            post = Post.objects.create(**validated_data)
            for image in uploaded_images:
                new_post_img = PostImage.objects.create(post=post, image=image)
        else:
            post = Post.objects.create(**validated_data)
        return post


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
