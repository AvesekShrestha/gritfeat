import { ZodError } from "zod";

const ValidationError = (zodError: ZodError) => {
    const error = new Error() as any
    error.name = "ValidationError"
    error.message = zodError.issues[0]?.message,
        error.statusCode = 400

    return error
}

const AuthenticationError = (message: string) => {
    const error = new Error(message) as any
    error.name = "AuthenticationError"
    error.statusCode = 401

    return error
}


const AuthorizationError = (message: string = "Access denied") => {
    const error = new Error(message) as any
    error.name = "AuthorizationError"
    error.statusCode = 403

    return error
}

const NotFoundError = (message: string = "Resource not found") => {
    const error = new Error(message) as any
    error.name = "NotFoundError"
    error.statusCode = 404

    return error
}

const ConflictError = (message: string = "Resource already exists") => {
    const error = new Error(message) as any
    error.name = "ConflictError"
    error.statusCode = 409

    return error
}

const InternalError = (message: string = "Internal Server Error") => {

    const error = new Error(message) as any
    error.name = "InternalError"
    error.statusCode = 500

    return error
}

export { ValidationError, AuthenticationError, AuthorizationError, NotFoundError, ConflictError, InternalError }
