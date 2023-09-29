# Express Server DOT Quiz - Quizz Application
Simple backend service with Express Js

## General Info
This project is about Express Js server that runs as a backend service for React Client Application for DOT Quiz

## Technologies
This server app is created with :
* Express Js
* MySQL
* Node Js

## Setup
Create database with MySQL (Recommended) and create .env file inside the project with the variables : 
```
ACCESS_TOKEN_SECRET=<GENERATE_YOUR_OWN_RANDOM_STRING>
PORT=<YOUR_SERVER_PORT>
DB_NAME=<YOUR_DB_NAME>
DB_HOST=<YOUR_DB_HOST>
DB_PORT=<YOUR_DB_PORT>
DB_PASSWORD=>YOUR_DB_PASSWORD>
DB_USER=<YOUR_DB_USER>
CLIENT_ORIGIN_URL=<YOUR_CLIENT_HOST_URL>

DEFAULT ====
ACCESS_TOKEN_SECRET=<PLEASE_CREATE_LONG_RANDOM_STRING>
DB_NAME=db_quiz_dot (you can create database with this name)
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_PASSWORD=
DB_USER=root
CLIENT_ORIGIN_URL=http://localhost:3000
```

Install this project with npm command:
```
$ npm install
$ node index.js
```

Clone react client project and run it following the instructions inside this repository :
```
https://github.com/putubhanuartha/client-dot-quiz
```

