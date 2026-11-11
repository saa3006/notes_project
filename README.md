# Notes App
Full-stack CRUD app:React + Django REST + Mysql.

## Features
- Add , edit , delete , list notes
- REST API with Django REST framework
- React frontend with axios

## Setup

### Backend
1. Create MYSQL database: 'CREATE DATABASE notes_db;'
2. Copy `.env.example` to `.env` and set your MYSQL password
3. `python3 -m venv venv && sourcevenv/bin/activate`
4. `pip install -r requirements.txt`
5. `python manage.py migrate`
6. `python manage.py runserver`

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`

Open http://locolhost:5173