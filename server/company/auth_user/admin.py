from django.contrib import admin
from django.contrib.auth.models import Group
from .models import *
from django.contrib.auth.admin import UserAdmin

# unregister Group
admin.site.unregister(Group)


# User Profile Inline
class UserProfileInline(admin.TabularInline):
    model = Profile


# Customer user model
class UserAdminConfig(UserAdmin):
    search_fields = ("username", "first_name", "last_name", "email")
    list_filter = ("is_staff", "is_superuser")
    ordering = ("username",)
    list_display = ("username", "first_name", "last_name", "email")
    fieldsets = (
        (None, {"fields": ("username",)}),
        ("Personal Information", {"fields": ("first_name", "last_name", "email")}),
        (
            "Permissions",
            {
                "fields": (
                    "is_staff",
                    "is_superuser",
                )
            },
        ),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    "first_name",
                    "last_name",
                    "username",
                    "email",
                    "password1",
                    "password2",
                    "is_staff",
                    "is_active",
                ),
            },
        ),
    )
    inlines = [UserProfileInline]


admin.site.register(User, UserAdminConfig)
