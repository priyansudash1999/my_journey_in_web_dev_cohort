# Serialization and Deserialization

## Serialization

- Serialization is the process of converting a data structure or object into a sequence of bytes that can be stored or transmitted over a network, a file, or any other storage medium.
- This sequence of bytes is known as a serialized representation of the data structure or object.
- The serialized representation can be used to recreate the original data structure or object when needed.

> In JavaScript, for example, you can serialize an object to a `JSON` string by calling the function `JSON.stringify()`.

```javascript
const data = { name: "John", age: 30 };

const jsonString = JSON.stringify(data);
// Output: '{"name":"John","age":30}'
```

## Deserialization

- Deserialization is the opposite process of Serialization. It converts data in its serialized format into its original data structure, such as a JavaScript object or array, to make the data usable and accessible in the application.
- Example of deserialization in JavaScript using JSON:

```javascript
const jsonString = '{"name":"John","age":30}';
const data = JSON.parse(jsonString);
// Output: { name: "John", age: 30 }
```

### > The article chapter is how to teleport a human ?

###### > We have go through the chapter by asking three questions. 1st one is what, 2nd one is why and third is how...

#### What is teleport ?

- As we know we communicate with telephone to any person across the world. This is known as telecommunication.
- When we make video call then our video with voice is also teleport which is also known as telecommucation.

- Similarly teleportation is instant transfer of matter from one place to another.

#### Why we need teleportation ?
