from sqlalchemy import Table, Column, integer, String
from database import metadata

users = Table(
    "users",
    metadata,
    Column("id", integer, primary_key=True),
    Column("password", String)
)