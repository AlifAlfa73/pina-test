# pina-test
This project is created to fulfill the assignment for PINA application. It is a simple CRUD API using nodejs and express framework with postgres SQL for the database.

## Prerequisite
1. This project is expected to run in UNIX environment
2. Make sure you already installed [Node](https://nodejs.dev/) and [PostgreSQL](https://www.postgresql.org/)

## Structure
### **.env**
This file is used to store the environment variable that is used in the project. For this project is is used to store connection string to DB.
```
DB_URL=postgres://[user]:[password]@localhost:5432/[Database name]
```

Note: Usually this file did not get updated to public place but it is uploaded for assignment purpose

### **knexfile.js**
This file contains the configuration for knexjs.

### **data/**
This folder contains the file for migration and seed that is used in knexjs

### **repositories/**
This folder contains the modules that is used to access the database, each file represents access to different table.

### **routes/**
This folder contains the implementation for the endpoint of the APIs

## Dependencies
There is some dependencies that is need to be installed before running the program.

1. dotenv
2. express
3. knex
4. pg

You can install it with the following command
```
npm i knex pg express dotenv
```

## Setting up
Before you can run the program you need to setup the database through the following steps.

1. Create a database named `pina_service` on your postgreSQL
2. Add the database connection string in `.env`
3. Run `knex migrate:latest` to migrate the schema of the database
4. Run `knex seed:run` to add data seeds to the database (You will add default value of type)

## Running the program
To run the you need to run the following command in the project directory
```
node index.js
```
A server listening to the port 8080 will be deployed and you can start making API Call to the port

