import UserBuilder from "./builder.ts";

const builder: UserBuilder = new UserBuilder()

builder.setName("Avesek")
builder.setAge(20)
builder.setEmail("test@test.com")
builder.setAddress("Bhaktapur")

const user = builder.build()
user.display()
