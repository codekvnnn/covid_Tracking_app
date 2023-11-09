# COVID Tracker App

The COVID Tracker App is a full-stack web application designed to provide real-time statistics and information about the COVID-19 pandemic. This application fetches data from a reliable API source, processes and stores it in a PostgreSQL database, and serves the data through a RESTful API to an Angular frontend.

## Features

- Real-time global and country-specific COVID-19 statistics.
- Historical data analysis and trend visualization.
- User account creation for personalized tracking and notifications.

## Technologies Used

- Backend: Python, Flask, PostgreSQL
- Frontend: Angular
- Data Source: [disease.sh API](https://disease.sh/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Git
- Python 3.8+
- Node.js 12+
- Angular CLI
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/covid-tracker-app.git
   cd covid-tracker-app


:Backend setup:
cd backend
python -m venv venv
source venv/bin/activate # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt


Database setup:
# Create a new PostgreSQL database and user

:Start backend server:

python app.py

:Frontend setup:

cd ../frontend
npm install

:Start Angular server:

ng serve

>>>Open http://localhost:4200 in your web browser.

:Usage:

With the servers running, you can:

Access real-time and historical COVID-19 data.
Register for an account to customize your experience.
Receive updates and notifications based on your preferences.

:Contributing:

>To contribute:

Fork the project.
Create your feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a Pull Request.

>License
This project is licensed under the MIT License - see the LICENSE.md file for details.

>Contact
If you have any questions, please email us at contact@yourdomain.com.

>Acknowledgments
Thanks to all the contributors who have helped with this project.
Special thanks to disease.sh API for providing COVID-19 data.
