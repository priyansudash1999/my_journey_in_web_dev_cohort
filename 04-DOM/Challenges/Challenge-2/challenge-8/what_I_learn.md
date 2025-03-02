# querySelector vs getElementByClassName[0]

- In this project I used
  ```javascript
  // bring all btns
  const increment_btn = document.getElementsByClassName("increment")[0];
  const decrement_btn = document.getElementsByClassName("decrement")[0];
  const remove_btn = document.getElementsByClassName("remove")[0];
  const quantity_val = document.getElementsByClassName("quantity")[0];
  ```
- I knew that using className and [0] is the first child of the same class name.
  `getElementsByClassName("increment")[0]` is the first child which classname is increment,
  I thought in this project I have given increment to only an element, so it can work,
- It worked well but when I try to remove one element from the list, it removes all the elements from the list, then I want the help of chatgpt, and It tells me that "The issue is that you're using document.getElementsByClassName() to get the buttons inside your event listeners. This method returns a live HTMLCollection, which updates dynamically and always points to the first matching element in the document. As a result, all list items are affected when clicking a button because it always modifies the first matching elements."

- so, I have to used querySelector
