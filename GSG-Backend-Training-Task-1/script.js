// 1. Object Literal
const literalBookObject = {
  title: "home alone",
  author: "motaz",
  isRead: false,

  toggleReadStatus () {
    this.isRead = !this.isRead;
  },

  describe () {
    return `"${this.title}" By ${this.author} [${
        this.isRead ? "Read" : "Unread"
      }]`;
  }
}

console.log(literalBookObject.describe());
literalBookObject.toggleReadStatus();
console.log(literalBookObject.describe());


// 2. FACTORY FUNCTION
function createBookObject(title, author) {
  return {
    title: title,
    author: author,
    isRead: false,

    toggleReadStatus() {
      this.isRead = !this.isRead;
    },

    describe() {
      return `"${this.title}" By ${this.author} [${
        this.isRead ? "Read" : "Unread"
      }]`;
    },
  };
}

let factoryBookObject = createBookObject("home alone", "motaz");
console.log(factoryBookObject.describe());
factoryBookObject.toggleReadStatus();
console.log(factoryBookObject.describe());

// 3. CONSTRUCTOR FUNCTION
function constructorBook(title, author) {
  this.title = title;
  this.author = author;
  this.isRead = false;
}

constructorBook.prototype.toggleReadStatus = function () {
  this.isRead = !this.isRead;
};

constructorBook.prototype.describe = function () {
  return `"${this.title}" By ${this.author} [${
    this.isRead ? "Read" : "Unread"
  }]`;
};

let constructorBookObject = new constructorBook("home alone", "motaz");
console.log(constructorBookObject.describe());
constructorBookObject.toggleReadStatus();
console.log(constructorBookObject.describe());

// 4. CLASS
class classBook {
  constructor (title, author) {
    this.title = title;
    this.author = author;
    this.isRead = false;
  }

  toggleReadStatus () {
    this.isRead = !this.isRead;
  }

  describe () {
    return `"${ this.title }" By ${ this.author } [${ this.isRead ? "Read" : "Unread"
      }]`;
  }
}

let classBookObject = new classBook("home alone", "motaz");
console.log(classBookObject.describe());
classBookObject.toggleReadStatus();
console.log(classBookObject.describe());