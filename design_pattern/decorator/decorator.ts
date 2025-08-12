interface Coffee {
    cost(): number
}

export class NormalCoffee implements Coffee {
    cost(): number {
        return 5
    }
}

export class CoffeeDecorator implements Coffee {

    private decoratedCoffee: Coffee

    constructor(coffee: Coffee) {
        this.decoratedCoffee = coffee
    }

    cost(): number {
        return this.decoratedCoffee.cost()
    }
}

export class MilkCoffee extends CoffeeDecorator {
    cost(): number {
        return super.cost() + 2;
    }
}

export class SugarCoffee extends CoffeeDecorator {
    cost(): number {
        return super.cost() + 1
    }
}

export class WippedCreamCoffee extends CoffeeDecorator {
    cost(): number {
        return super.cost() + 5
    }
}


