// menu icon toggle
const menuToggle = document.querySelector(".menu-icon");
// menu
const menuSidebar = document.querySelector(".menu-container");

// read checkbox?
// Trashcan Icon - removes card
const trashIcon = document.querySelector(".trash-icon");

// add new book button
const newBookBtn = document.querySelector(".add-button");

// display "add new" form with modal overlay
const newBookForm = document.querySelector(".add-form");
const modalOverlay = document.querySelector(".modal-overlay");

// cancel "add new book" link
const cancelLink = document.querySelector(".cancel-link");

// next page of "add book" link
const nextLink = document.querySelector(".next-link");

const prevLink = document.querySelector(".prev-link");

// show second page of form (reading question)
const newBookFormRead = document.querySelector(".add-form-two");

// menu event listener
menuToggle.addEventListener("click", function () {
    menuSidebar.classList.toggle("show-menu-container");
});


newBookBtn.addEventListener("click", function () {
    // display "new book" form
    newBookForm.classList.toggle("show-add-form");
    // display modal overlay
    modalOverlay.classList.toggle("show-modal-overlay");
});

// cancel add new book form
cancelLink.addEventListener("click", function () {
    newBookForm.classList.remove("show-add-form");
    modalOverlay.classList.remove("show-modal-overlay");
})

//show page 2 of form
nextLink.addEventListener("click", function () {
    newBookFormRead.classList.toggle("show-add-form-two");
    //modalOverlay.classList.toggle("show-modal-overlay");
})

// Go back to page 1 of form
prevLink.addEventListener("click", function () {
    newBookFormRead.classList.remove("show-add-form-two");
})

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