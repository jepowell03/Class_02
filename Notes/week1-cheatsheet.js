/* =========================================================
   Week 1 JavaScript Cheat Sheet
   (Save as: week1-cheatsheet.js)
   ---------------------------------------------------------
   How to use:
   1) Include this file in a page with a <script src="week1-cheatsheet.js"></script>
   2) Open DevTools (F12) → Console.
   3) Uncomment example lines to see results.
   ========================================================= */

/* =========================
   COMMENTS
   ========================= */
// Single line comment

/*Console Log is used as a check and not as something to write javascript with*/


/*
Multi-line Comment Block
comment
*/




//console.log("Hello"); // This line is commented out and won't run

/* =========================
   VARIABLES
   ========================= */
/*
let   → block-scoped, re-assignable
const → block-scoped, NOT re-assignable (the reference)
var   → function-scoped (legacy; avoid in modern code)
*/
let username = "Alice";
console.log(username);
username = "Asuka";
console.log(username);
const MAX_USERS = 100;
// var legacy = true; // avoid

/* =========================
   PRIMITIVE DATA TYPES
   ========================= */
/*
string, number, boolean, undefined, null, bigint, symbol
*/
let aString = "hello";       //Text in javascript --> "string" - 'string' - `string`
let bstring = "17";
let aNumber = 42;            // integer and floating point are both 'number'
let aBool = false;           //logical data type
let aUndef;                  // undefined lacks a value (default for uninitialized variables)
let aNull = null;            // special "empty" value intentional absence of any value
let aBig = 9007199254740993n;// BigInt (note the 'n')
let aSym = Symbol("id");     // unique & immutable identifier

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// typeof checks:
// console.log(typeof aString, typeof aNumber, typeof aBool, typeof aUndef);
// console.log(typeof aNull); // "object" (historical quirk)
// console.log(typeof aBig, typeof aSym);

/* =========================
   TYPE CONVERSION
   ========================= */
// Explicit:
let n1 = Number("11");       // 11
let n2 = Number("abc");      // NaN
let s1 = String(123);        // "123"
let b1 = Boolean(0);         // false
let b2 = Boolean("text");    // true

// Implicit:
// console.log(11 - "2");    // 9  (string → number)
// console.log("Hello " + 5); // "Hello 5" (number → string)

/* =========================
   TRUTHY / FALSY
   ========================= */
/*
Falsy values only:
- false, 0, 0n, "", null, undefined, NaN
Everything else is truthy.
*/
// console.log(Boolean("hi")); // true
// console.log(Boolean(""));   // false
// console.log(Boolean(0));    // false

/* =========================
   OBJECTS (key → value)
   ========================= */
let user = {
  name: "Alice",
  age: 33,
  email: "alice@example.com",
  "age-2025": 34,           // keys may be quoted
  social: { ig: "alice_ig", facebook: null } // nested object
};
let myObj = {
   key1: "Key1 value", 
   key2: "Key2 value", 
   key3: "Key3 value"
};
//console.log(myObj);
//console.log(myObj.key2);
//console.log(myObj.key1, myObj.key3);
//console.log(myObj["key1"]);
// Access:
// console.log(user.name);           // dot notation
// console.log(user["age-2025"]);    // bracket notation (for special keys)
// console.log(user.social.ig);      // nested

// Add / remove:
// user.role = "student";
// delete user.email;

/* =========================
   ARRAYS (ordered lists)
   ========================= */
let arr = ["Alice", 33, true, undefined, null, [1,2,3], "Zed"];
console.log(arr);
// Indexing starts at 0:

// console.log(arr[0]);      // "Alice"
// console.log(arr[5][0]);   // 1
// console.log(arr.length);  // number of elements
// console.log(arr instanceof Array); // true

//console.log(typeof arr);
/* =========================
   OPERATORS
   ========================= */
// Assignment: to initiate a variable with the assignment operator '='
let x = 10;

// Arithmetic: + - * / ** %      "** is to the power of for ex 2 ** 3",   % is the remainder operator needs two operands to work
// console.log(5 + 2, 5 - 2, 5 * 2, 5 / 2, 2 ** 3, 7 % 3);

// Unary + / - (coerce to number, or negate):   needs only one to work
// console.log(+"123"); // 123
// console.log(+"abc"); // NaN
// console.log(-"5");   // -5

// Increment / Decrement: increases the numerical value by one or decreases it by one, can only do it in increments of one
// let c = 10;
// console.log(++c); // 11 (prefix)  increases right away before the operand
// console.log(c++); // 11 (postfix), then c becomes 12  increases after the operand

// Compound assignment: += -= *= /= %= **=
// let total = 100;
// total += 10.99; // 110.99

//To add without compound assignment it would be total = total + 10;

/* =========================
   LOGICAL OPERATORS
   ========================= */
/*
&& (AND), || (OR), ! (NOT)   Checks to see if a statement is true or false
London is a city AND London is in Great Britain ---> true
London is a city AND London is in Iceland ---> false

London is a city OR London is in Iceland ---> true, -Only one operand needs to be true to get back true when using OR-
London is a village OR London is in Iceland ---> false

!London is a city ---> false
!London is a village ---> true -negates giving the opposite value of the statement


Short-circuiting with non-boolean values:
- A && B returns A if A is falsy, otherwise B
- A || B returns A if A is truthy, otherwise B
*/
// console.log(true && "OK");     // "OK"
// console.log(0 && "OK");        // 0
// console.log("Alice" || "Bob"); // "Alice"
// console.log("" || "Bob");      // "Bob"
// console.log(!true, !false);    // false true


