// Read book title from query params


console.log("book-details.js loaded");
// const urlParams = new URLSearchParams(window.location.search);
// const title = urlParams.get("title");

// // Example dataset (You will replace this with your real API or array)
// const books = [
//     {
//         title: "Atomic Habits",
//         author: "James Clear",
//         category: "Non-Fiction",
//         categoryClass: "nonfiction",
//         cover: "atomic.png",
//         file: "atomic.pdf",
//         description: "A practical guide to building good habits."
//     }
// ];

// Find the book
// const book = books.find(b => b.title === title);

// Fill details
// document.getElementById("book-title").textContent = book.title;
// document.getElementById("book-cover").src = book.cover;
// document.getElementById("book-author").textContent = book.author;
// document.getElementById("book-category").textContent = book.category;
// document.getElementById("book-description").textContent = book.description;

// Download PDF file
// document.getElementById("download-btn").href = book.file;



document.addEventListener('DOMContentLoaded', () => {

    // From Api We Had To Store Data In This Format
    const books = [
        {
            title: 'Atomic Habits',
            category: 'Fiction',
            author: 'James Clear',
            cover: 'covers/atomic.jpg',
            total: 7,
            link: 'book_detail.html'
        },
        {
            title: 'The Alchemist',
            category: 'Fiction',
            author: 'Paulo Coelho',
            cover: 'covers/alchemist.jpg',
            total: 5,
            link: 'book_detail.html'
        },
         {
            title: 'The Alchemist',
            category: 'Fiction',
            author: 'Paulo Coelho',
            cover: 'covers/alchemist.jpg',
            total: 5,
            link: 'book_detail.html'
        },
         {
            title: 'The Alchemist',
            category: 'Fiction',
            author: 'Paulo Coelho',
            cover: 'covers/alchemist.jpg',
            total: 5,
            link: 'book_detail.html'
        }
        // Add more books here...
    ];

    const tbody = document.getElementById('book-body');

    books.forEach(book => {
        const row = document.createElement('tr');
        row.classList.add('book-row');

        row.innerHTML = `
            <td class="cell title">${book.title}</td>
            <td class="cell category">
                <span class="tag tag-fiction">${book.category}</span>
            </td>
            <td class="cell author">${book.author}</td>
            <td class="cell cover">
                <img src="${book.cover}" class="cover-img">
            </td>
            <td class="cell total">${book.total}</td>
            <td class="cell total">
                <a href="#" class="link-cell" onclick="handleClick('${book.title}','${book.author}','${book.total}')">Link</a>

            </td>
        `;

        tbody.appendChild(row);
    });
});
function handleClick(title,a,b) {
    // const decodedTitle = decodeURIComponent(title);
    alert("You clicked on the book: " + title+"  Author: "+a+"  Total: "+b);
};
