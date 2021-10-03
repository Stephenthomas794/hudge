from modules.sendEmail import sendEmail
from aws.database.dynamodao import dynamodao


from flask import Flask, request, render_template, redirect, jsonify, json

from flask_socketio import SocketIO
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="http://localhost:3000")

# origins = [
#    "http://localhost:3000",
#    "https://localhost:3000/signup",
#    "http://localhost",
#    "http://localhost:3000",
# ]

# app.add_middleware(
#    CORSMiddleware,
#    allow_origins=origins,
#    allow_credentials=True,
#    allow_methods=["*"],
#    allow_headers=["*"],
# )


@app.route("/sendEmail", methods=['GET', 'POST'])
def sendMail():
    request_data = json.loads(request.data)
    print(request_data)
    email = request_data['email']
    dynamo = dynamodao()
    mail = sendEmail()
    # mail.send(email)
    if checkUser(email, dynamo) == True:
        return {"message": 0}
    elif checkUser(email, dynamo) == False:
        password = mail.send(email)
        dynamo.addUser(email, password)
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


@app.route("/login", methods=['GET', 'POST'])
def userLogin():
    request_data = json.loads(request.data)
    email = request_data['email']
    password = request_data['password']
    dynamo = dynamodao()
    if dynamo.verifyUser(email, password) == True:
        return {"message": True}
    else:
        return {"message": False}


@app.route("/userDataStore", methods=['GET', 'POST'])
def userData():
    request_data = json.loads(request.data)
    email = request_data['email']
    name = request_data['name']
    dynamo = dynamodao()
    dynamo.addUserData(email, name)
    return {"message": True}


@app.route("/isOnline", methods=['GET', 'POST'])
def userOnline():
    request_data = json.loads(request.data)
    email = request_data['email']
    isOnline = request_data['isOnline']
    dynamo = dynamodao()
    dynamo.addOnlineStatus(email, isOnline)
    return {"message": True}

# Find someone who is online that is not myself with the email ending as me


@app.route("/findAnotherUser", methods=['GET', 'POST'])
def findUser(email):
    pass

    # 9. PYTHON: Set up sockets for python
    # 10. REACT: Set up sockets for react
    # FIX: redux state management


if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=8000, debug=True)
