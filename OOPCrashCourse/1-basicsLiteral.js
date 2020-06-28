
// Obj Literal
const book1 = {
  title : "Book One",
  author: "John Doe",
  year: "2013",
  getSummery: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

const book2 = {
  title : "Book Two",
  author: "John Doe",
  year: "2020",
  getSummery: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

console.log(book1.getSummery())
console.log(Object.values(book2))
console.log(Object.keys(book2))