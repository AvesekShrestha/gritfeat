class Queue {
    private queue: number[] = [];
    private readonly size = 5;

    isFull(): boolean {
        if (this.queue.length == this.size) return true
        else return false
    }

    isEmpty(): boolean {
        if (this.queue.length == 0) return true
        else return false
    }

    enqueue(data: number): void {
        if (!this.isFull())
            this.queue.push(data)
        else throw new Error("Queue is already full");
    }

    dequeue(): number {
        if (!this.isEmpty())
            return this.queue.shift()!
        else throw new Error("Queue is already Empty")
    }

    search(target: number): boolean {
        return this.queue.includes(target)
    }
}

const queue = new Queue()
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue())

console.log(queue.search(2))


