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
document.addEventListener("DOMContentLoaded", () => {

    // === SAMPLE DATA (Replace this later with real API data) ===
    const uploadedBooks = [
        { title: "Java Basics", category: "Programming", uploaded: "12 Sep 2024", status: "Approved" },
        { title: "Spring Boot Guide", category: "Backend", uploaded: "22 Oct 2024", status: "Pending" }
    ];

    const borrowedBooks = [
        { title: "DSA Handbook", issued: "01 Dec 2024", return: "10 Dec 2024", status: "Pending" },
        { title: "Clean Code", issued: "20 Nov 2024", return: "02 Dec 2024", status: "Returned" }
    ];
 const pendingPayments = [
    {
        book: "Atomic Habits",
        amount: "₹120",
        date: "10 Dec 2024",
        status: "Pending"
    },
    {
        book: "Java Complete Reference",
        amount: "₹200",
        date: "12 Dec 2024",
        status: "Pending"
    },
    {
        book: "HTML & CSS Guide",
        amount: "₹150",
        date: "15 Dec 2024",
        status: "Pending"
    }
];
const approvedPayments = [
    {
        book: "Clean Code",
        amount: "₹250",
        date: "01 Dec 2024",
        status: "Approved"
    },
    {
        book: "Spring Boot Mastery",
        amount: "₹300",
        date: "05 Dec 2024",
        status: "Approved"
    },
    {
        book: "JavaScript Essentials",
        amount: "₹180",
        date: "08 Dec 2024",
        status: "Approved"
    }
];


    // ===== UPLOADED BOOKS TABLE FILLING =====
    const uploadBody = document.getElementById("uploadedBooksTable");

    uploadedBooks.forEach(book => {
        uploadBody.innerHTML += `
            <tr>
                <td>${book.title}</td>
                <td>${book.category}</td>
                <td>${book.uploaded}</td>
                <td>${book.status}</td>
            </tr>
        `;
    });

    // ===== BORROWED BOOKS TABLE FILLING =====
    const borrowBody = document.getElementById("borrowedBooksTable");

    borrowedBooks.forEach(book => {
        borrowBody.innerHTML += `
            <tr>
                <td>${book.title}</td>
                <td>${book.issued}</td>
                <td>${book.return}</td>
                <td>${book.status}</td>
            </tr>
        `;
    });
    pendingPayments.forEach(p => {
    document.getElementById("pendingPayments").innerHTML += `
        <tr>
            <td>${p.book}</td>
            <td>${p.amount}</td>
            <td>${p.date}</td>
            <td>${p.status}</td>
        </tr>
    `;
});
const approvedBody = document.getElementById("approvedPayments");

approvedPayments.forEach(pay => {
    approvedBody.innerHTML += `
        <tr>
            <td>${pay.book}</td>
            <td>${pay.amount}</td>
            <td>${pay.date}</td>
            <td>${pay.status}</td>
        </tr>
    `;
});


});



document.addEventListener("DOMContentLoaded", () => {

    // === DYNAMIC VALUES YOU WILL REPLACE ===
    const totalUsers = 120;        // replace
    const totalBooks = 340;        // replace
    const totalBorrowers = 85;     // replace
    const yearlySales = 54000;     // replace

    const ctx = document.getElementById('overviewChart').getContext('2d');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Users", "Books", "Borrowers", "Sales (This Year)"],
            datasets: [{
                data: [totalUsers, totalBooks, totalBorrowers, yearlySales],
                backgroundColor: [
                    "#4e73df",  
                    "#1cc88a",
                    "#36b9cc",
                    "#f6c23e"
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "bottom"
                }
            }
        }
    });

});
