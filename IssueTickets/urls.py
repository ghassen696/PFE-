from django.urls import path,include
#from .views import IssueList
from .views import TicketsAPI,TicketsdetailAPI,AssigneesAPI,LoginAPI,LoginAPI
urlpatterns = [
   # path('issues/', IssueList.as_view(), name='issue-list'),
    #path('issuesfilter/', ticketsapibackend.as_view(), name='filtering'),
    path('TicketsAPI/', TicketsAPI.as_view(), name='TicketsAPI'),
    #path('api/', TicketsListAPIView.as_view(), name='api'),
    path('TicketsdetailAPI/<int:pk>', TicketsdetailAPI.as_view(), name='TicketsdetailAPI'),
    #path('register/', register.as_view(), name='register'),
    path('AssigneesAPI/', AssigneesAPI.as_view(), name='AssigneesAPI'),
    path('LoginAPI/', LoginAPI.as_view(), name='LoginAPI'),
    path('login/',LoginAPI.as_view(), name='login'),


    #path('login/',login_view.as_view(), name='login'),
    #path('api/token/', LoginView.as_view(), name='token_obtain_pair'),


    #path('issues/<int:key>', IssueList.as_view(), name='issue-detail'),
]
#python manage.py runserver