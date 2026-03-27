const Book = function(title, author, pages, hasRead) {
    if (!new.target) {
        throw Error("You must use the new operator to call the constructor!");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = !hasRead ? "not read yet" : "already read";

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead}`
    }
}

const modal = document.getElementById("modal-container");
const opnBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

opnBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");

    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    })
});