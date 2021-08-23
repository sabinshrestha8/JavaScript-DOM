var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function (book) {
    // console.log(book.textContent);
    book.textContent += ' (book title)';
});

const bookList = document.querySelector('#book-list');
// console.log(bookList.innerHTML);
// bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML</p>';
