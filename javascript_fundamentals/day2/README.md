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
# DOM Forms

In the Document Object Model (DOM), a form is represented by a *form* element, and it can be accessed and manipulated using JavaScript through the *document.forms* collection 

A DOM Form allows :

* Access form elements (like inputs, checkboxes, radios, etc.)
* Get/set their values
* Validate input
* Handle user submissions

## Accessing Forms in the DOM

The *document.forms* property is a built-in DOM collection that returns all *form* elements in the current HTML document. Returns an HTMLCollection of all *form* elements.

Forms can access individually by:

* *Index*: document.forms[0]  - returns the first form in current page
* *Name attribute*: document.forms["formName"]  -return the form with name attribute "formName"


**Example**

```
// HTML 
<form id="loginForm">
  <input type="text" name="username" />
  <input type="password" name="password" />
  <button type="submit">Login</button>
</form>

// js
const form = document.forms[0]
```

## Accessing forms element

Form element can be accessed by their *name* attribute.

**Syntax** 

```
document.forms[0].nameAttribute
```

**Example** 

```
const formElement = document.forms[0].username
```


## Methods of document.forms

While document.forms itself does not have unique methods, each form element inside this collection has these important methods:

* submit()

    Programmatically submits the form (without user clicking submit).

    **Syntax** 

    ```
    document.forms[0].submit();
    ```

    **Example** 

    ```
    const button = document.getElementById("submitButton")
    button.addEventListener("click",(e)=>{
        e.preventDefalut()
        document.forms[0].submit()
    })
    ```

    * reset() 

        Resets the form fields to their default values.	

    **Example** 

    ```
    document.forms[0].reset()
    ```

# DOM CSS 

The HTML DOM allows JavaScript to change the style of HTML elements. We can perform following: 

* Access current styles
* Modify styles dynamically
* Add or remove CSS classes
* Get computed styles (styles actually applied after all CSS rules)

## Modify HTML Element's CSS

**Syntax**

```
element.style.propertyName = "value";
```

**Example** 

```
// HTML
<div id="box">Hello</div>

// JS 
const box = document.getElementById("box");
box.style.color = "white";
```


## Read Computed Style

get final computed styles applied from CSS, external stylesheets, etc.

**Example** 

```
const styles = window.getComputedStyle(element);
console.log(styles.fontSize);
```

## Add / Remove CSS Classes

**Example** 

```
// Adding class
element.classList.add("new-class")

// Removing class
element.classList.remove("new-class")
```

# DOM Events

A DOM event is a notification that something happened in the browser. You can listen to these events using JavaScript and then perform actions (like changing content, submitting a form, etc.).



## Mouse Events

* click

    Triggers when the mouse clicks an element

    **Example** 

    ```
    button.addEventListener("click", ()=>{
        //action to perform
    })
    ```

* dblclick

    Triggers when the mouse double-clicks an element.

    **Example** 

    ```
    button.addEventListener("dblclick", () => {
        // Action to perform
    });
    ```

* mousedown

    Triggers when the mouse button is pressed down.

    **Example** 

    ```
    button.addEventListener("mousedown", () => {
        // Action to perform
    });
    ```

* mouseup

    Triggers when the mouse button is released.

    **Example** 

    ```
    button.addEventListener("mouseup", () => {
        // Action to perform
    });
    ```

* mousemove

    Triggers when the mouse is moved over an element.

    **Example** 

    ```
    button.addEventListener("mousemove", () => {
        // Action to perform
    });
    ```

* mouseenter

    Triggers when the mouse enters the element (does NOT bubble).

    **Example** 

    ```
    button.addEventListener("mouseenter", () => {
        // Action to perform
    });
    ```


* mouseleave

    Triggers when the mouse is leaves the element.

    **Example** 

    ```
    button.addEventListener("mouseleave", () => {
        // Action to perform
    });
    ```

* mouseover

    Triggers when the mouse enters the element or its child (bubbles).

    **Example** 

    ```
    div.addEventListener("mouseover", () => {
        // Action to perform
    });
    ```

