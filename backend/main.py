from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Body
import random
from fastapi import UploadFile, File
import os

os.makedirs("uploads", exist_ok=True)

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Storage
otp_store = {}
violations = []

@app.get("/")
def home():
    return {"message": "Backend Running"}

# OTP APIs
@app.post("/send-otp")
def send_otp(email: str):
    return {
        "success": True,
        "message": "Verification Bypassed"
    }

@app.post("/verify-otp")
def verify_otp(email: str, otp: str):
    return {
        "success": True
    }
# Violation APIs
@app.post("/log-violation")
def log_violation(data: dict = Body(...)):
    violations.append(data)

    print("Violation Logged:", data)

    return {
        "success": True
    }

@app.get("/violations")
def get_violations():
    return violations

@app.delete("/clear-violations")
def clear_violations():
    violations.clear()
    return {"success": True}

from fastapi import UploadFile, File
import os

os.makedirs("uploads", exist_ok=True)

@app.post("/upload-screenshot")
async def upload_screenshot(
    file: UploadFile = File(...)
):
    filepath = f"uploads/{file.filename}"

    with open(filepath, "wb") as f:
        f.write(await file.read())

    return {
        "success": True,
        "path": filepath
    }