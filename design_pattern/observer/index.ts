import { NewsAgency, Channel } from "./observer.ts";

const agency = new NewsAgency()

const channel1 = new Channel("Channel 1")
const channel2 = new Channel("Channel 2")

agency.subscribe(channel1)
agency.subscribe(channel2)

agency.publishNews("Breaking News : Just Joking")

agency.unsubscribe(channel1)

agency.publishNews("Udate : Nothing Serious")



