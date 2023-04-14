import django_filters
from .models import Issues

class TicketsFilter(django_filters.FilterSet):
    class Meta:
        model = Issues
        fields = {
            'id': ['icontains'],
            'assignee': ['icontains'],
            'priority': ['icontains'],
            'status': ['icontains']
        }
        ordering = ['-created', 'created']
