function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {}

UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    
    const columnTitle = this.createColumnElement('text', book.title);
    const columnAuthor = this.createColumnElement('text', book.author);
    const columnISBN = this.createColumnElement('text', book.isbn);
    const deleteLink = this.createColumnElement('link');

    row.appendChild(columnTitle);
    row.appendChild(columnAuthor);
    row.appendChild(columnISBN);
    row.appendChild(deleteLink);
    list.appendChild(row);
}

UI.prototype.createColumnElement = function(type, text) {
    const column = document.createElement('td');
    if (type == 'text') {
        column.textContent = text
    } else {
        const deleteLink = document.createElement('a');
        deleteLink.setAttribute('class', 'delete');
        deleteLink.textContent = 'X';
        
        column.appendChild(deleteLink);
    }

    return column
}

UI.prototype.clearField = function() {
    const title = document.getElementById('title').value = '';
    const author = document.getElementById('author').value = '';
    const isbn = document.getElementById('isbn').value = '';
}


document.getElementById('book-form').addEventListener('submit', function(e) {
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);

    const ui = new UI();
    ui.addBookToList(book);
    ui.clearField();

    e.preventDefault();
})