from django.http import JsonResponse
from .jira import get_jira_data

def jira_data(request):
    print('helolo world')
    data = get_jira_data()
    return JsonResponse(data, safe=False)
