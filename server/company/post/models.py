from django.db import models
from auth_user.models import Profile


class Post(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="posts")
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title


# class PostImage(models.Model):
#     def upload_to(instance, filename):
#         return "post/{filename}".format(filename=filename)

#     post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="images")
#     image = models.ImageField(null=True, blank=True, upload_to=upload_to)
