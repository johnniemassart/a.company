from django.contrib import admin
from .models import *


class PostImageInline(admin.StackedInline):
    model = PostImage
    extra = 0


class PostAdmin(admin.ModelAdmin):
    inlines = [PostImageInline]


admin.site.register(Post, PostAdmin)
# admin.site.register(PostImage)
