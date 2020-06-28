class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}


// Magazine sunClass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year); // 받아오기
    this.month = month;
  }
}

const mag1 = new Magazine('Mag One', 'blair', '1999', 'Jun');

console.log(mag1.getSummary());