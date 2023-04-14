from django.db import models
# Create your models here.

class Issues(models.Model):
    timespent = models.IntegerField(blank=True, null=True)
    project_id = models.TextField(blank=True, null=True)
    duedate = models.DateField(blank=True, null=True)
    resolutiondate = models.DateField(blank=True, null=True)
    created = models.DateField(blank=True, null=True)
    priority = models.TextField(blank=True, null=True)
    updated = models.DateField(blank=True, null=True)
    status = models.CharField(max_length=110, blank=True, null=True)
    issuetype = models.IntegerField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    summary = models.TextField(blank=True, null=True)
    creator = models.TextField(blank=True, null=True)
    reporter = models.TextField(blank=True, null=True)
    id = models.IntegerField(primary_key=True)
    timeestimate = models.IntegerField(blank=True, null=True)
    timeoriginalestimate = models.IntegerField(blank=True, null=True)
    assignee = models.TextField(blank=True, null=True)
    client = models.TextField(blank=True, null=True)
    resolution = models.IntegerField(blank=True, null=True)
    project_name = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'issues'
class Issuetype(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField()
    description = models.TextField()
    subtask = models.TextField()
    avatarid = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'issuetype'


class Priority(models.Model):
    id = models.IntegerField(primary_key=True)
    description = models.TextField(blank=True, null=True)
    name = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'priority'


class Project(models.Model):
    id = models.IntegerField(primary_key=True,)
    name = models.TextField()
    key = models.TextField()
    description = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'project'


class Resolution(models.Model):
    id = models.IntegerField(primary_key=True)
    description = models.TextField(blank=True, null=True)
    name = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'resolution'


class Status(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    statuscategory = models.IntegerField(db_column='statusCategory', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'status'


"""class Tab(models.Model):
    timespent = models.IntegerField()
    project_id = models.IntegerField()
    duedate = models.DateTimeField()
    resolutiondate = models.DateTimeField()
    created = models.DateTimeField()
    priority = models.IntegerField()
    updated = models.DateTimeField()
    status = models.IntegerField()
    issuetype = models.IntegerField(blank=True, null=True)
    description = models.CharField(max_length=255)
    summary = models.CharField(max_length=255)
    creator = models.CharField(max_length=255)
    reporter = models.CharField(max_length=255)
    id = models.IntegerField(primary_key=True)
    timeestimate = models.IntegerField(blank=True, null=True)
    assignee = models.CharField(max_length=255,blank=True, null=True)
    timeoriginalestimate = models.IntegerField(blank=True, null=True)
    client = models.CharField(max_length=255,blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tab'"""

class jira_users(models.Model):
    id = models.CharField(max_length=100, unique=True, primary_key=True)
    
    email = models.CharField(max_length=255)
    First_name = models.CharField(max_length=255)
    CREATED_DATE=models.DateField()
    UPDATED_DATE=models.DateField()
    def check_password(self, password):
        if self.First_name == password :
            return True
        else : return False

    class Meta:
        managed = False
        db_table = 'jira_users'
