const { error } = require('node:console')
const fs = require('node:fs/promises')

// si no tiene las promesas de forma nativa en la version
    // const fs = require('node:fs')
    // const { promisify } = require('node:util')
    // const readFilePromise =  promisify(fs.readFile)

console.log('1- Leyendo el primer archivo...')

text = fs.readFile('./archivo.txt', 'utf-8')
.then(text=>{
    console.log('primer texto:', text)
})
 
console.log('3- hacer cosas mientras lee el archivo... ')

console.log('4- Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
.then(text2=>{
    console.log('Segundo texto:', text2)
})




