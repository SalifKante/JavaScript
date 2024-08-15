"use strict";

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);

/*
const salif = new Person("Salif", 2000);
console.log(salif);
console.log(salif instanceof Person);
// 1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

const jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2017);
const jack = new Person("jack", 1975);

console.log(jonas, matilda, jack);

//Prototypes

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(Person.prototype);

salif.calcAge();
matilda.calcAge();
jonas.calcAge();

console.log(salif.__proto__);
console.log(salif.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(salif));
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(salif.species, matilda.species);

console.log(salif.hasOwnProperty("firstName"));
console.log(salif.hasOwnProperty("species"));

console.log(Person.prototype);

// Object.prototype (top of prototype chain)
console.log(salif.__proto__.__proto__);
console.log(salif.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 3, 3, 5, 7, 6, 3, 1, 4];
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.log(h1);
console.dir(h1);
console.dir((x) => x + 1);
*/

// class expression
// const PersonCl = class {

// }

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) return (this._fullName = name);
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log("Hey there 👋");
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `My name is ${2037 - this.fullName} and I study ${this.course}`
    );
  }
  calcAge() {
    console.log(
      `I am ${2037 - this.age} years old, but as a student ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha James", 2012, "Computer");
console.log(martha);
martha.introduce();
martha.calcAge();
// const rachel = new PersonCl("Rachel", 1980);
// console.log(rachel);
// rachel.calcAge();
// rachel.greet();
// console.log(rachel.age);
// rachel.fullName = "Rachel Pearson";
// console.log(rachel.fullName);

// const john = new PersonCl("John", 1988);
// console.log(john);
// john.calcAge();
// john.greet();

PersonCl.hey();
// john.hey(); ---Error

//------- To keep in mind ---------
// 1. Classes are NOT (hoisted = use before declaration)
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode

//GET and SET with Obj

/*
const account = {
  owner: "salif",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.latest);

//Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__);
console.log(PersonProto);
console.log(steven.__proto__ == PersonProto);

const salif = Object.create(PersonProto);
salif.init("Salif", 2000);
console.log(salif);
*/
