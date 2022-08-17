// Constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(title, author, pages, read);
    }
}

// Object
const myBook = new Book("Heart of Darkness,", "by Joseph Conrad,", "116 pages,", "I read it.")

// Print book info
myBook.info()