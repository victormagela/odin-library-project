class Book {
    constructor(title, author, pages, hasRead) {
        if (!new.target) {
            throw Error("You must use the new operator to call the constructor!");
        }

        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        switch (hasRead) {
            case "yes":
                this.hasRead = true;
                break;
            default:
                this.hasRead = false;
                break;
        }

        this.info = function () {
            return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead}, id: ${this.id}`;
        };
    }
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);

    myLibrary.push(newBook);

    addBookCard(newBook);
}

const modal = document.getElementById("modal-container");
const opnBtn = document.getElementById("open");
const form = document.getElementById("book-form");

const cardContainer = document.querySelector(".card-container");

opnBtn.addEventListener("click", () => {
    modal.classList.add("show");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});

form.addEventListener("submit", (e) => {
    const data = new FormData(form);

    let title = data.get("title");
    let author = data.get("author");
    let pages = data.get("pages");
    let hasRead = data.get("has-read");

    addBookToLibrary(title, author, pages, hasRead);
    for (const book of myLibrary) {
        console.log(book.info());
    }
    console.log(myLibrary.length);
    e.preventDefault();
    
    modal.classList.remove("show");
});

function addBookCard(book) {
    const titleLabel = document.createElement("span");
    titleLabel.textContent = "Title: ";
    titleLabel.classList.add("label");
    const authorLabel = document.createElement("span");
    authorLabel.textContent = "Author: ";
    authorLabel.classList.add("label");
    const pagesLabel = document.createElement("span");
    pagesLabel.textContent = "Number of Pages: ";
    pagesLabel.classList.add("label");
    const hasReadLabel = document.createElement("span");
    hasReadLabel.textContent = "Has Read: ";
    hasReadLabel.classList.add("label");

    const displayTitle = book.title;
    const displayAuthor = book.author;
    const displayPages = book.pages;
    const displayHasRead = !book.hasRead ? "No" : "Yes";

    const pTitle = document.createElement("p")
    pTitle.append(titleLabel, displayTitle)
    const pAuthor = document.createElement("p");
    pAuthor.append(authorLabel, displayAuthor);
    const pPages = document.createElement("p");
    pPages.append(pagesLabel, displayPages);
    const pHasRead = document.createElement("p");
    pHasRead.append(hasReadLabel, displayHasRead);

    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.appendChild(pTitle);
    bookCard.appendChild(pAuthor);
    bookCard.appendChild(pPages);
    bookCard.appendChild(pHasRead);

    cardContainer.appendChild(bookCard);
}