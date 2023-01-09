// /// Importing module
// import { addtToCart, totalPrice as price, tq } from './shoppingCart.js';
// addtToCart('bread', 5);
// console.log(price, tq);

console.log('Exporing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addtToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addtToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
