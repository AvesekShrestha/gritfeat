# Nodejs API with mongoose 

## Transaction in mongodb

**What is a Transaction?**

A transaction is a sequence of one or more database operations that are executed as a single unit of work.

* Either all operations succeed (commit)
* Or none of them take effect if something fails (rollback)

**ACID Properties**

ACID properties define reliability and integrity of transactions:

* Atomicity : 
    The entire transaction is treated as a single unit. all operations succeed or none do.

* Consistency : 
    A transaction transforms the database from one valid state to another, maintaining all rules (like schema and constraints).

* Isolation : 
    Transactions are isolated from each other. Concurrent transactions do not interfere.

* Durability :
    Once a transaction is committed, the changes are permanent, even if the server crashes immediately afterward.

## Transaction in Mongodb

* Introduced in MongoDB 4.0 for multi-document ACID transactions.
* Require a replica set (not standalone server).

## How Transactions works

1. Start Session

```
const session = await mongoose.startSession();
```

2. Start a transaction

```
session.startTransaction();
```

3. Perform operations (all operations should include the session)

```
await Model.findById(id).session(session);
await Model.updateOne({ _id: id }, { $inc: { balance: -amount } }).session(session);
```

4. Commit or Abort

```
await session.commitTransaction(); // save
await session.abortTransaction();  // rollback if error
```

5. End the session 

```
session.endSession();
```

## Features 

* **User management** 

    * Register a user
    * Query user with multiple paramenters
    * Query specific user
    * Update user profile
    * Delete user profile

* **Product management** 

    * Add new product
    * Query product with multiple paramenters 
    * Query specific product 
    * Add review to product
    * Update product detial
    * Delete a product

* **Order management**

    * Creating a new order with ACID propertry (transaction)
    * Query orders with paramaters like *status*
    * Querying orders associated with specific user
    * Update order status, reverting the stock of product

* **Reports**

    * Query sales revenue report 
    * Query top selling product
    * Query Montly sales report

## API Endpoint

1. Register a user 

```
POST /api/v1/user/
```

2. Query all users with optional filters

```
GET /api/v1/user?country=USA&minFollowers=1000&interest=tech&page=1&limit=10
```

3. Get a specific user by ID

```
GET /api/v1/user/:id
```

4. Update user profile


```
PUT /api/v1/user/:id 
```

5. Delete user

```
DELETE /api/v1/user/:id
```

6. Add a new product

```
POST /api/v1/product
```

7. Query all products with filters

```
GET /api/v1/product?category=Electronics&brand=BrandX&minPrice=500&maxPrice=1500&page=1&limit=10
```

8. Get a specific product by ID

```
GET /api/v1/product/:id
```

9. Add a review to a product

```
POST /api/v1/product/:id/review
```

10. Delete a review from a product

```
DELETE /api/v1/product/:id/review/:reviewId
```

11. Update product details

```
PUT /api/v1/product/:id
```

12. Delete a product

```
DELETE /api/v1/product/:id
```

13. Create a new order

```
POST /api/v1/order
```

14. Get all orders with optional filters (like status)

```
GET /api/v1/order?status=pending&page=1&limit=10
```

15. Get all orders for a specific customer

```
GET /api/v1/order/:customerId
```

16. Update order status

```
PATCH /api/v1/order/:orderId/
```

17. Query sales revenue report 

```
GET api/v1/report/revenue
```

18. Query top selling product 

```
GET api/v1/report/popular
```

19. Query montly sales report

```
GET api/v1/report/monthly
```

## Installation 

1. Clone the repo 

```
git clone https://github.com/AvesekShrestha/gritfeat
cd node/day6
```

2. Install Dependency

```
npm install
```

3. Add .env file

```
<!-- for linux -->
touch .env

<!-- add following line -->
PORT=8000

```


4. Run the project 

```
npm start
```

5. Open in browser for api testing (Swagger API) : http://localhost:8000/docs 

