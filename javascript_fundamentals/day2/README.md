# What is DOM (Documnet Object Model)

DOM is a programming interface for web documents which represents the structure of HTML documents as tree strucutre. DOM allows the programming languages like (javascript) to interact with and manipulate the content, strucutre and style of a web page dynamically. 

Example;

```
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>

```

When browser loads the above HTML code, it creates DOM

```
Document
└── html
    └── body
        ├── h1
        │   └── "Hello, world!"
        └── p
            └── "This is a paragraph."

```

## Locating DOM elements using selectors

DOM selectors are use to select and access HTML elments so that user can manipulate them dynamically eg(change text, change the style of element, respond to user interaction etc).

* getElementById()

    selects the HTML element by its unique id. 

    ```
    const button = document.getElementById("toggleButton");
    ```

* getElementsByClassName()

    Selects multiple elements with the same class. Returns an *HTMLCollection*. An *HTMLCollection* is an array-like collection (list) of HTML elements.

    ```
    const items = document.getElementsByClassName("list-item");
    ```

* getElementsByTagName()

    Selects multiple elements by tag name (like div, p, li, etc).Returns an HTMLCollection.

    ```
    const paragraphs = document.getElementsByTagName("p");
    ```

* querySelector() 

    Selects the first element that matches a CSS selector. Returns a NodeList.

    ```
    const firstItem = document.querySelector(".list-item");
    const header = document.querySelector("#mainTitle");
    ```

* querySelectorAll()

    Selects all elements that match a CSS selector. Returns a NodeList.

    ```
    const allItems = document.querySelectorAll(".list-item");
    ```

## Properties of DOM document

* innerHTML

    innerHTML is a property of the Document Object Model (DOM) Element interface in web development, primarily used in JavaScript which allows for the manipulation of the HTML element content.

    **Syntax**

    ```
    element.innerHTML =  new html content
    ``` 

    **Example** 

    ```
    const button = document.getElementById("myId")
    button.innerHTML= "Click Me"
    ```

* attribute

   In JavaScript, HTML element attributes (like src, href, alt, id, etc.) can be accessed and changed dynamically using attribute property of DOM document.

   **Syntax** 

   ```
    element.attributeName = "new value";
   ```

   **Example** 

   ```
    const link = document.getElementById("myLink");
    link.href = "https://www.example.com";
   ```

* style 

    The style property allows you to change the CSS styles of an HTML element using JavaScript.

    **Syntax** 

    ```
    element.style.propertyName = "value";
    ```

    **Exmaple** 

    ```
    const box = document.getElementById("myBox");
    box.style.backgroundColor = "lightblue"; 
    ```


