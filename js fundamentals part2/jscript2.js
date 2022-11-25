'use strict';

// Activating Strict Mode
/*
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('i can drive');


// const interface = 'Audio';
// const private = 534;
*/

// Functions
/*
function logger() {
  console.log('My name is P'); 
}

// calling / running function
logger();
logger();


function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

// Function Declarations vs. Expressions
/*
// Function declaration

const age1 = calcAge1(2000);
// console.log(age1);

function calcAge1(birthYear) {
    // const age = 2022 - birthYear;
    // return age;
    return 2022 - birthYear;
}

const age1 = calcAge1(2000);
console.log(age1);
*/

// Function expression
/*
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
}

const age2 = calcAge2(2000);

console.log(age1, age2);
*/

// Arrow functions
/*
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) 
=> {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2000, 'phuong')); 
console.log(yearsUntilRetirement(1983, 'Lala'));
*/

// Functions Calling Other Functions
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/

// Reviewing Functions
/*
const calcAge = function (year) {
  return 2022 - year;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
//   return retirement

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
}

console.log(yearsUntilRetirement(2000, 'PPP'));
console.log(yearsUntilRetirement(1900, 'trang'));
*/

// Introduction to Arrays
/*

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(2000, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'John';
console.log(friends);
// friends = ['Hien', 'Linh']

const firstName = 'Phuong';
const phg = [firstName, 'vn', 2022 - 2000, friends];
console.log(phg);
console.log(phg.length);
*/
// Exercise
/*
const calcAge = function (birthYear) {
  return 2022 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);*/

// Basic Array Operations (Methods)
/*
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First element
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}*/

//coding challenge 2
/*
const calcTip = (bill) =>
    bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals); */

// Introduction to Objects
/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
  ];
  
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };*/

// Dot vs. Bracket Notation
/*
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };
  console.log(jonas);
  
  console.log(jonas.lastName);
  console.log(jonas['lastName']);
  
  const nameKey = 'Name';
  console.log(jonas['first' + nameKey]);
  console.log(jonas['last' + nameKey]);
  
  // console.log(jonas.'first' + nameKey)
  
  const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
  
  if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
  } else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
  }
  
  jonas.location = 'Portugal';
  jonas['twitter'] = '@jonasschmedtman';
  console.log(jonas);*/

//   console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);*/

// Object Methods
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function () {
    //   console.log(this);
    //   return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    //challenge
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${
            jonas.job
        }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    },
};

// const calcAge = function () {
//     return 2037 - birthYear
// };

// console.log(jonas.calcAge(1991));
console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));

console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
*/

// Iteration: The for Loop
/*
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}*/

// Looping Arrays, Breaking and Continuing
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true,
];

const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);

for (let i = 0; i < jonas.length; i++) {
    //reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    //filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages);

// continue and break

console.log('only strings');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log('break with number');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}*/

// Looping Backwards and Loops in Loops
/* const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true,
];

// 0->4
// 4->0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise <=3; exercise++) {
    console.log(`--starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(
            `Exercise ${exercise}: Lifting weight repetition ${rep}`
        );
    }
}*/

// The while Loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`for:Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     // console.log(`while: Lifting weights repetition ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end');
}
