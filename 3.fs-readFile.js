const { error } = require('node:console')
const fs = require('node:fs')



console.log('1- Leyendo el primer archivo...')

fs.readFile('./archivo.txt', 'utf-8', (err, text) =>{
    console.log('2- Primer archivo: ', text)
})

console.log('3- hacer cosas mientras lee el archivo... ')

console.log('4- Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text2) =>{
    console.log('5- Segundo archivo: ', text2)
})



