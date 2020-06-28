// Constructor
function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummery
Book.prototype.getSummery = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Instatiate an Obj
const book1 = new Book('Book One', 'blair', '2020');
const book2 = new Book('Book Two', 'youngJi', '2019');


console.dir(book2)