// .js -> por defecto utiliza commonJS
// .mjs -> para utilizar ES Module - Estandar de navegadores
// .cjs -> para utilizar CommonJS - Estandar de entorno de ejecución de Node 

import {sum, sub, mult} from './sum.mjs'


console.log(sum(1,2));
console.log(sub(1,2));
console.log(mult(1,2));