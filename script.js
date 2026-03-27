const Book = function(title, author, pages, hasRead) {
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

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead}, id: ${this.id}`;
    }
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);

    myLibrary.push(newBook);
}

const modal = document.getElementById("modal-container");
const opnBtn = document.getElementById("open");
const form = document.getElementById("book-form");

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