## Keyboard Events 

* keydown 

    Fires when a key is pressed down (fires continuously while held down).

    **Example** 

    ```
    document.addEventListener("keydown", (event) => {
        console.log("Key down: ", event.key);
    });
    ```


* keyup 

    Fires when a key is released.

    **Example** 

    ```
    document.addEventListener("keyup", (event) => {
        console.log("Key down: ", event.key);
    });
    ```

## Form Events

* submit

    Fires when a form is submitted.

    **Example** 

    ```
    const form = document.forms["myForm]
    form.addEventListener("submit" , ()=>{
        // do some action
    })
    ```

* change

    Fires when the value of an input, select, or textarea changes and loses focus.

    **Exmaple** 

    ```
    //html 
    <input type="text" id="nameInput" />
    
    //js
    document.getElementById("nameInput").addEventListener("change", function() {
    console.log("Input value changed and blurred");
    })
    ```

* input

    Fires every time the value of an *input*, *textarea* or *select* changes.

    **Example** 

    ```
    //html
    <input type="text" id="liveInput" />

    //js
    document.getElementById("liveInput").addEventListener("input", function() {
    console.log("Live input change:", this.value);
    });
    ```


* focus

    Fires when an input or form element gains focus.

    **Example** 

    ```
    document.getElementById("nameInput").addEventListener("focus", () => {
    console.log("Input is focused!");
    });
    ```


## Window/Document Events 

* load 

    Fires when the whole page (including images, stylesheets, etc.) is fully loaded.

    **Example** 

    ```
    window.addEventListener("load", () => {
    console.log("Page fully loaded");
    });
    ```

* resize

    Fires when the window is resized.

    **Example** 

    ```
    window.addEventListener("resize", () => {
    console.log("Window resized to", window.innerWidth, "x", window.innerHeight);
    });
    ```

* scroll 

    Fires when the user scrolls the page or an element.

    **Example** 

    ```
    window.addEventListener("scroll", () => {
    console.log("Scrolling...", window.scrollY);
    });
    ```

* beforeunload

    Fires right before the user leaves the page. You can use this to show a confirmation dialog.

    **Example** 

    ```
    window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = '';
    });
    ```

## Drag and Drop Events

* dragstart

    Fires when the user starts dragging an element.

    **Example**
    ```
    element.addEventListener("dragstart", (e) => {
    console.log("Drag started");
    e.dataTransfer.setData("text/plain", e.target.id);
    });
    ````

* drag

    Fires continuously as the element is being dragged.

    **Example**
    ```
    element.addEventListener("drag", () => {
    console.log("Dragging...");
    });
    ```

* dragenter

    Fires when a dragged item enters a valid drop target.

    **Example**
    ```
    dropZone.addEventListener("dragenter", () => {
    console.log("Entered drop zone");
    });
    ```

* dragover

    Fires when a dragged item is over the drop target. You must call e.preventDefault() to allow the drop.

    **Example**
    ```
    dropZone.addEventListener("dragover", (e) => {
    e.preventDefault(); // Necessary for drop to work
    });
    ```

* dragleave

    Fires when the dragged item leaves the drop target.

    **Example**
    ```
    dropZone.addEventListener("dragleave", () => {
    console.log("Left drop zone");
    });
    ```

* drop

    Fires when the dragged item is dropped on a valid drop target.

    **Example**
    ```
    dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    console.log("Dropped item:", data);
    });
    ```    

* dragend

    Fires when the drag operation ends, regardless of success.

    **Example**

    ```
    element.addEventListener("dragend", () => {
    console.log("Drag ended");
    });
    ```


# DOM Event Listener

An event listener is a method in JavaScript used to listen for events (like clicks, key presses, etc.) on DOM elements.

**Syntax** 

```
element.addEventListener(event, function, useCapture);
```

**Example** 

```
const button = document.getElementById("myButton")
button.addEventListener("click" , ()=>{
    console.log("Button has been clicked")
})
```


