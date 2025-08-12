class DatabaseConnection {
    private static connection: DatabaseConnection

    constructor() {
        console.log("New Database Connection Initaiated")
    }

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.connection) DatabaseConnection.connection = new DatabaseConnection()
        return DatabaseConnection.connection
    }

    public connect(): void {
        console.log("Database Connected!!")
    }
}

export default DatabaseConnection



