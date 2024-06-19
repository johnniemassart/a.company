from django.urls import path, include, re_path
from .views import *
from rest_framework.routers import DefaultRouter

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

router = DefaultRouter()
router.register("users", UserViewSet)
router.register("profiles", ProfileViewSet)
router.register("following", UserFollowingViewSet, basename="following")
router.register("applied_users", AppliedUsersViewset, basename="applied_users")

urlpatterns = [
    path("", include(router.urls)),
    # path("applied_users/", applied_users, name="applied_users"),
    path("profile_followed_by/", ProfileFollowedByList.as_view()),
    path("favorite/<int:id>/", favorite_add, name="favorite_add"),
    path("follow/<int:id>/", follow_add, name="follow_add"),
    path("api/token/", MyTokenObtainView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
