# Generated by Django 5.0.4 on 2024-04-13 00:16

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("auth_user", "0002_profile"),
    ]

    operations = [
        migrations.AddField(
            model_name="profile",
            name="follows",
            field=models.ManyToManyField(
                blank=True,
                null=True,
                related_name="followed_by",
                to="auth_user.profile",
            ),
        ),
    ]
