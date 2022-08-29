// menu icon toggle
const menuToggle = document.querySelector(".menu-icon");
// menu
const menuSidebar = document.querySelector(".menu-container");

// add new book button
const newBookBtn = document.querySelector(".add-button");

const newBookForm = document.querySelector(".add-form");


// menu event listener
menuToggle.addEventListener("click", function () {
    menuSidebar.classList.toggle("show-menu-container");
});

// display "new book" form
newBookBtn.addEventListener("click", function () {
    newBookForm.classList.toggle("show-add-form");
});

/*
let myLibrary = [];

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
*/