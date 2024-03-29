/*
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);


////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

const job1 = "programmer";
job1 = 123
let job2 = "teacher";

console.log(myFirstJob);

// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// let, const and var
let age = 30;
age = 31;

function abc() {
    // let num = 1
    let age = 30
    if(age === 30) {
        num = 3

        console.log('num inner', num)
    }
    console.log('num outer', num)
}
abc()

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);
++i i++

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log((now - 1991) > (now - 2018));

// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// Strings and Template Literals
/*const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas =
    "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines buon 
ngu`); */

// Taking Decisions: if / else Statements
/*const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗 ');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century); /*


// Coding Challenge #1

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// let massMark = 95;
// let heightMark = 1.88;
// let massJohn = 85;
// let heightJohn = 1.76;

// let BMIMark = massMark / heightMark ** 2;
// let BMIJohn = massJohn / (heightJohn * heightJohn);
// let markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI); */

/////////////
// Coding Challenge #2

// let massMark = 95;
// let heightMark = 1.88;
// let massJohn = 85;
// let heightJohn = 1.76;

// let BMIMark = massMark / heightMark ** 2;
// let BMIJohn = massJohn / (heightJohn * heightJohn);
// let markHigherBMI = BMIMark > BMIJohn;
/*
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`);
} */

///
// Type Conversion and Coercion

// type conversion
/*const inputYear = '2000';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(22), 22);
*/

// type coercion
/*
console.log('I am ' + 22 + ' years old');
console.log('I am ' + '22' + ' years old');

console.log('22' - '10' - 3);
console.log('22' + '10' + 3);

console.log('1' / '2');

let n = '1' + 1;
n = +n - 1;
console.log(n); // 10
*/

// Truthy and Falsy Values
/*
// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean('Phuong'));
// console.log(Boolean({}));

// let money = 100;
let money = 0;

if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

// let weight;
let weight = 0;
if (weight) {
  console.log('weight is defined');
} else {
  console.log('weight is UNDEFINED');
}

*/

// Equality Operators: == vs. ===
/*

//
// let age = '18';

// if (age === 18) console.log('You just became an adult (strict)'); (type and value)
// if (age == 18) console.log('You just became an adult (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);


if (favorite === 23) { // 15 === 23 -> FALSE
  console.log('Cool! 23 is an awful number!')
} 
else if (favorite === 7) { 
  console.log('7 is also a cool number')
} 
else if (favorite === 10) {
  console.log('Number is not 23 or 7')
}
else if (favorite === 9) {
  console.log('9 is also a hot number')
} 
else {
  console.log('Number is not 23 or 7 or 9')
}

if (favorite !== 23) console.log('Why not?'); //strict
*/

// Logical Operators
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B 

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log('She is able to drive!');
// } 
//else { console.log('Someone else should drive');
// }

const isnotTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isnotTired) {
  console.log('Sarah is able to drive!');
} 
else {
  console.log('Someone else should drive...');
}
*/

///
// Coding Challenge #3

// const scoreDolp = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolp, scoreKoalas);

// if (scoreDolp > scoreKoalas) {
//   console.log('Dolphins win');
// } else if (scoreKoalas > scoreDolp) {
//   console.log('Koalas win');
// } else if (scoreDolp === scoreKoalas) {
//   console.log('Both win !');
// }

// The switch Statement
/*
const day = 'mon';

switch (day) {
    case 'mon': //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tues':
        console.log('prepare theory vid');
        break;
    case 'wed':
    case 'thurs':
        break;
        console.log('write codes');
    case 'fri':
        console.log('record');
        break;
    case 'sat':
    case 'sun':
        console.log('off');
        break;
    default:
        console.log('do nothing!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else {
  console.log('Not a valid day!');
}

*/

// Statements and Expressions
/*
3 + 5;
200;
true && false && !false;

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'hehe';
console.log(`I'm ${2022 - 2000} years old ${me}`);
*/

// The Conditional (Ternary) Operator
/* 
const age = 22;
// age >= 18 ? console.log('drink wine') : console.log('drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/
