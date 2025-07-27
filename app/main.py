from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(
    docs_url="/docs",
    title="Welcome"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    id: str
    name: str
    biography: Optional[str] = ""
    speciality: List[str]
    location: str

user_info = []

@app.post("/signup")
def signup(user: User):
    user_info.append(user)