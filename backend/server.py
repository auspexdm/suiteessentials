from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


class InquiryCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    hotel_name: Optional[str] = None
    city: Optional[str] = None
    categories: List[str] = []
    message: str

class InquiryResponse(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str
    name: str
    email: str
    phone: Optional[str] = None
    hotel_name: Optional[str] = None
    city: Optional[str] = None
    categories: List[str] = []
    message: str
    created_at: str


@api_router.get("/")
async def root():
    return {"message": "Suite Essentials API"}


@api_router.post("/inquiries", response_model=InquiryResponse)
async def create_inquiry(inquiry: InquiryCreate):
    doc = {
        "id": str(uuid.uuid4()),
        "name": inquiry.name,
        "email": inquiry.email,
        "phone": inquiry.phone,
        "hotel_name": inquiry.hotel_name,
        "city": inquiry.city,
        "categories": inquiry.categories,
        "message": inquiry.message,
        "created_at": datetime.now(timezone.utc).isoformat()
    }
    await db.inquiries.insert_one(doc)
    doc.pop("_id", None)
    return doc


@api_router.get("/inquiries", response_model=List[InquiryResponse])
async def get_inquiries():
    inquiries = await db.inquiries.find({}, {"_id": 0}).to_list(1000)
    return inquiries


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
