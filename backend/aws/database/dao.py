import boto3

class dao:
    def __init__(self):
        self.data = ''
        self.email = ''
        self.password = ''
        self.name = ''
        self.location = ''
        self.department = ''
        self.convoTopics = []

        self.table = boto3.resource('dynamodb').Table('users')

    def getData(self, email):
        self.email = email
        response = self.table.get_item(
        Key={
            'email': self.email
        }
        )
        self.data = response
        return self.data
        
    def checkUser(self):
        pass

    def createUser(self):
        pass

