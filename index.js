// EXAMPLE 1 - Get the Length of a Set in JavaScript

const set = new Set(['a', 'b', 'c']);

console.log(set.size); // 👉️ 3

set.add('d');
set.add('e');

console.log(set.size); // 👉️ 5

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the length of a `Set` using `Set.forEach()`

// const set = new Set();

// console.log(set.size); // 👉️ 0

// set.add('bobby');
// set.add('hadz');

// let length = 0;

// set.forEach(_element => {
//   length += 1;
// });

// console.log(length); // 👉️ 2
