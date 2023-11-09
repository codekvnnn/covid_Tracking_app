# backend/models.py

from app import db
from datetime import datetime

class CovidCase(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    country = db.Column(db.String(100), nullable=False)
    cases = db.Column(db.Integer, nullable=False)
    deaths = db.Column(db.Integer, nullable=False)
    recovered = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<CovidCase {self.country}>'
