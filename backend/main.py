from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from modules.sendEmail import sendEmail
from aws.database import dynamodao
from pydantic import BaseModel

import uvicorn

app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://localhost:3000/signup",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}

class Email(BaseModel):
    email: str

@app.post("/sendEmail")
async def sendMail(request: Email):
    dynamo = dynamodao.dynamodao()
    mail = sendEmail()
    #mail.send(request.email)
    if checkUser(request.email, dynamo) == True:
        return {"message": 0}
    elif checkUser(request.email, dynamo) == False:
        password = mail.send(request.email)
        dynamo.addUser(request.email, password)
        return {"message": 1}
    else:
        return {"message": 0}

def checkUser(email, dynamo):
    response = dynamo.getData(email)
    print(response)
    if not response:
        return False
    else:
        return True

class User(BaseModel):
    email: str
    password: str

@app.post("/login")
async def userLogin(user: User):
    dynamo = dynamodao.dynamodao()
    if dynamo.verifyUser(user.email, user.password) == True:
        return {"message": True}
    else:
        return {"message": False}

class UserData(BaseModel):
    email: str
    name: str

@app.post("/userDataStore")
async def userData(userData: UserData):
    print('hi')
    dynamo = dynamodao.dynamodao()
    dynamo.addUserData(userData.email, userData.name)
    return True

    # 5. Send Userinfo to database
    # 6. userinfo to next page
    # REACT: Design landing page

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)