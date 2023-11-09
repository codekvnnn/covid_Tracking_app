# backend/app.py

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/covid'
db = SQLAlchemy(app)

# Import routes
from api import covid_data

if __name__ == '__main__':
    app.run(debug=True)
