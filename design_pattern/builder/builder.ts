class User {
    public username: string
    public age?: number
    public email?: string
    public address?: string

    public display(): void {
        console.log(this.username)
        console.log(this.age)
        console.log(this.email)
        console.log(this.address)
    }
}

interface IUserBuilder {
    setName(username: string): this
    setAge(age: number): this
    setEmail(email: string): this
    setAddress(address: string): this
}

class UserBuilder implements IUserBuilder {
    private user: User

    constructor() {
        this.user = new User()
    }

    public setName(username: string): this {
        this.user.username = username
        return this
    }

    public setAge(age: number): this {
        this.user.age = age
        return this
    }

    public setEmail(email: string): this {
        this.user.email = email
        return this
    }

    public setAddress(address: string): this {
        this.user.address = address
        return this
    }

    public build(): User {
        return this.user
    }
}

export default UserBuilder
