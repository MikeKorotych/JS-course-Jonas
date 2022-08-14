'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/ukraine');
request.send();

request.addEventListener('load', function () {
  const [data] = JSON.parse(this.responseText);
  // console.log(data);
  let [curr] = Object.values(data.currencies);
  // console.log(curr);

  const html = `
  <article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
    <p class="country__row"><span>💰</span>${curr.name}</p>
  </div>
</article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
});

///////////////////////////////////////////////////////////////////////////////////////////////////

// function isIsogram(str) {
//   // return new Set(str.toUpperCase()).size == str.length;
//   return new Set(str.toUpperCase());
// }

// console.log(isIsogram('moOse'));
// console.log(isIsogram('abA'));

// function greet(name) {
//   //your code here
//   return `Hello, ${name} how are you doing today?`;
// }

// console.log(typeof '42');

// console.log(greet('Mike'));

function greet(name, owner) {
  // Add code here
  // if (name === owner) {
  //   return 'Hello boss';
  // } else {
  //   return 'Hello guest';
  // }

  return name === owner ? 'Hello boss' : 'Hello guest';
}

console.log(greet('Mike', 'Boss'));
