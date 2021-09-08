from __future__ import print_function
import os.path

from modules.google import Create_Service
import base64
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import random

class sendEmail():
    def __init__(self):
        self.email = ''
        self.businessEmail = os.environ.get('EMAIL_ADDRESS')
        self.subject = 'Your password from Hudge'
        self.body = ''

        self.SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']
    
    def send(self):
        CLIENT_SECRET_FILE = 'credentials.json'
        API_NAME = 'gmail'
        API_VERSION = 'v1'
        SCOPES = ['https://mail.google.com/']

        service = Create_Service(CLIENT_SECRET_FILE, API_NAME, API_VERSION, SCOPES)
        

        emailMsg = self.generator() 
        mimeMessage = MIMEMultipart()
        mimeMessage['to'] = self.businessEmail
        mimeMessage['subject'] = self.subject
        mimeMessage.attach(MIMEText(emailMsg, 'plain'))
        raw_string = base64.urlsafe_b64encode(mimeMessage.as_bytes()).decode()

        output = service.users().messages().send(userId='me', body={'raw': raw_string}).execute()
        print(output)

    def generator(self):
        self.body = str(random.randint(0,999999999999))
        return self.body


