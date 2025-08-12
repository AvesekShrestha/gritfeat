# Decorator Design Patter 


This project demonstrates the **Decorator Design Pattern** using a `Coffee` example. The goal is to calculate the total cost of coffee with optional add-ons like Milk, Sugar, and Whipped Cream by dynamically adding their costs on top of a base coffee.


## Problem

- The base `NormalCoffee` class provides a fixed cost for plain coffee.
- We want to add extra ingredients (Milk, Sugar, WhippedCream), each increasing the cost.
- Instead of creating many subclasses for every combination (e.g., CoffeeWithMilkAndSugar), decorators allow adding costs dynamically and flexibly.


## Solution

- Defined a base interface `Coffee` with a method `cost()`.
- Created a concrete class `NormalCoffee` that returns the base cost.
- Created a base decorator class `CoffeeDecorator` which wraps a `Coffee` object and delegates the `cost()` call to it.
- Created decorators like `Milk`, `Sugar`, and `WhippedCream` that extend `CoffeeDecorator` and add their own cost on top of the wrapped coffee’s cost.

## Output 

```
5
7
8
13
```




