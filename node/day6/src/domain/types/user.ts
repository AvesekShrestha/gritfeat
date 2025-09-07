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
    age: number,
    country: string,
    last_login: Date,
    followers: number,
    interests: string[],
    profile: IProfile,
    device: IDevice[],
    subscription?: ISubscription

}

export { IProfile, IDevice, ISubscription, IUser }

