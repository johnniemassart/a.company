from .models import *
from .serializers import *
from rest_framework import viewsets, generics, filters
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

    # def perform_create(self, serializer):
    #     return serializer.save(user=self.request.user)

    def create(self, request, *args, **kwargs):
        user = request.data["user"]
        about = request.data["about"]
        profile_pic = request.data["profile_pic"]
        follows = request.data["follows"]
        return Profile.objects.create(
            user=user, about=about, profile_pic=profile_pic, follows=follows
        )


class ProfileFollowsViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileFollowsSerializer


class ProfileFollowedByList(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileFollowedBySerializer


class UserFollowingViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileFollowingSerializer
