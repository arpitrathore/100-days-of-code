"use strict";

// ---------- 8 data types ----------

// 1. Number
const n = 344,
  PI = 3.14;

console.log(n, PI);
console.log(10 / 0); // Infinity
console.log(-10 / 0); // -Infinity
console.log("abc" / 0); // NaN

// 2. BitInt
const big = 234234234324234242343242342432424324234234234324n;
console.log(big);

// 3. String
const str = "GG";
console.log(str);

// 4. Boolean
console.log(true, false, 1 == 1);

// 5. Null value
let age = null;
console.log(age);

// 6. Undefined value
let a;
console.log(a);

// 7. Objects
const person = {
  name: "arpit",
  age: 35,
};
console.log(person);

// 8. Symbols
const hey = Symbol("hey");
console.log(hey); // Symbol(hey)
