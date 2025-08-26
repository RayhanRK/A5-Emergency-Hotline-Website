## Question's Answers:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

### Ans:
getElementById("id") → Returns one element with the given id.

getElementsByClassName("class") → Returns a live HTMLCollection of all elements with that class.

querySelector("selector") → Returns the first element matching a CSS selector.

querySelectorAll("selector") → Returns a static NodeList of all elements matching a CSS selector.

2. How do you create and insert a new element into the DOM?
### Ans:
At first we have to Create the element like this → const div = document.createElement("div");

then we have to Add content/attributes like this → div.innerText = "Hello";

and finally Insert into DOM like this → document.body.appendChild(div);


3. What is Event Bubbling and how does it work?
### Ans:
Event bubbling is when an event starts from the target element and propagates upward through its parent elements 
until it reaches the document, unless stopped with event.stopPropagation().

4. What is Event Delegation in JavaScript? Why is it useful?

### Ans:
Event delegation means attaching a single event listener to a parent element 
to handle events on its child elements using event bubbling.

It’s useful because it saves memory, reduces code duplication, and works for dynamically added elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
### Ans:
preventDefault() → Stops the browser’s default action (e.g. stopping form submission, disabling a link’s navigation).

stopPropagation() → Stops the event from bubbling up (or capturing down) through the DOM.



