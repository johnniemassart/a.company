from .models import *
from .serializers import *
from rest_framework import viewsets, generics, filters
from rest_framework.views import APIView
from rest_framework.response import Response
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


class UserUsernameViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserUsernameSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostList(generics.ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        user = self.kwargs["user"]
        return Post.objects.filter(user=user)


class ProfileFollowsList(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileFollowsSerializer


class ProfileFollowedByList(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileFollowedBySerializer


class ProfilePostsList(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfilePostsSerializer

    # def get_queryset(self):
    #     following = Profile.objects.filter(follows=self.request.user)
    #     return Post.objects.filter(user__follows=following)


# ------------ MY space to think
class FollowingPosts(generics.ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        user = self.kwargs["user"]
        return Post.objects.filter(user__followed_by=user)
