// Object
const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge : function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
};

// Create Obj
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'BLAIR';
// book1.year = '2023';

const book1 = Object.create(bookProtos, {
  title: {value: 'Book One'},
  author: {value: 'BLAIR'},
  year: {value: '2025'}
}); // 이렇게도 만들 수 있다.

console.log(book1)