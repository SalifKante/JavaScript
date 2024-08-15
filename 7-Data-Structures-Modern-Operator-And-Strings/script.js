"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, //Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tanvani 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //openingHours: openingHours,
  //ES6 enhanced object literals
  openingHours,
  /*order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },*/
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// String Methods Practice
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//                Arrival from BRU to FAO (11h45)
//      🔴 Delayed Arrival from HEL to FAO (12h05)
//                    Departure from FAO to LIS (12h30)

// console.log(flights.split("+"));
const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
  // console.log(flight.split(";"));
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")})`;
  //console.log(output?.length);

  console.log(output.padStart(44, "-"));
}

//Working with Strings Part-3
/*
console.log("a+very+nice+string".split("+"));
console.log("Salif Kante".split(" "));

const [firstName, lastName] = "Salif Kante".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("salif kante");
capitalizeName("n'Famory camara");

//Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Salif".padStart(20, "+").padEnd(30, "+"));

//Credit Card Number with Padding
const maskCreditCard = function (number) {
  const str = number + "";
  const last4Char = str.slice(-4);
  return last4Char.padStart(str.length, "*");
};

console.log(maskCreditCard(45585200147763));
console.log(maskCreditCard(455852001477621792563));
console.log(maskCreditCard("45585200147763015055"));
//Repeat Method
const message2 = "Bad weather... All Departues Delayed...";
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInline(5);
planesInline(2);
planesInline(0);
*/

//Working with Strings Part-2
/*
const airline = "TAP Air MALI";
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// Fix capitalisation in name 

const passenger = "sAlIF";
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1).toLowerCase();
console.log(passengerCorrect);
// Comparing Email 
const email = "hello@salif.io";
const loginEmail = "Hello@salif.Io \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(trimmedEmail);

console.log(email === normalizedEmail);

// Replacing 
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passenger come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

//Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus Family");
}

//Practice Exercice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("You are welcomed aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and Camera");
checkBaggage("Got some snacks and a gun for protection");
*/
//Working with Strings Part-1
/*
const airline = "TAP Air MALI";
const plane = "A320";
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("8737"[0]);

console.log(airline.length);
console.log("8737".length);

console.log(airline.indexOf("r"));
console.log(airline.indexOf("MALI"));
console.log(airline.lastIndexOf("r"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😊");
  else console.log("You got lucky 😎");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("Salif"));
console.log(typeof new String("Salif"));
console.log(new String("Salif").slice(1));
console.log(typeof new String("Salif").slice(1));
*/
/* ---------------- Map Iteration----------------*/
/*const question = new Map([
  ["question", "what is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again"],
]);
console.log(question);

//Convert object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

//Quiz App
console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}:${value}`);
}

// const answer = Number(prompt("Your answer: "));
const answer = 3;
console.log(answer);
console.log(question.get(question.get("correct") === answer));

// Converting Map to Array
console.log("----...question----");
console.log(...question);
console.log("----question.entries()----");
console.log(question.entries());
console.log("----...question.keys()----");
console.log(question.keys());
console.log("----question.values()----");
console.log(question.values());
*/
/* ---------------- Looping Objects keys, values, entries---------------- */
/*
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days : `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/
/*---------------- WITH Optional chainning ---------------- */
/*
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRissoto?.(0, 1) ?? "Method does not exist");

//Arrays
const users = [{ name: "salif", email: "salif.kante.pro@gmail.com" }];
// const users = [];
//Best Way
console.log(users[0]?.name ?? "User array empty");
//Long Way
if (users.length > 0) console.log(users[0].name);
else console.log("Array Empty");
*/

/* -------------Short Circuting-------------- */
/*
//Use any data type return ANY data type
console.log("------- OR-------");

console.log(3 || "Salif");
console.log("" || "Salif");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);
// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);
const guest2 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest2);

console.log("------- AND-------");
console.log(0 && "Salif");
console.log(7 && "Salif");

console.log("Hello" && 23 && null && "Salif");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
console.log("-----------");

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
for (const item of menu) console.log(item);

for (const [item, el] of menu.entries()) console.log(`${item + 1}: ${el}`);
// console.log([...menu.entries()]);
console.log(restaurant);

console.log("-------Optional Chaining-------");
// if (restaurant.openingHours.nom) console.log(restaurant.openingHours.nom.open);
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);
*/

/*
//REST Pattern
//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
console.log(sat);

//Functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

//Calling orderPizza function
restaurant.orderPizza("mushrooms", "Potatoes", "Meat");
*/

/*
//Spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log("1,2,7,8,9");

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Salif";
const letters = [...str, "", "K."];
console.log(letters);
console.log(...str);
// console.log(`${...str} KANTE`)

const ingredients = [
  // prompt("Let's make pasta, Ingredient 1?"),
  // prompt("Let's make pasta, Ingredient 2?"),
  // prompt("Let's make pasta, Ingredient 3?"),
];
console.log(ingredients);

//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
console.log(restaurant.orderPasta(...ingredients));

//Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurant.name = "Ristorante Roma";
console.log(restaurant.name);
console.log(restaurantCopy.name);
*/

/*
//Destructing Objects
restaurant.orderDelivery({
  time: "22:3",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});
const { name, openingHours, categories } = restaurant;
//console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

//Default Values
console.log(restaurantName, hours, tags);
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
//Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested destructuring
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
