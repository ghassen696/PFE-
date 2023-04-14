"""# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
#from rest_framework import PageNumberPagination,generics
import math
from .models import Issue
from .serializers import IssueSerializer
import pandas as pd
import openpyxl

class LargeResultsSetPagination(PageNumberPagination):
    page_size = 40
    page_size_query_param = 'page_size'
    max_page_size = 10000


class IssueList(APIView):
    def get(self, request):
        # read data from Excel file
        wb = openpyxl.load_workbook('C:/Users/GGuagui/Downloads/Project/Back_End/Ticket_BackEnd/IssueTickets/JIRATICKETS.xlsx')
        ws = wb.active
        data = ws.values
        columns = next(data)
        df = pd.DataFrame(data, columns=columns)
        
        # convert data to list of Issue instances
        issues = []
        for index, row in df.iterrows():
            creation_date = row['Creation Date'] if not pd.isna(row['Creation Date']) else None
            due_date = row['Due Date'] if not pd.isna(row['Due Date']) else None
            resolution_date = row['Resolution Date'] if not pd.isna(row['Resolution Date']) else None
            issue = Issue(project_id=row['PROJECT_ID'], priority=row['PRIORITY'], 
                          ticket_number=row['Ticket Number'], ticket_summary=row['Ticket Summary'],
                          assignee=row['Assignee'],creation_date=creation_date, due_date=due_date,
                          resolution_date=resolution_date, total_tickets_resolved=row['Total Tickets Resolved'],
                          current_tickets_assigned=row['Current Tickets Assigned'], employee_name=row['Employee Name'])
            issues.append(issue)
        
        # serialize data and return response
        serializer = IssueSerializer(issues, many=True)
        return Response(serializer.data)
#class techerlist(generics.listcreateapiview)
#class techerdetail(generics.retreiveupdatedestroyapiview)
class ticketsapibackend(APIView):
    def get(self, request):
        # read data from Excel file
        wb = openpyxl.load_workbook('C:/Users/GGuagui/Downloads/Project/Back_End/Ticket_BackEnd/IssueTickets/JIRATICKETS.xlsx')
        ws = wb.active
        data = ws.values
        columns = next(data)
        df = pd.DataFrame(data, columns=columns)
        
        # convert data to list of Issue instances
        issues = []
        for index, row in df.iterrows():
            creation_date = row['Creation Date'] if not pd.isna(row['Creation Date']) else None
            due_date = row['Due Date'] if not pd.isna(row['Due Date']) else None
            resolution_date = row['Resolution Date'] if not pd.isna(row['Resolution Date']) else None
            issue = Issue(project_id=row['PROJECT_ID'], priority=row['PRIORITY'], 
                          ticket_number=row['Ticket Number'], ticket_summary=row['Ticket Summary'],
                          assignee=row['Assignee'],creation_date=creation_date, due_date=due_date,
                          resolution_date=resolution_date, total_tickets_resolved=row['Total Tickets Resolved'],
                          current_tickets_assigned=row['Current Tickets Assigned'], employee_name=row['Employee Name'])
            issues.append(issue)
        s= request.GET.get('s')
        page=int(request.GET.get('page',1))
        per_page=20
        #if s:
        #    issues=issues.filter(assignee__contains=s)
        #if s:
        #   issues = [issue for issue in issues if s in issue.employee_name]
        start=(page-1)*per_page
        end=page*per_page
        total =len(issues)
        serializer = IssueSerializer(issues[start:end], many=True)
        return Response({
            'data':serializer.data,
            'total':total,
            'page':page,
            'last_page':math.ceil(total/per_page)})
"""
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, exceptions
from rest_framework.response import Response
from .models import Issues,jira_users

from .serializers import IssuesSerializer,checkuserserilizer,usersseri
#from django.db.models import Q
from django.core.paginator import Paginator

