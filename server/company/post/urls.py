from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("posts", PostViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("user/posts/<int:user>/", PostList.as_view(), name="user_posts"),
    path("profile/posts/", ProfilePostsList.as_view(), name="profile_posts"),
    path(
        "profile/following_posts/<int:user>/",
        FollowingPostsList.as_view(),
        name="profile_following_posts",
    ),
]
