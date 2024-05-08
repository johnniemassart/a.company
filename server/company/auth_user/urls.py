from django.urls import path, include, re_path
from .views import *
from rest_framework.routers import DefaultRouter

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

router = DefaultRouter()
router.register("users", UserViewSet)
router.register("profiles", ProfileViewSet)
router.register("posts", PostViewSet)
router.register("following", UserFollowingViewSet, basename="following")

urlpatterns = [
    path("", include(router.urls)),
    path("users/posts/<int:user>/", PostList.as_view(), name="user_posts"),
    path("profile_followed_by/", ProfileFollowedByList.as_view()),
    path("profile_posts/", ProfilePostsList.as_view()),
    path("following_posts/<int:user>/", FollowingPosts.as_view()),
    path("api/token/", MyTokenObtainView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
