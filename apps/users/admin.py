from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from apps.users.models import User
from .forms import CustomUserCreationForm


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {'fields': ('username', 'name', 'last_name', 'tel', 'observations', 'changePassword', 'changePasswordNextSession', 'is_active')}),
            ('Permisos', {'fields': ('groups', 'is_staff')}),
        ('Important dates', {'fields': ('last_login',)}))
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'name', 'last_name', 'tel', 'observations', 'changePassword', 'changePasswordNextSession', 'role', 'password1', 'password2'),
        }),
    )
    list_display = ('username', 'name', 'last_name', 'role', 'is_active')

