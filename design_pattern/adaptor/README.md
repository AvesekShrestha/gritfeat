# Adaptor Design Pattern

This project demonstrates the use of the **Adapter Design Pattern** to make an existing `OldPrinter` class compatible with a new interface expected by the application.

## Problem 

- The existing `OldPrinter` class provides a method called `printText(text: string)`.
- The application expects objects with a method called `print(message: string)` instead.
- Since `OldPrinter` cannot be changed directly, an adapter is needed to bridge this gap.

## Solution

- Created a `PrinterAdapter` class that implements the expected interface with a `print(message: string)` method.
- The adapter internally calls the `OldPrinter`’s `printText(text: string)` method to perform the actual printing.
- This allows the old printer to be used seamlessly with new code that expects the updated interface.

## Output 

```
Hello
```