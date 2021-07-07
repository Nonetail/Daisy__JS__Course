/*
let javascript = 'amazing';
// NOTE: You should use === to tell the equality, because == js will try to change the data type to make the equality, like 1 & '1'.
if (javascript === 'amazing') alert('JavaScript is FUN!');
*/

/*
1. Variables
let js = 'amazing';
console.log(40 + 8 + 23 - 10);
// NOTE: Whenever you want to output something, use console.log.
console.log('Jonas');
console.log(23);

let firstName = 'Matilda';
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM';
// NOTE: function is a key element, so it cannot be used as a variable directly, and we add $before it.
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
*/

// assignment for variables
let country = 'China';
let continent = 'Asia';
let population = 1400;

console.log(country);
console.log(continent);
console.log(population);

/*
2.Data type
let javascriptIsFun = true;
console.log(javascriptIsFun);

// NOTE: Typeof is an operator that can be used to check the data type.
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'jonas');

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// NOTE: This is a bug for typeof of JS because of legacy reasons
console.log(typeof null);
*/

// assignment for data type
let isIsland = false;
let language;
console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// NOTE: Three ways to declaring variables, let can set empty variable that canbe changed in the future in some conditions, but we can also use const to create a variable that we cannot reassign, an immutable variable. And var is an old coding style used same as let. The diff between var and let is that let is block scoped, and var is function-scoped. Never use var.
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// when using const, we need intial value
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);
