import boto3
from boto3.dynamodb.conditions import Key

class dynamodao:
    def __init__(self):
        self.data = ''
        self.email = ''
        self.password = ''
        self.name = ''
        self.location = ''
        self.department = ''
        self.convoTopics = []
        self.isOnline = False

        self.table = boto3.resource('dynamodb').Table('users')

    def getData(self, email):
        self.email = email
        response = self.table.query(
            IndexName = 'email',
            KeyConditionExpression = Key('email').eq(self.email)
        )
        self.data = response['Items']
        print(self.data)
        return self.data
        
    def addUser(self, email, password):
        self.email = email
        self.password = password
        response = self.table.put_item(
            Item={
                'email': self.email.lower(),
                'password': self.password
            }
        )
        print(response)
        return response

    def verifyUser(self, email, password):
        response = self.getData(email.lower())
        if not response:
            return False
        elif response[0]['password'] == password.lower():
            return True
        else:
            return False

    def addUserData(self, email, name):
        self.email = email
        self.name = name
        response = self.table.update_item(
            Key={
                'email': self.email.lower()
                },
            UpdateExpression="set person_name = :g",
            ExpressionAttributeValues={
                ':g': self.name
            },
            ReturnValues="UPDATED_NEW"
        )
        print(response)
        return response
    
    def addOnlineStatus(self, email, isOnline):
        self.isOnline = isOnline
        self.email = email
        response = self.table.update_item(
            Key={
                'email': self.email.lower()
            },
            UpdateExpression="set person_online = :g",
            ExpressionAttributeValues={
                ':g': self.isOnline
            },
            ReturnValues="UPDATED_NEW"
        )
        print(response)
        return response