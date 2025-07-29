class Counter {
    constructor() {
        this.value = 0;
        this.decrementBtn = document.getElementById("decrement");
        this.incrementBtn = document.getElementById("increment");
        this.counter = document.getElementById("counter-value");
        this.counter.innerText = this.value;
    }

    increment() {
        this.value++;
        this.counter.innerText = this.value;
    }

    decrement() {

        this.value--;
        this.counter.innerText = this.value;
    }
}

const counter = new Counter();

// Adding click event to the buttons
counter.decrementBtn.addEventListener("click", () => counter.decrement())
counter.incrementBtn.addEventListener("click", () => counter.increment())



