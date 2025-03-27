![es6](./images/es6.png)

# JavaScript ES6 Features - Modern JavaScript Syntax

## Aricle Topics

- Destructuring in JavaScript: Extracting values from objects and arrays
- Understanding template Literals: A better way to handle strings.
- Spread and Rest operators: What They are and How to use them.
- Working with Map and set: Modern Javascript Date Structure

> ### Before going to the article topics we have to know about es6 and its features

### ES6 :-

- ES6 stands for ECMA script 6.
- ES6 was introduced in 2015.
- It has more advance features so we can write Javascript easier
- Before that handling asynchronous code is a difficult task, the old programmer handled async task using callbacks.

> Do you know about asynchronous code and callback ?

- Go and learn from anywhere to understand the article better. because in this article I will use some code of async await, promises and callbacks

### Destructuring in JavaScript: Extracting values from objects and arrays :-

#### Destructuring:-

- Destructuring in JavaScript means breaking down (extracting) values from objects or arrays into variables easily.

  ##### Before Destructring :--

  ```javascript
  const person = { name: "Priyansu", age: 25 };
  const name = person.name;
  const age = person.age;
  console.log(name, age); // Priyansu 25
  ```

  ##### After Destructuring :--

  ```javascript
  const person = { name: "Priyansu", age: 25 };
  const { name, age } = person;
  console.log(name, age); // Priyansu 25
  ```

- For now we can get a point using destructuring our code is easier to read or less line may be difficult to understand for now, but I assure you after read the article, you can get the syntax like a pro