const a = false;
const b = true;
const c = false; 
const d = true;

console.log(a && b && c || d); 
console.log(a && b && (c || d));

//logical AND takes presence over the OR
/* =========================
   STRING TOOLS
   ========================= */
// Concatenation:
let first = "Martin";
let last = "Maldonado";
// console.log(first + " " + last);

// Template literals (interpolation + multiline):
let age = 33;
// console.log(`Hello, my name is ${first} and I am ${age} years old.`);
// const poem = `Roses are red,
// violets are blue...`;

/* =========================
   COMPARISON OPERATORS
   ========================= */
/*
=== strict equality (no type coercion)  ---> Equal in value and data type --> true
password === dataBasePassword
==  loose equality  (coerces types; avoid in most cases)
!== strict inequality  ---> Not equal in value or data type --> true
!=  loose inequality   

> < >= <=  numeric or lexicographic (for strings)
*/
 // console.log(10 === 10);      // true
 // console.log("10" == 10);     // true (coerces) ⚠️
 // console.log("10" === 10);    // false (strict)
 // console.log(10 !== 5);       // true
 // console.log("b" > "a");      // true (lexicographic) Ascii value of 'b' is greater than 'a'
 // console.log("a" > "B");      // true ('a' > 'B') // because lowercase letters have higher ASCII values than uppercase letters

/* =========================
   instanceof / delete
   ========================= */
// console.log([] instanceof Array); // true
// let person = { name: "Alice", age: 36 };
// delete person.age;
// console.log(person.age); // undefined

/* =========================
   TERNARY OPERATOR
   ========================= */
/*
condition ? expressionIfTrue : expressionIfFalse
*/
let canVoteMsg = (age >= 18) ? "You can vote!" : "You cannot vote.";
// console.log(canVoteMsg);// checks if the age is greater than or equal to 18, if true it returns "You can vote!",
//  otherwise it returns "You cannot vote."

let number = 10;
let parity = (number % 2 === 0) ? "Even" : "Odd";// checks if the number is divisible by 2 with no remainder, if true it's even, otherwise it's odd
// console.log(parity);

// Example with OR for a default:
let usernameInput = "";
let displayName = usernameInput ? usernameInput : "Guest"; // same as: usernameInput || "Guest"
// console.log(displayName);

/* =========================
   DIALOGS (BROWSER)
   ========================= */
// alert("Heads up!");
// const confirmed = confirm("Continue?"); // true if OK, false if Cancel
// const nameInput = prompt("What is your name?"); // returns string or null
// const safeName = nameInput ? nameInput : "anonymous";
// console.log(`Hello, ${safeName}`);

/* =========================
   LENGTH / INDEXOF (quick refs)
   ========================= */
// Strings and arrays both have length:
const s = "Hello";
const arr2 = ["a","b","c"];
// console.log(s.length);    // 5
// console.log(arr2.length); // 3

// indexOf on strings/arrays (returns index or -1 if not found):
// console.log(s.indexOf("l"));  // 2
// console.log(arr2.indexOf("b"));// 1

/* =========================
   PRACTICE SNIPPETS (UNCOMMENT)
   ========================= */

// 1) Type check demo:
// console.log(typeof "USA");          // "string"
// console.log(typeof false);          // "boolean"
// console.log(typeof 17);             // "number"
// console.log(typeof 123n);           // "bigint"
// console.log(typeof undefined);      // "undefined"
// console.log(typeof null);           // "object" (quirk)
// console.log(typeof Symbol("x"));    // "symbol"

// 2) Number conversion & NaN:
// console.log(Number("42"));          // 42
// console.log(Number("4.2"));         // 4.2
// console.log(Number("foo"));         // NaN
// console.log(isNaN(Number("foo")));  // true

// 3) Logical chains:
// console.log(true && true && false || true); // true
// console.log(true && (false || true));       // true

// 4) Building an object and reading nested values:
const profile = {
  name: "Alice",
  stats: { posts: 12, followers: 250 }
};
// console.log(profile.stats.followers);

// 5) Simple validation example:
function isStrongPassword(pw) {
  // length >= 8 AND includes a number (regex: \d)
  return pw.length >= 8 && /\d/.test(pw);
}
// console.log(isStrongPassword("abc"));        // false
// console.log(isStrongPassword("abc12345"));   // true

/* =========================
   QUICK GLOSSARY
   =========================
- Primitive: string, number, boolean, undefined, null, bigint, symbol
- Complex: object, array, function (objects under the hood)
- Truthy/Falsy: values that coerce to true/false in boolean context
- Coercion: converting between types (explicit: Number(), implicit: "5" * 2)
- Strict vs Loose: === / !== (no coercion) vs == / != (coercion)
- Template literal: backticks `...` with ${expr} interpolation
- Ternary: cond ? A : B (inline if/else)
- Short-circuit: A && B and A || B return a value, not just booleans
*/

/* =========================================================
   End of Week 1 Cheat Sheet
   ========================================================= */
