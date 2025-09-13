import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        title: "My API",
        description: "API documentation",
    },
    host: "localhost:8000", 
    schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const routes = ["./src/index.ts"]; 

swaggerAutogen()(outputFile, routes, doc);

