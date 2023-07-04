function mostrarNombre(nombre: string) {
  console.log("Tu nombre es", nombre);
}

// mostrarNombre("Joaquin");  

interface Book {
  title: string,
  author: string,
  pages: number,
  isbn: string
}

function printInfo (book:Book){
  console.log(`Title: ${book.title}`)
  console.log(`Title: ${book.author}`)
  console.log(`Title: ${book.pages}`)
  console.log(`Title: ${book.isbn}`)
}

const bookUno: Book = {
  title: "Liderazgo",
  author: "Biografia",
  pages: 127,
  isbn: "abc"
}
const bookDos: Book = {
  title: "Conocimientos",
  author: "Biografia",
  pages: 134,
  isbn: "abc"
}

printInfo(bookUno)
printInfo(bookDos)

// Typescript
//Escribimos un archivo con extension .ts para que el editor nos ayude con la sitaxis
// Debemos instalar typescript en nuestro proyecto o de manera global en la pc para poder
// utilizarlo, con el comando "npm install -g typescript"
// luego instalamos el motor "npm install -g ts-node"
// Es el motor que nos va a ayudar a ejecutar el codigo sin compilar, hace una transpilacion ¿? {ver este tema}
// una vez escrito el codigo typescript para ejecutarlo en nuestra terminal debemos utilizar los comandos
// ts-node index.ts 
// Ahora bien, este archivo si debe ser interpretado por el navegador que solo interpreta Javascript, debemos
// compilarlo a Javascript, para eso con el comando "tsc index.ts" nos va a compilar y a crear un archivo del mismo
// nombre con codigo js (index.ts > index.js) para el navegador
//No edita el archivo ts sino que hace una copia js

// ts node
// ts-node es un paquete de Node.js que te permite ejecutar archivos TypeScript directamente en Node.js sin tener que compilar primero el código a JavaScript. En otras palabras, te permite ejecutar archivos TypeScript en Node.js de la misma manera que ejecutarías archivos JavaScript.