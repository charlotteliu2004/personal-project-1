from sqlalchemy import Table, Column, integer, String
from database import metadata

users = Table(
    "users",
    metadata,
    Column("id", integer, primary_key=True),
    Column("username", String(50), unique=True, nullable=False, index=True),
    Column("email", String(100), unique=True, nullable=False, index=True)
)

