var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {
<<<<<<< HEAD
    itemName: `${item}`,
    itemPrice: Math.floor(Math.random()*100)
  }
  cart.push(newItem)
  return `${item} has been added to your cart.`
=======
    "itemName": `${item}`,
    "itemPrice": "$"+Math.random()
  }
  cart.push(newItem)
  return `${itemName} has been added to you cart.`
>>>>>>> 351508736ebe2e6b6f9e0557a1ddd06e63e39686
}

function viewCart() {
  var fullCart = []
<<<<<<< HEAD
  let i = 0
  if (cart.length===0){
    return "Your shopping cart is empty."
    }else if (cart.length===1){
      fullCart.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }else{
      while(i<cart.length){
        if(i===cart.length-1){
          fullCart.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`)
          }else{
            fullCart.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
          }
          i++}
      }
       return `In your cart, you have${fullCart}.`
  }
 
=======
  for(let i=0;i<cart.length;i++){
    if(i===cart.length-1){
      fullCart =[...fullCart,` and ${item} at ${price}.`]
    }else{
      fullCart.push(` ${item} at ${price}`)
      i++
    }
    
  }
  // write your code here
}
>>>>>>> 351508736ebe2e6b6f9e0557a1ddd06e63e39686

function total() {
  var sum = 0
  for(let i=0;i<cart.length;i++){
    var cost = parseInt(`${cart[i].itemPrice}`)
    sum = sum + cost
  }
  return sum
}

function removeFromCart(item) {
  for(let i = 0; i<cart.length ; i++){
    if(cart[i].itemName === item){
    cart.splice(i, 1)
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(cardNumber>0){
      var pmtMessage = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
      cart.length = 0
      return pmtMessage
  }else{
    return "Sorry, we don't have a credit card on file for you."
  }
}








