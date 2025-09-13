import mongoose from "mongoose";
import { IProfile, IDevice, ISubscription, IUser } from "../types/user";

const UserSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: true,
        minLength: [5, "Minimum length should be at least 5"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: Number,
    country: {
        type: String,
    },
    last_login: Date,
    followers: Number,
    interests: [String],
    profile: new mongoose.Schema<IProfile>({
        theme: {
            type: String,
            required: true
        },
        bio: String
    }),
    device: [new mongoose.Schema<IDevice>({
        type: String,
        os: String,
        last_seen: Date
    })],
    subscription: new mongoose.Schema<ISubscription>({
        tier: String,
        start_date: Date
    }),
});

const User = mongoose.model<IUser>("user", UserSchema);

export default User
