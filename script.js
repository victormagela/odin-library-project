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

const Hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 250, false);

console.log(Hobbit.info());