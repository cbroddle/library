// menu icon toggle
const menuToggle = document.querySelector(".menu-icon");
// menu
const menuSidebar = document.querySelector(".menu-container");

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

const submitLink = document.querySelector(".submit-link");

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

//Submit book data to array
submitLink.addEventListener("click", function () {
    const bookTitle = document.querySelector("#booktitle");
    const bookAuthor = document.querySelector("#bookauthor");
    const bookPages = document.querySelector("#bookpages");
    const bookRead = document.querySelector("#form-yes");
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
    newBook.info();
    newBook.addBook();
    newBook.renderBooks(myLibrary);
    //remove Modal 
    modalOverlay.classList.toggle("show-modal-overlay");
    newBookFormRead.classList.toggle("show-add-form-two");
    newBookForm.classList.toggle("show-add-form");
})

let myLibrary = [];

// Constructor function
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        console.log(this.title, this.author, this.pages, this.read);
    }

    this.addBook = function () {
        myLibrary.push({
            title: this.title,
            author: this.author,
            pages: this.pages,
            read: this.read,
        })
    }
    this.renderBooks = function (books) {
        const cardsDiv = document.querySelector(".cards-container");
        cardsDiv.innerHTML = '';
        //loop through books
        books.forEach((book, i) => {
            const bookDiv = document.createElement("div");
            bookDiv.classList.add("card");
            bookDiv.dataset.index = i;
            bookDiv.innerHTML = `<div class="card-top">
            <div class="title" id="title">${book.title}</div>
            <div class="author" id="author">${book.author}</div>
            <div class="pages" id="pages">${book.pages}</div>
        </div>
        <div class="card-bottom">
            <div class="read-container">
                <input type="checkbox" id="read" class="read" ${book.read ? "checked" : ''}>
                <label for="read">Read</label>
            </div>
            <div class="trash-icon">
                <!-- Trash Icon Code -->
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
                </svg>
            </div>
        </div>`
            cardsDiv.appendChild(bookDiv);

            // Trashcan Icon - removes card
            const trashIcon = bookDiv.querySelector(".trash-icon");
            trashIcon.addEventListener("click",
            function () {
                //remove book data from myLibrary
                myLibrary.splice(i, 1);
                //remove card from UI/update DOM
                bookDiv.remove();
            })

            // read checkbox
            const readBox = bookDiv.querySelector(".read");
            readBox.addEventListener("change",
            function () {
                myLibrary[i].read = !myLibrary[i].read;
            })
        })
    }
}


