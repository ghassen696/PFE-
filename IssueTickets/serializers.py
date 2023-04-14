#importing my model(this helps us converting complex types of model instances into python data types that can be rendered into json or xml)
from rest_framework import serializers
from .models import Issues,Issuetype,Priority,Project,Resolution,Status,jira_users

class IssuesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issues
        #fields = ('project_id', 'priority', 'ticket_number', 'ticket_summary', 'assignee','creation_date','due_date','resolution_date','total_tickets_resolved','current_tickets_assigned','employee_name')
        fields= '__all__'
class IssuetypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Issuetype
        fields= '__all__'
class PrioritySerializer(serializers.ModelSerializer):
    class Meta:
        model = Priority
        fields= '__all__'
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields= '__all__'
class ResolutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resolution
        fields= '__all__'
class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields= '__all__'
class usersseri(serializers.ModelSerializer):
    class Meta:
        model = jira_users
        #fields = ('project_id', 'priority', 'ticket_number', 'ticket_summary', 'assignee','creation_date','due_date','resolution_date','total_tickets_resolved','current_tickets_assigned','employee_name')
        fields= '__all__'
        #serilizer to handle the post request
class checkuserserilizer(serializers.ModelSerializer):
    class Meta:
        model = jira_users
        fields = ('username', 'password')
       
