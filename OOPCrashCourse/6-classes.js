class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  // 자바스크립트의 클래스에서 prototype에 할당되지 않고 클래스 자체에 할당된 함수를 static 메소드라고 한다.
  static topBookStore() {
    return 'Kong & Bori & Momo';
  }
}

// Instantiate Obj
const book1 = new Book('Book One', 'Blair', '2022');

// console.log(book1)
// book1.revise('2050');
// console.log(book1)

// 클래스 자체에 할당되었기 때문에 클래스의 인스턴스를 통해서는 호출될 수 없으며 클래스를 통해 호출해야 한다.
console.log(Book.topBookStore());
