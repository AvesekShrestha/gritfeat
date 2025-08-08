// Implement singly linked list. Operations on the linked list should be:
// Append: Add data at the end
// Prepend: Add data at  the beginning
// RemoveAt: Removes data from the given index
// InsertAt: Add data at the given index
// Size: returns the size of list
// isEmpty: Checks if list is empty or not
// Search: Finds data from linked list.

class ListNode {
    data: number;
    next: ListNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    append(data: number): void {
        const newNode = new ListNode(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    prepend(data: number): void {
        const newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAt(index: number, data: number): void {
        if (index < 0) return;

        const newNode = new ListNode(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let prev: ListNode | null = null;
        let i = 0;

        while (current !== null && i < index) {
            prev = current;
            current = current.next;
            i++;
        }

        if (prev !== null) {
            prev.next = newNode;
            newNode.next = current;
        }
    }

    removeAt(index: number): void {
        if (this.head === null || index < 0) return;

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let current: ListNode | null = this.head;
        let prev: ListNode | null = null;
        let i = 0;

        while (current !== null && i < index) {
            prev = current;
            current = current.next;
            i++;
        }

        if (prev !== null && current !== null) {
            prev.next = current.next;
        }
    }

    size(): number {
        let count = 0;
        let temp = this.head;
        while (temp !== null) {
            count++;
            temp = temp.next;
        }
        return count;
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    search(data: number): boolean {
        let temp = this.head;
        while (temp !== null) {
            if (temp.data === data) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }

    traversal(): void {
        let temp = this.head;
        const result: number[] = [];
        while (temp !== null) {
            result.push(temp.data);
            temp = temp.next;
        }
        console.log(result.join(" -> "));
    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.traversal();

list.insertAt(1, 15);
list.traversal();

console.log(list.search(20));
console.log(list.size());

list.removeAt(2);
list.traversal();
console.log(list.size());
console.log(list.isEmpty());
