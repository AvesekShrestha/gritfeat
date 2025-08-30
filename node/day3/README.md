# Blogs API Endpoints

A simple **RESTful API** built with **TypeScript + Express** that supports creating, reading, updating, and deleting (CRUD) blog posts.  

# Endpoints

- Create a new blog post 

```
POST /api/v1/blogs
```

- Get all blog posts

```
GET /api/v1/blogs
```

- Get a single blog post by ID

```
GET /api/v1/blogs/{id}
````

- Update a blog post by ID

```
PATCH /api/v1/blogs/{id}
```

- Delete a blog post by ID

```
DELETE /api/v1/blogs/{id}
```

**Note** : In-memory storage (no database, resets on restart)

# Installation 

1. Clone the repository

```
git clone https://github.com/AvesekShrestha/gritfeat
cd node/day3
```

2. Install dependency 

```
npm install
```

3. Add enviroment file with variable "PORT"
4. start the server

```
npm start
```

