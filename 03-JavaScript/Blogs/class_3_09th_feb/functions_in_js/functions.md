![functions](./images/functions.webp)

# Functions in JavaScript

- Before going to deep in functions, we have a queation that it is functions or methods.
- If they are same why we called them with different names.
- If they are different then what is difference between them.

> The only answer is when we use function in object is known as methods.
> Function is stand alone.

- Functions

  ```javascript
  function adding(a, b) {
    return a + b;
  }
  let res = adding(2, 3);
  console.log(res);
  ```

- Methods

  ```javascript
  class Person {
    constructor(fname, lname) {
      this.fname = fname;
      this.lname = lname;
    }
    getFullName() {
      return `${this.fname} ${this.lname}`;
    }
  }

  const person = new Person("John", "Doe");
  console.log(person.getFullName()); // Output: John Doe
  ```

---

---

### Let us deep dive in function :-

## What is function ?

## Why we use function ?

## How to use function ?

## Conclusion
