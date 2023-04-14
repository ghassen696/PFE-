from django.core.management.base import BaseCommand
from IssueTickets.models import jira_users
import pymysql
from django.contrib.auth.models import User
import pymysql.cursors
import datetime

class Command(BaseCommand):
    help = 'Fetches new user registrations from SQL database and adds them to Django User model'

    def handle(self, *args, **options):
        # Connect to SQL database
        connection = pymysql.connect(
            host='localhost',
            user='root',
            password='',
            db='jira_hotline',
            charset='utf8mb4',
            cursorclass=pymysql.cursors.DictCursor
        )

        # Fetch all users from jira_users table
        with connection.cursor() as cursor:
            cursor.execute('SELECT * FROM jira_users;')
            sql_users = cursor.fetchall()

        # Create or update User model objects and save to Django database
        added_users = 0
        updated_users = 0
        for sql_user in sql_users:
            try:
                user = User.objects.get(username=sql_user['USER_NAME'])
                # Update user if it exists
                user.email = sql_user['email']
                user.set_password(sql_user['id'])

                user.save()
                updated_users += 1
            except User.DoesNotExist:
                # Create new user if it doesn't exist
                user = User(
                    username=sql_user['USER_NAME'],
                    email=sql_user['email'],
                    password=sql_user['id'],
                )
                user.save()
                added_users += 1

        self.stdout.write(self.style.SUCCESS(f'Successfully added {added_users} new users and updated {updated_users} users in Django User model.'))

"""import axios from 'axios';

// Make a POST request to the API endpoint
axios.post('/update-users/')
  .then(response => {
    console.log('Users updated successfully.', response.data);
  })
  .catch(error => {
    console.error('Failed to update users:', error);
  });
///////////*
from django.urls import path
from .views import UpdateUsersAPIView

urlpatterns = [
    path('update-users/', UpdateUsersAPIView.as_view(), name='update_users'),
    # Add other URL patterns as needed
]
////////////
from django.core.management import call_command
from rest_framework.views import APIView
from rest_framework.response import Response

class UpdateUsersAPIView(APIView):
    def post(self, request):
        # Call the handle method of your Command class
        call_command('mycommand')
        return Response({'message': 'Users updated successfully.'})
"""