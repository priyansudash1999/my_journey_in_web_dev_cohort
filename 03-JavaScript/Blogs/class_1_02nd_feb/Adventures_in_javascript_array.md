![Adventure of JavaScript array](https://www.greengold.tv/assets/og/chhota-bheem.jpg)

# Exploring JavaScript Array Methods: A Comprehensive Adventure

## Table of Contents

### Introduction

- What is an Array?

### Types of Arrays

- One Dimensional Array (1D Array)
- Two Dimensional Array (2D Array)

#### Understanding 1D Arrays

- Definition & Explanation
- Example Code
- Analogy: Bookshelf

#### Understanding 2D Arrays

- Definition & Explanation
- Example Code

### Exploring JavaScript Array Methods

- Type of array methods
  - static
  - instance
- 10 Essential Array Functions
  - concat()
  - push()
  - pop()
  - unshift()
  - shift()
  - reduce()
  - map()
  - filter()
  - forEach()
  - findIndex()

Conclusion

### What is an Array ? :-

- An array is a data structure that holds multiple variables.

- Array can be categorized many types, but here we learn two types of array.

  1. One Dimensional Array ( 1D Array )

  2. Two Dimensional Array ( 2D Array )

## One Dimensional Array :-

- It has only a row.

- A simple list of elements.

```javascript
let arr = [1, 2, 3, 4, 5];
```

## Two Dimensional Array :-

- It has multiple rows and columns.
- A matrix of elements.
- An array containing other arrays (nested arrays).

```javascript
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

### **_Analogy_**

#### 1D Array :-

Imagine an array as a bookshelf with numbered slots. Each slot holds a book (an element), and you can access any book by its position (index).

![Book self](data:image/jpeg;base64,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)

#### 2D Array :-

Imagine a movie theater where seats are arranged in rows and columns. Each row represents a different set of people sitting together.

If you want to find a seat number, you need to know both the column and the row, just like in a matrix..

![Film seating arrengement](https://www.glenbrookcinema.com.au/imagesDB/wysiwyg/1024/RightAilse_1.jpg)

### Why an Array ? :-

- To store value in contiguous location in memory we use array.
- When we save data in memory using contiguous locations, it becomes easier to access.

![memory contiguous location using array](https://cdn.hashnode.com/res/hashnode/image/upload/v1738686443635/a16bb185-4319-4fce-a645-9a7deebefd85.png)

### How to use Array ? :-

For creating an array using JavaScript programming language, we can use some methods.

- Simple one using empty square bracket.

  ```javascript
  const array = []; // array creation first method for 1D array
  const two_d_array = console.log(array); // []
  ```

- We can use new Array() constructor

  ```javascript
  const nums = new Array();
  console.log(nums); // []
  ```

- Using Array.of()
  ```javascript
  const nums = Array.of(5);
  console.log(nums); // [5]
  ```

## Methods of array :-

There are two types of methods of array in JavaScript.

#### 1. Array static methods :-

- Called on the Array class itself, not on an individual array instance.

- Used for general-purpose operations on arrays.

- **_Example: Array.isArray(), Array.from(), Array.of()_**

#### 2. Array Instance methods :-

- Called on a specific array instance.

- Used to manipulate or retrieve data from an array.

- **_Example: map(), filter(), reduce(), push(), pop(), etc._**

## 10 Important Array Instance Methods a JavaScript Developer Should Know

#### Here, we'll use some real-life examples to understand this better.

For instance, we can consider **_Chhota Bheem_**, an animated children's show that airs on the POGO channel.

![chhotabheem charcters](https://www.greengold.tv/assets/og/chhota-bheem.jpg)

- Chhota Bheem's team, consisting of Bheem, Chutki, Raju, and Jaggu, is planning a trip to Neeli Pahadi (Blue Mountain).
- Meanwhile, Kalia and his team—comprising Kalia, Dholu, and Bholu—also wish to join them on the adventure.
- They will all travel together in a single bullock cart.
- So, we need to merge both groups into a single team for the journey.

- For joining two arrays we have to merge them.
- For merging two arrays we have one javascript mathod with name is **concat**

## 1. concat() :- Merge two arrays

```javascript
let bheemTeam = ["Bheem", "Chutki", "Raju", "Jaggu"];
let kaliaTeam = ["Kalia", "Dholu", "Bholu"];

let dholakpurTeam = bheemTeam.concat(kaliaTeam);
// we can also do kaliaTeam.concat(bheemTeam); -> output will be same but order will be different

console.log(dholakpurTeam);
// Output: ["Bheem", "Chutki", "Raju", "Jaggu", "Kalia", "Dholu", "Bholu"]
```

> For joining them we can also use spread operator

```javascript
let dholakpurTeam = [...bheemTeam, ...kaliaTeam];

console.log(dholakpurTeam);
// Output: ["Bheem", "Chutki", "Raju", "Jaggu", "Kalia", "Dholu", "Bholu"]
```

---

> After getting Raja Indraverma's permission Rajkumari Indumati also want to join them, we can add Indumati using push method which store at last position of array.

---

## 2. push() :- Add value at last position of array

- Rajukumari Indumati joined their team for their neelipahadi adventure.

```javascript
dholakpurTeam.push("Indumati");
console.log(dholakpurTeam);
// Output : ["Bheem", "Chutki", "Raju", "Jaggu", "Kalia", "Dholu", "Bholu", "Indumati"]
```

> Rajkumari Indumati want to leave beacause of some reasons.

---

## 3. pop() :- Delete the last value and return the deleted value

- Rajkumari Indumati left their team for their neelipahadi adventure.

```javascript
dholakpurTeam.pop();
console.log(dholakpurTeam);
// Output : ["Bheem", "Chutki", "Raju", "Jaggu", "Kalia", "Dholu", "Bholu"]
```

---

> Now team is ready to go to Neeli Pahadi (Blue Mountain). But for now the two bulls need the first seats beacause they are the most important.

---

## 4. unshift() :- unshift method add value at first position of array.

```javascript
dholakpurTeam.unshift("Chagala", "Bagala"); // The two bulls name is Chagala and Bagala
console.log(dholakpurTeam);
// Output : ["Chagala", "Bagala", "Bheem", "Chutki", "Raju", "Jaggu", "Kalia", "Dholu", "Bholu"]
```

> The team is now finally ready to go to Neeli Pahadi (Blue Mountain).

![dholakpur team](./images/dholakpur-team.png)

> After reaching Neeli Pahadi, Chagala and Bagala leave their seats to graze near the river.

---

## 5. shift() :- shift method remove value at first position of array.

```javascript
dholakpurTeam.shift();
console.log(dholakpurTeam);
// Output : ["Bagala", "Bheem", "Chutki", "Raju", "Jaggu", "Kalia", "Dholu", "Bholu"]
dholkpurTeam.shift();
console.log(dholakpurTeam);
// Output : ["Bheem", "Chutki", "Raju", "Jaggu", "Kalia", "Dholu", "Bholu"]
```

> Now is the time for adventure—it's time to set up camp and settle in.
> ![dholakpur team](./images/neelipahadi-adv.png)

---

> They have some bags to carry their belongings and also some food to eat.
> Let us consider all have 1 bags each.

---

## 6. reduce() :- Sum of all bags

```javascript
let bags_array = [1, 1, 1, 1, 1, 1, 1];
let total_bags = bags_array.reduce((a, b) => a + b);
console.log(total_bags);
// Output : 7
```

Let us elaborate this.

- First line is a variable declaration with name bags_array and have 7 values.
- reduce() is a JavaScript array method that processes the array elements and reduces them to a single value.
- It takes a callback function (a, b) => a + b, which is executed for each element in the array.

  Here’s how reduce() works step by step:

  - It starts with the first two elements: 1 + 1 = 2
  - Then adds the next element: 2 + 1 = 3
  - Continues: 3 + 1 = 4, 4 + 1 = 5, 5 + 1 = 6, 6 + 1 = 7
  - Final result: 7
  - Since no initial value is provided, reduce() takes the first two elements as its starting point.

- At last print the total_bags.

---

> Before heading to Neeli Pahadi, they stop at Patalpur to collect mangoes. Each person receives one additional bag, updating the bags array as follows.

## 7. map() :- Map method returns a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
let bags_array = [1, 1, 1, 1, 1, 1, 1];
let bags_array_after = bags_array.map((bag) => bag + 1);
console.log(total_bags);
// Output : [2, 2, 2, 2, 2, 2, 2]
```

> Let us elaborate this.

- First line is a variable declaration with name bags_array and have 7 values.
- map() is a JavaScript array method that processes the array elements and returns a new array populated with the results of calling a provided function on every element in the calling array.
- It takes a callback function (bag) => bag + 1, which is executed for each element in the array.

  Here’s how map() works step by step:

  - In the array of bags_array we use map() method.
  - It takes a callback function (bag) => bag + 1, which is executed for each element in the array.
  - It returns a new array populated with the results of calling a provided function on every element in the calling array.
  - Final result: [2, 2, 2, 2, 2, 2, 2]

---

> In the group of 7, we have to filter out the one who is a monkey. Return the monkey name. The monkey is Jaggu.

## 8. filter() :- Filter method creates a new array filled with elements that pass a test provided by a function.

```javascript
let dholakpurTeam = [
  "Bheem",
  "Chutki",
  "Raju",
  "Jaggu",
  "Kalia",
  "Dholu",
  "Bholu",
];
let monkey = dholakpurTeam.filter((character) => character === "Jaggu");
console.log(monkey);
// Output : ["Jaggu"]
```

> Let us elaborate this.

- First line is a variable declaration with name dholakpurTeam and have 7 values.
- filter() is a JavaScript array method that creates a new array filled with elements that pass a test provided by a function.
- It takes a callback function (person) => person === "Jaggu", which is executed for each element in the array.

  Here’s how filter() works step by step:

  - In the array of dholakpurTeam we use filter() method.
  - It takes a callback function (person) => person === "Jaggu", which is executed for each element in the array.
  - It returns a new array filled with elements that pass a test provided by a function.
  - Final result: ["Jaggu"]

![Jaggu ](./images/jaggudada.png)

- we can also filter out all without Jaggu

```javascript
let human_character = dholakpurTeam.filter(
  (character) => character !== "Jaggu"
);
console.log(human_chacter);
// Output : ["Bheem", "Chutki", "Raju", "Kalia", "Dholu", "Bholu"]
```

---

## 9. forEach() :- forEach method executes a provided function once for each array element.

```javascript
let dholakpurTeam = [
  "Bheem",
  "Chutki",
  "Raju",
  "Jaggu",
  "Kalia",
  "Dholu",
  "Bholu",
];
dholakpurTeam.forEach((character) => console.log(character));
// Output : Bheem, Chutki, Raju, Jaggu, Kalia, Dholu, Bholu
```

## 10. findIndex() :- findIndex method returns the index of the first element in the array that satisfies the provided testing function.

```javascript
let monkey_index = dholakpurTeam.findIndex(
  (character) => character === "Jaggu"
);
console.log(monkey_index);
// Output : 3
```
