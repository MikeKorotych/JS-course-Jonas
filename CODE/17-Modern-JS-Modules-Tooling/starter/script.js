// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log('Importing module');
// addToCart('bread', 5);
// console.log(price, tq);
// console.log('Importing module');

import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// // import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 2);
// add('apples', 2);

// console.log(cart);
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // Not very clean
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to card`);
//   };

//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 2);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);

// Export
// export.addToChart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to card`);
// };

// // Import
// const {addToChart} = require('./shoppingCart.js')

import copyObject from 'lodash-es';
import deepClone from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = copyObject(state);
const stateDeepClone2 = deepClone(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);
console.log(stateDeepClone2);

if (module.hot) {
  module.hot.accept();
}

import 'core-js/stable';

// Polifiling async functions
import 'regenerator-runtime/runtime';
