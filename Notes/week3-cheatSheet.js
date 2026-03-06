/* =========================================================
   Week 3 JavaScript Cheat Sheet
   (Save as: week3-cheatsheet.js)
   ---------------------------------------------------------
   How to use:
   1) Include this file with <script src="week3-cheatsheet.js"></script>
   2) Open DevTools (F12) → Console.
   3) Uncomment example lines to see results.
   ========================================================= */


/* =========================
   FUNCTIONS (CORE)
   =========================
   - A function is a reusable block of code with its own scope.
   - Call it to run it. If you don’t call it, it won’t run.
   - Return ends the function and hands back a value.
*/

// Function Statement (HOISTED)
function add(a, b) {
  return a + b;
}
//to call the function declare the function name with () followed after ex. add()
// console.log(add(2, 3)); // 5

// Function Expression (NOT hoisted)
const multiply = function (a, b) {
  return a * b;
};
// console.log(multiply(3, 4)); // 12

// Parameters vs Arguments
function greet(name) {               // name = parameter
  return `Hello, ${name}!`;
}
// console.log(greet("Alice"));      // "Alice" is an argument

// Return ends execution immediately
function firstEven(nums) {
  for (let n of nums) {
    if (n % 2 === 0) return n;
  }
  return null;
}
// console.log(firstEven([1,3,5,8,9])); // 8


/* =========================
   HOISTING (IMPORTANT)
   =========================
   - Function statements are hoisted.
   - Function expressions / arrow functions are NOT hoisted.
*/
// ok();                 // ✅ works (statement hoisted)
function ok(){ /*...*/ }

// notOk();             // ❌ ReferenceError
const notOk = function(){ /*...*/ };


/* =========================
   CALLBACKS
   =========================
   - A callback is a function passed into another function.
   - Used in array methods, event handlers, timers, etc.
*/

function doTwice(fn) {
  fn();
  fn();
}
// doTwice(() => console.log("Hi")); // "Hi" "Hi"
doTwice(() => console.log("Hello"));

let inner = function(){
   console.log("inner 1");
};
 
let outer = function(callback){
   console.log("Outer 1");
   callback();
   console.log("outer 2");
};
 
console.log("test 1");
outer(inner);
console.log("test 2");
 




/* =========================
   ASYNCHRONY: setTimeout / setInterval
   =========================
   - setTimeout(fn, ms): run once after delay
   - setInterval(fn, ms): run repeatedly until cleared
*/

let tick = 0;
const id = setInterval(() => {
  // console.log("tick", ++tick);
  if (tick >= 3) clearInterval(id); // stop after 3 times
}, 1000);

// setTimeout(() => console.log("Runs later"), 500);


// let count = 0;
// let intervalFn = setInterval(() => {
//    count++
//    console.log("Hello");

//    if(count === 5) {
//       clearInterval(intervalFn)
//    }
// }, 1000);

// let progress = 0;

// let loader = setInterval(() => {
//    progress += 10;
//    console.log("Loading...", progress + "%")

//    if(progress >= 100){
//       clearInterval(loader);
//       console.log("Downloaded!")
//    }
// }, 500);


/* =========================
   ARROW FUNCTIONS
   =========================
   - Shorthand for function expressions.
   - `param => expression` (implicit return)
   - `param => { statements; return value; }` (block body)
*/

const square = x => x * x;
// console.log(square(5)); // 25

const toSentence = (first, last) => {
  const name = `${first} ${last}`;
  return `Hello, ${name}.`;
};
// console.log(toSentence("Martin", "Maldonado"));


/* =========================
   ARRAY METHODS (ESSENTIAL 5)
   =========================
   All take a callback with parameters like (value, index, array)
*/

// 1) forEach: iterate (no return) --> Developer Tool
const nums = [6, 4, 3, 2, 5, 1];
// nums.forEach(n => console.log(n));

// 2) map: transform → new array
const doubled = nums.map(n => n * 2);
// console.log(doubled); // [12,8,6,4,10,2]

// 3) filter: keep items that pass condition  ---> Creates a new array like map
//callback function needs a condition
const evens = nums.filter(n => n % 2 === 0);
// console.log(evens); // [6,4,2]

// 4) reduce: fold to a single value
const sum = nums.reduce((acc, n) => acc + n, 0);
// console.log(sum); // 21

// 5) sort: order items (⚠️ mutates!)
// Default compares as strings; provide a compare fn for numbers:
//[...nums] === [6, 4, 3, 2, 1] -> Spread operator
const asc = [...nums].sort((a, b) => a - b);
//(a,b) => a - b ascending compare function
      //negative keep a before b
      //positive switch b before a
