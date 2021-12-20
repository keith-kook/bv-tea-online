export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

  if (existingCartItem) {
    // iteriate the whole array and update the quantiy with same id
    return cartItems.map(cartItem => (cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem))
  }
  // return the whole array if no match with the new item and set the qty to 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  // check the item in cartItems array
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)
  // if found, descrese one qty if qty > 1
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map(cartItem => (cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem))
}
