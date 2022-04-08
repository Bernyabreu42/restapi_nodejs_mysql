# API REST NODEJS EXPRESS MYSQL

Practica con nodejs para crear un API REST simple usando express y MySQL

Usamos Babel para poder utilizar la sintaxis de ECMAScript 6

## BD utilizada 

```
CREATE DATABASE restapi_nodejs_express;

CREATE TABLE language (
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(50),
   programmers INT
);
```
Es una base de datos simple, pero que nos permitira hacer un CRUD y asi entender a manejar MySQL con Nodejs.

## Environment variables

- HOST=***
- DATABASE=***
- USERNAME=***
- PASSWORD=***

## EndPoints

- [GET] /api/language
- [POST] /api/language
- [GET] /api/language/:id
- [DELETE] /api/language/:id
- [PUT] /api/language/:id

## Package npm

- Express
- Dotenv
- promise-mysql

- Nodemon
- Morgan
- @babel/cli
- @babel/core
- @babel/node
- @babel/prest-env

## Creditos
Curso de UskoKruM2010
video: https://www.youtube.com/watch?v=dkic3MU3858&t=2353s