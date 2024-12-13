
import React, { useState, useEffect } from 'react';
import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch books from backend API
        fetch('http://localhost:8080/api/books')
            .then((response) => response.json())
            .then((data) => setBooks(data))
            .catch((error) => console.error('Error fetching books:', error));
    }, []);

    return (
        <div className="App">
            <h1>Book Management System</h1>
            <BookForm setBooks={setBooks} />
            <BookList books={books} setBooks={setBooks} />
        </div>
    );
}

export default App;
