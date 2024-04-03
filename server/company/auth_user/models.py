from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)


class UserManager(BaseUserManager):
    def create_superuser(
        self, first_name, last_name, username, email, password, **other_fields
    ):
        other_fields.setdefault("is_staff", True)
        other_fields.setdefault("is_superuser", True)
        if other_fields.get("is_staff") is not True:
            raise ValueError("Superuser must be assigned to is_staff=True.")
        if other_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must be assigned to is_superuser=True.")
        return self.create_user(
            first_name, last_name, username, email, password, **other_fields
        )

    def create_user(
        self, first_name, last_name, username, email, password, **other_fields
    ):
        if not first_name:
            raise ValueError("First name required.")
        if not last_name:
            raise ValueError("Last name required.")
        if not username:
            raise ValueError("Username required.")
        if not email:
            raise ValueError("Email required.")
        if not password:
            raise ValueError("Password required.")
        email = self.normalize_email(email)
        user = self.model(
            first_name=first_name,
            last_name=last_name,
            username=username,
            email=email,
            **other_fields
        )
        user.set_password(password)
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = UserManager()

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["first_name", "last_name", "email"]

    def __str__(self):
        return self.username
