const array = [1, 2, 3, 4, 5, 6, 7, 8]

const proxy = new Proxy(array, {
  get: (target, property) => {
    if (property === 'length') {
      return target.length 
    }
    return target[property]
  }
})

console.log(proxy.length)


// get using negative indexing and set also
const arr = [1, 2, 3, 4, 5]
console.log(arr[-1]) // undefined

const newProxyArr = new Proxy(arr, {
  get: (target, prop) => {
    const index = Number(prop)
    if(index < 0){
      return target[target.length + index]
    }
    return target[index]
  },

  set:(target, prop, value) => {
    const index = Number(prop)
    if(index < 0){
      target[target.length + index] = value
    }
    else{
      target[index] = value
    }
    return false
  }
})

console.log(newProxyArr[-1])

newProxyArr[-1] = 10
console.log(newProxyArr)
console.log(arr)