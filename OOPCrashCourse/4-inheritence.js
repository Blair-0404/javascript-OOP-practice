// Book Constructor
function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummery
Book.prototype.getSummery = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};


// Magazine Magazine
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype)

// Instantiate Magazine Obj
const mag1 = new Magazine('Mag One', 'YJ', '2018', 'Jan');


// console.log(mag1)
console.log(Magazine.prototype)

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine
console.log(Magazine.prototype)
