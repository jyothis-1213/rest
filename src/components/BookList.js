
import React from 'react';

function BookList({ books, setBooks }) {
    const handleDelete = (id) => {
        fetch(`http://localhost:8080/api/books/${id}`, {
            method: 'DELETE',
        })
            .then(() => setBooks((prev) => prev.filter((book) => book.id !== id)))
            .catch((error) => console.error('Error deleting book:', error));
    };

    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    {book.title} by {book.author}
                    <button onClick={() => handleDelete(book.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default BookList;
