from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from modules.sendEmail import sendEmail
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
    print(request.email)
    #mail = sendEmail()
    #mail.send()
    return {"message": "Message Sent!"}
    

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)