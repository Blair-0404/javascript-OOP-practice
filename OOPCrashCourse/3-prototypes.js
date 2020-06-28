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

// getAge
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// Revise / Change Year
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
}

// Instatiate an Obj
const book1 = new Book('Book One', 'blair', '2019');
const book2 = new Book('Book Two', 'youngJi', '2018');


console.log(book2)
book2.revise('2020')
console.log(book2)
