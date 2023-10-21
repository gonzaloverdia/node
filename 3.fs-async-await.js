
// si no tiene las promesas de forma nativa en la version
    // const fs = require('node:fs')
    // const { promisify } = require('node:util')
    // const readFilePromise =  promisify(fs.readFile)


const { readFile } = require('node:fs/promises');


// IIFE - Inmediatly ivoked function Expression
( async () => {

console.log('1- Leyendo el primer archivo...')

const text = await readFile('./archivo.txt', 'utf-8')
console.log('Este es el primer archivo: ', text)
 
console.log('3- hacer cosas mientras lee el archivo...')


console.log('4- Leyendo el segundo archivo...')
const text2 = await readFile('./archivo2.txt', 'utf-8')

console.log('Este es el segundo texto: ', text2)

}) ()






