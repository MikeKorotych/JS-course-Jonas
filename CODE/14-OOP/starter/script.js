'use strict';

const Person = function (firsName, birthYear) {
  // Instance properties / свойства екземпляра
  this.firsName = firsName;
  this.birthYear = birthYear;

  // никогда не создавайте метод внутри функции конструуктора
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const mike = new Person('Mike', 1996);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
mike.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);

console.log(jonas.hasOwnProperty('firsName'));
console.log(jonas.hasOwnProperty('species'));

////////////////// MININ ///////////////////////////////

// const person = new Object({
//   name: 'Maxim',
//   age: 25,
//   greet: function () {
//     console.log('Greet!');
//   },
// });

// Object.prototype.sayHello = function () {
//   console.log('Hello');
// };
