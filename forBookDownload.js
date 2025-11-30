// Read book title from query params


console.log("book-details Download.js loaded");

document.addEventListener('DOMContentLoaded', () => {

    // From Api We Had To Store Data In This Format
    const books = [
    {
        title: 'Vijay Sankar',
        category: 'Returned on time',
        author: 'Atomic Habits',
        cover: '2025-11-01',
        total: '2025-11-30 10:30 AM',
        link: 'book_detail.html'
    },
    {
        title: 'Ananya Reddy',
        category: 'Late by 2 days',
        author: 'The Alchemist',
        cover: '2025-10-28',
        total: '2025-11-30 09:15 AM',
        link: 'book_detail.html'
    },
    {
        title: 'Rahul Kumar',
        category: 'On time',
        author: 'Deep Work',
        cover: '2025-11-02',
        total: '2025-11-30 11:00 AM',
        link: 'book_detail.html'
    },
    {
        title: 'Sneha Sharma',
        category: 'Overdue',
        author: 'The Power of Habit',
        cover: '2025-10-25',
        total: '2025-11-30 12:00 PM',
        link: 'book_detail.html'
    },
    {
        title: 'Kiran Das',
        category: 'On time',
        author: 'Think and Grow Rich',
        cover: '2025-11-05',
        total: '2025-11-30 02:00 PM',
        link: 'book_detail.html'
    },
    {
        title: 'Priya Nair',
        category: 'Returned on time',
        author: 'Sapiens',
        cover: '2025-11-03',
        total: '2025-11-30 03:30 PM',
        link: 'book_detail.html'
    },
    {
        title: 'Arjun Reddy',
        category: 'Late by 1 day',
        author: 'Educated',
        cover: '2025-11-01',
        total: '2025-11-30 04:15 PM',
        link: 'book_detail.html'
    },
    {
        title: 'Meera Iyer',
        category: 'On time',
        author: 'The Subtle Art of Not Giving a F*ck',
        cover: '2025-11-06',
        total: '2025-11-30 05:00 PM',
        link: 'book_detail.html'
    },
    {
        title: 'Sankar Pamidimarri',
        category: 'Overdue',
        author: 'Rich Dad Poor Dad',
        cover: '2025-10-30',
        total: '2025-11-30 06:00 PM',
        link: 'book_detail.html'
    },
    {
        title: 'Nagarjuna Reddy',
        category: 'Returned on time',
        author: 'The Alchemist',
        cover: '2025-11-04',
        total: '2025-11-30 07:30 PM',
        link: 'book_detail.html'
    }
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
                <a href="${book.link}" class="link-cell">Link</a>
            </td>
        `;

        tbody.appendChild(row);
    });
});
