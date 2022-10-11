### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  # Callbacks and promises

- What is a Promise?
  # A promise is an object that represents the result of an asyncronous function

- What are the differences between an async function and a regular function?
  # An async function awaits a specified response before running the rest of the function, as opposed to a regular function that runs everything at once

- What is the difference between Node.js and Express.js?
  # Node.js is a server side language written in JavaScript, and Express.js is a framework that can be used in conjunction with Node.

- What is the error-first callback pattern?
  # err => {}

- What is middleware?
  # Middleware is repeated logic that is stored in a seperate file and imported to condense the overall code in the main app file.

- What does the `next` function do?
  # Next is used to tell JS to continue onto the next function of an application, even if a function responds with an error

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  # The function is hard coded, which could cause issues if one of these users changes their username.
  # It is bad practice to await 3 seperate responses in a single async function
  # API should be saved to a variable, not hard coded

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
