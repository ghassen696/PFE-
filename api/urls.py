from django.urls import path
from .views import jira_data

urlpatterns = [
    path('jira-issues/', jira_data, name='jira_issues'),
]
