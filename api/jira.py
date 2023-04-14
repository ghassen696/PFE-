import requests
from django.conf import settings
from requests.auth import HTTPBasicAuth

def get_jira_data():
    url = "http://jira.cf.linedata.com/hlekip/rest/api/2/search"
    headers = {
        'Content-Type': 'application/json'
    }
    params = {
        'jql':'assignee=yzouari',
        #'maxResults': 100,
    }
    auth = HTTPBasicAuth("MJedidi", "Linedata84")

    try:
        response = requests.get(url, headers=headers, params=params, auth=auth)
        response.raise_for_status()  # Check if the response has an HTTP error status code
        data = response.json()
    except requests.exceptions.RequestException as e:
        # Handle exceptions raised by the requests module (e.g., timeouts, connection errors)
        print(f"Error occurred while retrieving JIRA data: {e}")
        return None

    # Check if the response is in the expected JSON format
    if 'issues' not in data:
        print(f"Unexpected JIRA response format: {data}")
        return None

    # Extract relevant data from the response
    issues = data['issues']
    result = []
    for issue in issues:
        summary = issue['fields']['summary']
        description = issue['fields']['description']
        assignee = issue['fields']['assignee']['displayName']
        status = issue['fields']['status']['name']
        #RESOLUTION = issue['fields']['RESOLUTION']
        name = issue['fields']['name']
        #ID = issue['fields']['Id']

        result.append({
            'summary': summary,
            'description': description,
            'assignee': assignee,
            'status': status,
            #'RESOLUTION':RESOLUTION,
            'name':name,
            #'ID':ID,
        })
    return result

            
    
"""

            
# This code sample uses the 'requests' library:
# http://docs.python-requests.org
def get_jira_data():
    url = "http://jira.cf.linedata.com/rest/api/3/search"

    auth = HTTPBasicAuth("Ghassen.Guagui@se.linedata.com", "OTMwMzY2NjY3NTAzOmxROtO+ljfACKJfMeNSb8YUPiep")

    headers = {
    "Accept": "application/json"
    }
    query = {
    'jql': 'project = LPS-GETONE-2015'
    }
    response = requests.request(
    "GET",
    url,
    headers=headers,
    params=query,
    auth=auth
    )

    return print(json.dumps(json.loads(response.text), sort_keys=True, indent=4, separators=(",", ": ")))"""