#from django_filters.rest_framework import DjangoFilterBackend
#from .filters import TicketsFilter
from django.http import JsonResponse
class TicketsAPI(APIView):
    def get(self, request, pk=0):
        issues = Issues.objects.all()
        s = request.GET.get('id')
        ass = request.GET.get('assignee')
        stat = request.GET.get('status')
        sort = request.GET.get('sort') 
        pry = request.GET.get('priority')
        cl = request.GET.get('client') 
 

        if s:
            issues = issues.filter(id__icontains=s)
          #this ignores the lower and upper case of the field  
            #issues = issues.filter(Q(assignee__icontains=s) | Q(id__icontains=s))
            #issues = issues.filter(id=s)

        if sort =='asc':
            issues =issues.order_by('created')
        elif sort=='desc':
            issues =issues.order_by('-created')
        if ass:
            issues = issues.filter(assignee__icontains=ass)
        if stat:
            issues = issues.filter(status__icontains=stat)
        if pry:
            issues = issues.filter(priority__icontains=pry)
        if cl:
            issues = issues.filter(client__icontains=cl)

       

        paginator = Paginator(issues, 20)
        page = request.GET.get('page', 1)
        issues_page = paginator.get_page(page)
        serializer = IssuesSerializer(issues_page, many=True)
        return Response({
            'data': serializer.data,
            'total': paginator.count,
            'page': issues_page.number,
            'last_page': paginator.num_pages
        })
class TicketsdetailAPI(APIView):
    def get(self, request, pk):
        try:
            issue = Issues.objects.get(pk=pk)
        except Issues.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        except Issues.MultipleObjectsReturned:
            issues = Issues.objects.filter(pk=pk)
            serializer = IssuesSerializer(issues, many=True)
            return Response(serializer.data)
        else:
            serializer = IssuesSerializer(issue)
            return Response(serializer.data)
class AssigneesAPI(APIView):
       def get(self, request, pk=0):
        issues = Issues.objects.all()
        """  ass = request.GET.get('assignee')
        if ass:
        assignees = [assignee for assignee in assignees if ass.lower() in assignee.lower()]"""
        assignees = [issue.assignee for issue in issues]  # Extract assignee field from each object
        return Response({'assignees': assignees})
import json

class LoginAPI(APIView):
    def post(self, request):
        username = request.data.get('username')  
        password = request.data.get('password')  

        
        if not username or not password:
            return Response({'error': 'Username and password are required.'}, status=400)

        try:
            user = jira_users.objects.get(First_name=username) 
            if user.check_password(password): 
                return Response({'message': 'You have been logged in successfully!'}, status=200)            
            else:
                return Response({'error': 'Invalid username or password.'}, status=400)

        except jira_users.DoesNotExist:
            return Response({'error': 'Invalid username or password.'}, status=400)




 #failed when filtering with filters class       
"""
class TicketsListAPIView(APIView):
    def get(self, request):
        issue = Issues.objects.all()
        serializer = IssuesSerializer(issue, many=True)
        filterset_class = TicketsFilter(request.query_params, queryset=issue)
        serialized_data = serializer.data
        filtered_data = filterset_class.qs
        filtered_serializer = IssuesSerializer(filtered_data, many=True)
        return Response(filtered_serializer.data)
"""
"""
class login_view(APIView):
    def post(self,request):
            email = request.data['email']
            password = request.data['password'] 
            user = tablename.object.filter(email=email).first()
            if user is None:
               raise exceptions.AuthenticationFailed('User not found !')
            if not user.check_password(password):
                raise exceptions.AuthenticationFailed('Invalid password !')
            return Response({'messaage':'success' })
class register(APIView):
    def post(self,request):
            ser=User(data=request.data)
            ser.is_valid(raise_exception=True)
            ser.save()
            return Response(ser.data)"""
"""from rest_framework_simplejwt.views import TokenObtainPairView

class LoginView(TokenObtainPairView):

    serializer_class = MyTokenObtainPairSerializer
    """
"""from django.core.management import call_command
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework import status

@csrf_exempt
@api_view(['POST'])
def sync_users(request):
    # Check if the request method is POST
    if request.method == 'POST':
        try:
            # Trigger the custom management command to add new users
            call_command('sync_users_command') # Replace 'sync_users_command' with the name of your custom management command
            return JsonResponse({'message': 'Users synced successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return JsonResponse({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    else:
        return JsonResponse({'message': 'Invalid request method'}, status=status.HTTP_400_BAD_REQUEST)
////////////////import React from 'react';
import axios from 'axios';

const syncUsers = () => {
    // Send API request to trigger the custom management command
    axios.post('/api/sync_users/')
    .then(response => {
        console.log(response.data.message); // Handle success response
    })
    .catch(error => {
        console.error(error); // Handle error response
    });
};

const SyncUsersButton = () => {
    return (
        <button onClick={syncUsers}>Sync Users</button>
    );
};

export default SyncUsersButton;
"""
