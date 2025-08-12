interface INewChannel {
    update(news: string): void
}

export class NewsAgency {

    private subscribers: INewChannel[] = []

    subscribe(channel: INewChannel) {
        this.subscribers.push(channel)
    }

    unsubscribe(channel: INewChannel) {
        this.subscribers = this.subscribers.filter(sub => sub !== channel)
    }

    publishNews(news: string) {
        console.log(`News Pubilshed`)
        this.subscribers.map(sub => sub.update(news))
    }

}

export class Channel implements INewChannel {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    update(news: string): void {
        console.log(`${this.name} received news : ${news}`)
    }
}