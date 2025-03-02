const cart_items = document.getElementById('cart-items')
const cart_empty = document.getElementsByClassName('empty-cart')[0]
const total_price = document.getElementById('total_price')

const cart = []

const addToCart = (product, price) => {
  if (cart.length === 0) {
    cart_empty.style.display = 'none'
  } 
  let quantity = 1
  
  const totalPrice = () => {
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    total_price.innerText = `$ ${total.toFixed(2)}`
  }
  const li = document.createElement('li')
  // li.innerText = product
  li.classList.add('quantity-controls')

  li.innerHTML = `
                  ${product} 
                  <button class="increment">+</button> 
                  <span class="quantity">${quantity}</span>
                  <button class="decrement">-</button> 
                  <span class="price">$${price}</span>
                  <button class="remove">Remove</button>
                `
  cart_items.appendChild(li)

  // bring all btns
  const increment_btn = li.querySelector('.increment')
  const decrement_btn = li.querySelector('.decrement')
  const remove_btn = li.querySelector('.remove')
  const quantity_val = li.querySelector('.quantity')
  const price_val = li.querySelector('.price')

  // incremention 
  increment_btn.addEventListener('click', () => {
    quantity++
    quantity_val.innerText = quantity
    price_val.innerText = `$ ${(price * quantity).toFixed(2)}`
    const cartItem = cart.find(item => item.product === product)
    if (cartItem) cartItem.quantity = quantity
    totalPrice()
  })

  // decremention
  decrement_btn.addEventListener('click', () => {
    if(quantity > 1) {
      quantity--
      quantity_val.innerText = quantity
      price_val.innerText = `$ ${(price * quantity).toFixed(2)}`
      const cartItem = cart.find(item => item.product === product)
      if (cartItem) cartItem.quantity = quantity
      
      totalPrice()
    }
  })

  // remove the item
  remove_btn.addEventListener('click', () => {
    cart_items.removeChild(li)
    const index = cart.findIndex(item => item.product === product)
    if (index !== -1) cart.splice(index, 1)

    if (cart.length === 0) {
      cart_empty.style.display = 'block'
    }
    totalPrice()
  })
  cart.push({ product, price, quantity })
  cart_items.appendChild(li)
  totalPrice()
}
