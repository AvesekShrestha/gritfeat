# Prototype Design Pattern


- **Methods:**
  - `setTitle(title: string)` — Update the document's title.
  - `setBody(body: string)` — Update the document's body/content.
  - `setFooter(footer: string)` — Update the document's footer.
  - `clone()` — Creates a new `DocumentTemplate` object that is a copy of the current instance.
  - `display()` — Prints the title, body, and footer to the console.


## Output 

```
Hello World from typescript
Console.log('Hello  World!!')
Bye

// After clone
Hello World from typescript
Console.log('Hello  World!!')
Bye
```