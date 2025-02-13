![polyfiils](./images/polyfill.webp)

# Polyfills in JavaScript

## What is polyfill ?

- Polyfill is a JavaScript library that provides missing or polyfill functionality for older browsers.
- Not for only older browser, but for new browser also
- If I want to design a app, and there is some JavaScript function which are unknwon for browser, I have to design my own polyfills and send it to the browser before my page loads, otherwise my app will crash in the browser.
  > We’re going to learn how to customize our own polyfills in this article. So grab your favorite drink, get comfortable on your bed, sofa, or chair, and follow along as we break it down step by step! 🚀

---

## Why we need Polyfills ?

- Let us go with a real life example.
  > Imagine your phone’s storage is completely full, but you need to save some important files to a USB pendrive.

> Problem?

- Your phone doesn’t have a USB Type-A port to directly connect the pendrive.

> Solution?

- You use a Type-A to Type-C connector to bridge the gap and make the pendrive compatible with your phone. In the same way, a polyfill acts as a connector in JavaScript, allowing older browsers (that lack modern features) to access and use those features, ensuring everything works smoothly.

  ![pendrive insert](./images/pendrive.webp)

---

## How to write polyfills ?
