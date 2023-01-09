//Exporting module
console.log('Exporting module');

//Blocking code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log('Finish fetch users');

const shippingCost = 10;
export const cart = [];

// export const addtToCart = function (prodcut, quantity) {
//     cart.push((prodcut, quantity));
//     console.log(`${quantity} ${prodcut} added to cart`);
// };

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (prodcut, quantity) {
    cart.push({ prodcut, quantity });
    console.log(`${quantity} ${prodcut} added to cart`);
}
