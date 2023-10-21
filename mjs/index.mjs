// .js -> por defecto utiliza commonJS
// .mjs -> para utilizar ES Module
// .cjs -> para utilizar CommonJS

const { sum, sub, mult } = require('./sum.js');

console.log(sum(1, 2));
console.log(sub(1, 2));
console.log(mult(1, 2));
