interface IProfile {
    theme: string,
    bio?: string
}

interface IDevice {
    type: string,
    os: string,
    last_seen: Date
}

interface ISubscription {
    tier: string,
    start_date: Date
}

interface IUser {
    username: string,
    email: string,
    password: string
    age?: number,
    country?: string,
    last_login?: Date,
    followers?: number,
    interests?: string[],
    profile?: IProfile,
    device?: IDevice[],
    subscription?: ISubscription

}

interface RegisterPayload {
    username: string,
    email: string,
    password: string
}

interface LoginPayload {
    email: string,
    password: string
}

export { IProfile, IDevice, ISubscription, IUser, RegisterPayload, LoginPayload }

