from .models import *
from post.models import Post
from .serializers import *
from rest_framework import viewsets, generics, filters
from django.shortcuts import get_object_or_404, HttpResponseRedirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token["user_id"] = str(user.id)
        token["first_name"] = user.first_name
        token["last_name"] = user.last_name
        token["username"] = user.username
        token["email"] = user.email
        # ...

        return token


class MyTokenObtainView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileAllSerializer
    parser_classes = [MultiPartParser, FormParser]

    # def partial_update(self, request, *args, **kwargs):
    #     follows = request.data["follows"]


class ProfileFollowsViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileFollowsSerializer


class ProfileFollowedByList(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileFollowedBySerializer


class UserFollowingViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileFollowingSerializer


def favorite_add(request, id):
    post = get_object_or_404(Post, id=id)
    if post.favorites.filter(id=request.user.id).exists():
        post.favorites.remove(request.user)
    else:
        post.favorites.add(request.user)
    return HttpResponseRedirect(request.META["HTTP_REFERER"])
