# Observer Design Pattern

This project demonstrates a simple **Observer Pattern** where a `NewsAgency` acts as a publisher that notifies its subscribed `NewsChannel`s whenever news is published.

## Problem

- We want a system where multiple news channels can subscribe to a news agency.
- When the news agency publishes news, all subscribed channels should receive the update automatically.
- Subscribers should be able to subscribe and unsubscribe dynamically.

---

## Solution

- Defined a `NewsChannel` interface with an `update(news: string)` method for receiving news.
- Created a `NewsAgency` class that maintains a list of subscribed channels.
- The `NewsAgency` provides methods to:
  - `subscribe(channel: NewsChannel)` to add subscribers.
  - `unsubscribe(channel: NewsChannel)` to remove subscribers.
  - `publishNews(news: string)` to send news updates to all subscribers by calling their `update()` method.

---


## Output 

```
News Pubilshed
Channel 1 received news : Breaking News : Just Joking
Channel 2 received news : Breaking News : Just Joking
News Pubilshed
Channel 2 received news : Udate : Nothing Serious
```
