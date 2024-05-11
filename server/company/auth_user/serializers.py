from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import *


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ["follows", "about", "profile_pic"]


class UserSerializer(ModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "username", "email", "profile"]

    def create(self, validated_data):
        profile_data = validated_data.pop("profile")
        user = User.objects.create(**validated_data)
        for prof_data in profile_data:
            Profile.objects.create(user=user, **prof_data)
        return user

    def update(self, instance, validated_data):
        if "profile" in validated_data:
            nested_serializer = self.fields["profile"]
            nested_instance = instance.profile
            # note the data is `pop`ed
            nested_data = validated_data.pop("profile")
            nested_serializer.update(nested_instance, nested_data)
            # this will not throw an exception,
            # as `profile` is not part of `validated_data`
        return super(UserSerializer, self).update(instance, validated_data)


class ProfileAllSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ["user", "about", "profile_pic", "follows"]


class ProfileFollowsSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ["user", "follows"]


class ProfileFollowedBySerializer(ModelSerializer):
    followed_by = serializers.StringRelatedField(many=True)

    class Meta:
        model = Profile
        fields = ["user", "followed_by"]


class UsernameSerializer(ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta:
        model = Profile
        fields = ["id", "user", "profile_pic"]


class ProfileFollowingSerializer(ModelSerializer):
    follows = UsernameSerializer(many=True)

    class Meta:
        model = Profile
        fields = ["user", "follows"]
