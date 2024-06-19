from .models import *
from post.models import Post
from .serializers import *
from rest_framework import viewsets, generics, filters
from django.shortcuts import get_object_or_404, HttpResponseRedirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user
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


@csrf_exempt
# @login_required
def favorite_add(request, id):
    post = get_object_or_404(Post, id=id)
    if request.method == "POST":
        # print(id)
        # print(post)
        if post.favorites.filter(id=request.POST.get("favorites")).exists():
            post.favorites.remove(request.POST.get("favorites"))
        else:
            post.favorites.add(request.POST.get("favorites"))
    return HttpResponseRedirect(request.META["HTTP_REFERER"])


@csrf_exempt
# @login_required
def follow_add(request, id):
    # print(f"id -> {id}")
    # print(f"follows id - {request.POST.get("follows")}")
    profile = get_object_or_404(Profile, id=id)
    if request.method == "POST":
        if profile.follows.filter(id=request.POST.get("follows")).exists():
            profile.follows.remove(request.POST.get("follows"))
        else:
            profile.follows.add(request.POST.get("follows"))
    return HttpResponseRedirect(request.META["HTTP_REFERER"])


# def applied_users(request):
#     pass


class AppliedUsersViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = AppliedUsersSerializer
