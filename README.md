# Gestão de clientes com Angular e Django Rest Framework

Plataforma para gestão de clientes utilizando Angular para o front-end e Django rest framework para a construção da api back-end.

## Features

1. Listagem de clientes
2. Edição de clientes
3. Pesquisa de clientes
4. Paginação server side(rest_framework.pagination)
5. Notificações(sweetalert2)
6. Grid com ordenação e pesquisa(ag-grid) 
7. Endpoints cobertos por testes

## Demonstration

Front-end: https://customers-frontend-angular.herokuapp.com/

Back-end: https://api-customers-backend.herokuapp.com/customers/

## Installation

1- git clone https://github.com/LucasBortolazzo/Customers.git

### Front-end

2. cd '..Customers/customers-frontend'
3. run npm install
4. run ng serve
5. access: `http://localhost:4200/`.

### Back-end

1. Create a Python virtualenv and activate
2. cd '..Customers/customers-backend'
3. run pip install -r requirements.txt
4. run python manage.py migrate
5. run python manage.py runserver
5. access: `http://localhost:8000/`.