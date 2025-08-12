# Singleton Design Pattern

* It creates a *DatabaseConnection* class that simulates connecting to a database by logging messages to the console.
* The singleton pattern ensures that only one instance of the connection is ever created, no matter how many times *getInstance()* is called


## Working

* DatabaseConnection has:

    * A private static property to store the single instance.
    * A private constructor to prevent creating new instances with new.
    * A static *getInstance()* method that returns the existing instance or creates it if it doesn’t exist.
    * A public *connect()* method to simulate connection to database.

* Calling *DatabaseConnection.getInstance()* multiple times returns the same object.

# Output 

```
New Database Connection Initiated
connection1 === connection2 : true
Database Connected!!
```

