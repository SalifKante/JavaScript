"use strict";

// Default params
/*const bookings = [];

const createBooking = function (
  fligthNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    fligthNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);
*/

//How Passing Arguments Works : Value vs reference
/*const flight = "LH234";
const salif = {
  name: "Salif Kante",
  passport: 23546897855,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 23546897855) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

//  checkIn(flight, salif);
console.log(flight);
console.log(salif);

//Is the same as doing...
const flightNum = flight;
const passenger = salif;

//Real Life Practice
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(salif);
checkIn(flight, salif);
*/

//Functions Accepting Callback Functions
/*
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher-order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log("✋");
};

document.body.addEventListener("click", high5);

["Salif", "Jonas", "Mory"].forEach(high5);
*/

//Functions Returning Functions
/*const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Salif");
greeterHey("Jonas");
greet("Hello")("Steven");

//Using arrow function
const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);
greet2("KowBedi")("Mory");
*/

//The call and apply method
/*
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Salif Kante");
lufthansa.book(239, "John  Doe");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
//Does not work
// book(23, "Sarah Williams");

//Call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);
book.call(lufthansa, 239, "Mary Cooper");

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

//Apply Method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Salif Kante");
bookEW23("Martha Cooper");

//With event listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
console.log(lufthansa);
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// const addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(10));

//Another Technique: function that return another function

const tax = (value) => (rate) => console.log(value + value * rate);
tax(500)(0.1);
*/

//Challenge #1

//Immediately Invoked Function Expression IIFE
/*
const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// IIFE
(function () {
  console.log("This will never run agin");
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log("This will ALSO never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 26;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

//Closures
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
*/

//Closure more Examples
/*
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();
console.dir(f);

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
//Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
*/
