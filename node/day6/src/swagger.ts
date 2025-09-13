import swaggerJsdocs from "swagger-jsdoc"

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Nodejs api docs",
            version: "1.0.0",
            description: "API docs generated using jsdocs"
        },
        servers: [
            {
                url: "http://localhost:8000/api/v1",
            },
        ],
    },
    apis: ["./src/controllers/**/*.ts"]

}

const specification = swaggerJsdocs(options)

export default specification
