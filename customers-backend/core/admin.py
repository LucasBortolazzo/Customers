from django.contrib import admin
from core.models import Customer

class CustomersAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'age', 'city']
    list_display_links = ('id', 'name')
    search_fields = ('id', 'name', 'age', 'city')
    list_per_page = 10
    ordering = ('-id',)

admin.site.register(Customer, CustomersAdmin)
