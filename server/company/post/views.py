from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets, generics
from rest_framework.parsers import MultiPartParser, FormParser


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostList(generics.ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        user = self.kwargs["user"]
        return Post.objects.filter(user=user)


class ProfilePostsList(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfilePostsSerializer


class FollowingPostsList(generics.ListAPIView):
    serializer_class = FollowingPostsSerializer

    def get_queryset(self):
        user = self.kwargs["user"]
        return Post.objects.filter(user__followed_by=user)
