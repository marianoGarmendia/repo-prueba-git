function mostrarNombre(nombre) {
  console.log("Tu nombre es", nombre);
}
function printInfo(book) {
  console.log("Title: ".concat(book.title));
  console.log("Title: ".concat(book.author));
  console.log("Title: ".concat(book.pages));
  console.log("Title: ".concat(book.isbn));
}
var bookUno = {
  title: "Liderazgo",
  author: "Biografia",
  pages: 127,
  isbn: "abc",
};
var bookDos = {
  title: "Conocimientos",
  author: "Biografia",
  pages: 134,
  isbn: "abc",
};
printInfo(bookUno);
printInfo(bookDos);
