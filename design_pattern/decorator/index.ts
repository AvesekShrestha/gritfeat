import { NormalCoffee, MilkCoffee, SugarCoffee, WippedCreamCoffee } from "./decorator.ts"

let coffee = new NormalCoffee();
console.log(coffee.cost())

coffee = new MilkCoffee(coffee)
console.log(coffee.cost())

coffee = new SugarCoffee(coffee)
console.log(coffee.cost())

coffee = new WippedCreamCoffee(coffee)
console.log(coffee.cost())


