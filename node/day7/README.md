# Authentication & Authorization

A full-featured RESTful API built with Express, MongoDB, and TypeScript, featuring authentication, role-based authorization, and CRUD operations for posts. It demonstrate a secure backend with JWT authentication , argon2 password hashing, and zod validation.

## Features 

* **User Management**

    * Register and login
    * Password hashing (Argon2)
    * JWT authentication 
    * Roles: admin (default), blogger

* **Post Management** 

    * Create, Read, Update, Delete posts
    * Role-based access:

        * admin can manage all posts
        * blogger can manage only their own posts

    * Automatic tracking of createdBy and updatedBy

* **Validation**

    * Payload validation using Zod 
    * Checks for duplicate email during registration

## Endpoints 

* Register 

```bash
POST /api/v1/auth/register 
```

* Login 

```bash
POST /api/v1/auth/login 
```

* Create a post 

```bash
POST /api/v1/posts 
```

* Get all posts 

```bash
GET /api/v1/posts
```

* Get specific post 

```bash
GET /api/v1/posts/:postId
```

* update a post

```bash
PUT /api/v1/posts/:postId
```

* delete a post

```bash
DELETE /api/v1/posts/:postId
```

## Installation 

1. Clone the repository

```bash
git clone https://github.com/AvesekShrestha/gritfeat
cd node/day7
```

2. Install decepndency 

```bash
npm install 
```

3. setup environmnet variable

```bash
<!-- for linux -->
touch .env 
echo "PORT=8000" >> .env
echo "JWT_SECRET=your_secret" >> .env 
```

4. run server 

```bash
npm start
```

**Note** : Server start at port 8000 at default