const desc = [...nums].sort((a, b) => b - a);
// console.log(asc, desc);
      //negative switches
      //positive keep position

// Sort objects by key:
const users = [
  { name: "Martin", age: 33 },
  { name: "Bob", age: 44 },
  { name: "Stacy", age: 24 }
];
// console.table(users.sort((a,b) => a.age - b.age));

/* BONUS: find / some / every */
const found = nums.find(n => n > 4);     // first > 4
const anyEven = nums.some(n => n % 2==0);// true if any
const allPos = nums.every(n => n > 0);   // true if all
// console.log(found, anyEven, allPos);


/* =========================
   STRING & NUMBER QUICKIES
   ========================= */
const s = "Hello World";
// console.log(s.toLowerCase(), s.includes("World"), s.indexOf("o"));

const n = 12.3456;
// console.log(n.toFixed(2)); // "12.35"
// console.log(Number.isNaN(Number("abc"))); // true


/* =========================
   COMPARISONS & LOGIC
   =========================
   - Prefer strict equality (===, !==)
   - && and || short-circuit and return a value
*/

const age = 19;
const canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote); // "Yes"

// Short-circuit defaults:
const inputName = "";
const displayName = inputName || "Guest";
// console.log(displayName); // "Guest"


/* =========================
   DOM BASICS (SELECT / CHANGE)
   =========================
   - These require a real HTML page with matching elements.
   - Uncomment if you have elements present in the DOM.
*/

// SELECT
// const title = document.getElementById("title");
// const firstPara = document.querySelector(".text");
// const allItems = document.querySelectorAll("li");

// CHANGE CONTENT
// if (title) title.textContent = "New Title";

// STYLES & CLASSES
// if (firstPara) {
//   firstPara.style.color = "skyblue";
//   firstPara.classList.add("highlight");
// }

// CREATE / APPEND
// const list = document.getElementById("list");
// if (list) {
//   const li = document.createElement("li");
//   li.textContent = "New Item";
//   list.appendChild(li);
// }


/* =========================
   EVENTS (INTERACTIVITY)
   =========================
   - addEventListener("event", handler)
   - handler can be a named function or an arrow function
*/

// const btn = document.getElementById("btn");
// if (btn) btn.addEventListener("click", () => alert("Clicked!"));

// Prevent form submit (stay on page):
// const form = document.getElementById("myForm");
// if (form) form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const value = form.querySelector("input")?.value || "";
//   console.log("Submitted:", value);
// });


/* =========================
   COMMON PATTERNS & PITFALLS
   =========================
   - Avoid mutating arrays while iterating; use map/filter.
   - Don’t forget `return` inside arrow function blocks.
   - `sort()` mutates the original array (clone with [...arr]).
   - Arrow functions don’t have their own `this` (lexical this).
*/

// Example: clone before sort
const original = [3,2,1];
const sortedClone = [...original].sort((a,b) => a-b);
// console.log(original, sortedClone);


/* =========================
   PRACTICE SNIPPETS (UNCOMMENT)
   ========================= */

// 1) Write a function that returns the average:
function average(arr) {
  if (!arr.length) return 0;
  const total = arr.reduce((acc, n) => acc + n, 0);
  return total / arr.length;
}
// console.log(average([10, 20, 30])); // 20

// 2) Use filter + map to get names of adults:
const people = [
  {name: "Ana", age: 17},
  {name: "Luis", age: 21},
  {name: "Mia", age: 19},
];
// console.log(people.filter(p => p.age >= 18).map(p => p.name)); // ["Luis","Mia"]

// 3) Debounce (basic idea): wait until user stops typing
function debounce(fn, delay = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}
// const onInput = debounce((v) => console.log("Search:", v), 300);
// onInput("w"); onInput("wa"); onInput("wat"); // only last runs


/* =========================
   QUICK GLOSSARY
   =========================
- Function Statement: `function f(){}` (hoisted)
- Function Expression: `const f = function(){}` (not hoisted)
- Arrow Function: `const f = x => x * 2`
- Callback: A function passed to another function
- setTimeout / setInterval: schedule tasks; clear with clearTimeout/clearInterval
- Array Helpers: forEach (iterate), map (transform), filter (keep), reduce (fold), sort (order)
- Event Listener: Runs when the event occurs (click, submit, input)
- Prevent Default: Keep the browser from doing its default action
*/


/* =========================================================
   End of Week 3 Cheat Sheet
   ========================================================= */
