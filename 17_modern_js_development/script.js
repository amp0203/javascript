// /// Importing module
// import { addtToCart, totalPrice as price, tq } from './shoppingCart.js';
// addtToCart('bread', 5);
// console.log(price, tq);

import shoppingCart from './shoppingCart.js';

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
/*


//Top level Await

// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);

    return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then((last) => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

//The Moule Pattern

const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addtToCart = function (prodcut, quantity) {
        cart.push((prodcut, quantity));
        console.log(
            `${quantity} ${prodcut} added to cart (shipping cost is ${shippingCost})`
        );
    };

    const orderStock = function (prodcut, quantity) {
        cart.push((prodcut, quantity));
        console.log(`${quantity} ${prodcut} order from supplier`);
    };

    return {
        addtToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

ShoppingCart2.addtToCart('apples', 4);
ShoppingCart2.addtToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
