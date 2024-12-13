
import React, { useState } from 'react';

function BookForm({ setBooks }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { title, author };
        fetch('http://localhost:8080/api/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBook),
        })
            .then((response) => response.json())
            .then((data) => setBooks((prev) => [...prev, data]))
            .catch((error) => console.error('Error adding book:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <button type="submit">Add Book</button>
        </form>
    );
}

export default BookForm;
