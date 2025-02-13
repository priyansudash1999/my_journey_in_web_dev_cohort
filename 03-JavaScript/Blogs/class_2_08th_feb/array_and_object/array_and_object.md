![Array and Objects](./images//array%20and%20obj.webp)

# Array and Object in JavaScript.

- JavaScript arrays and objects are non-primitive data types, playing a crucial role in handling and organizing data.

- If you're new to JavaScript data types, check out this guide:
  [The Ultimate Journey to JavaScript Mastery](https://javascript-operation-by-en-priyansu.hashnode.dev/the-ultimate-journey-to-javascript-mastery)
  > If you find this article helpful, don't forget to like and subscribe! 🚀

## Arrays in JavaScript:-

- An array is a collection of elements stored in a specific order.
- We define an array using square brackets [].
- Arrays help in managing lists, such as numbers, strings, or objects.
- Learn more about JavaScript arrays: [Exploring JavaScript Array Methods](https://array-methods-for-all-javascript-programmer.hashnode.dev/exploring-javascript-array-methods-a-comprehensive-adventure)

## Objects in JavaScript :-

- In JavaScript, everything is an object except primitive data types.
- Objects store data in key-value pairs, making them versatile and powerful.
- They allow structured data representation, ideal for real-world applications.

  ```javascript
  const user = {
    name: "Priyansu",
    age: 26,
    address: { District: "Cuttack", State: "Odisha", Country: "India" },
  };
  ```

  - This is an object.
  - In object we store data as `key:value` pairs. so it is easy to access the data
  - The above code is a nested object means an object between an object.

> How we can access the value of an object.

```javascript
const user = {
  name: "Priyansu",
  age: 26,
  address: { District: "Cuttack", State: "Odisha", Country: "India" },
};

console.log(user.name); // Priyansu
console.log(user["name"]); // Priyansu
```

> If we want to access any value using key, then we have two ways.

- Using dot operator. (.)
- Using square bracket and use quote for key.

> How can we access a nested object value ?

- Using dot operator (.) and square bracket and use quote.

```javascript
const user = {
  name: "Priyansu",
  age: 26,
  address: { District: "Cuttack", State: "Odisha", Country: "India" },
};

console.log(user.address.District); // Cuttack
console.log(user["address"]["District"]); // Cuttack
```

---

### JavaScript Methods of object

#### 1. Build in Object methods :-

- Object.keys(obj) :-
  - Returns an array of all keys from the object.
    ```javascript
    const user = { name: "Charlie", age: 25 };
    console.log(Object.keys(user)); // ['name', 'age']
    ```
- Object.values(obj) :-
  - Returns an array of all values from the object.
    ```javascript
    const user = { name: "Charlie", age: 25 };
    console.log(Object.values(user)); // ['Charlie', 25]
    ```
- Object.entries(obj) :-
  - Returns an array of `key-value` pairs
    ```javascript
    console.log(Object.entries(user)); // [['name', 'Charlie'], ['age', 25]]
    ```
- Object.assign(target, source) :-

  - Copies properties from one object to another

    ```javascript
    const user1 = { name: "David" };
    const user2 = { age: 30 };
    const mergedUser = Object.assign({}, user1, user2);
    console.log(mergedUser); // { name: 'David', age: 30 }
    ```

- Object.freeze(obj) :-
  - Prevents modifications (adding, deleting, or changing properties).
    ```javascript
    const car = { brand: "Toyota" };
    Object.freeze(car);
    car.brand = "Honda";
    console.log(car.brand); // Output: Toyota
    ```
- Object.seal(obj) :-
  - Prevents adding or deleting properties but allows modifications to existing ones.
    ```javascript
    const laptop = { brand: "Dell" };
    Object.seal(laptop);
    laptop.brand = "HP";
    laptop.color = "Black";
    console.log(laptop); // Output: { brand: 'HP' }
    ```

#### 2. Custom Object methods :-

- Using Function Expressions

  ```javascript
  const person = {
    name: "Priyansu",
    greet: function () {
      return `Hello, my name is ${this.name}`;
    },
  };

  console.log(person.greet()); // Hello, my name is Priyansu
  ```

- Using ES6 Method Shorthand

  ```javacript
  const person = {
  name: "Babuni",
  greet() {
    return `Hello, my name is ${this.name}`;
    }
  };
  console.log(person.greet()); // Output: Hello, my name is Babuni
  ```

---

### Array vs Object :-

---

| Feature           | Array                                 | Object                                                   |
| ----------------- | ------------------------------------- | -------------------------------------------------------- |
| **Definition**    | Ordered collection of elements        | Key-value pairs                                          |
| **Indexing**      | Uses numeric indices (`0, 1, 2, ...`) | Uses named keys (`"name", "age", etc.`)                  |
| **Best Use Case** | Lists, sequences, ordered data        | Unordered data, key-value mappings                       |
| **Data Access**   | Access using index (`arr[0]`)         | Access using key (`obj["name"]` or `obj.name`)           |
| **Iteration**     | Use `for`, `forEach()`, `map()`, etc. | Use `for...in`, `Object.keys()`, `Object.values()`, etc. |

#### When to Use Arrays vs Objects

- Use an Array when you need an ordered collection of items.
  ```javascript
  const favouriteAnime = [
    "Jay Jagannath",
    "Chhota Bheem",
    "Doraemon",
    "Motu Patlu",
  ];
  console.log(favouriteAnime[0]); // Jay Jagannath
  ```
- Use an object when you need to store value with `key:value` pairs.

  ```javascript
  // When I want to store the anime name with its broadcast channel name.
  const favouriteAnimeWithChannelName = {
    Jay_Jagannath: "pogo",
    "Chhota Bheem": "pogo",
    Doraemon: "Disney",
    "Motu Patlu": "Nick",
  };

  console.log(favouriteAnimeWithChannelName["Chhota Bheem"]); // Output: pogo
  console.log(favouriteAnimeWithChannelName.Doraemon); // Output: Disney
  ```

### conclusion :-

- That is the all about basics.
