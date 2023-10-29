'use client'
import { useState } from "react"
import '@/app/globals.css'
import getToken from "@/utils/workWithTokens/getToken";
import addBook from "@/api/addBook";

const empyBook = {
  name: 'Введите имя книги',
  author: 'Авторчик',
  type: 'read',
}

export default function BookForm() {
  const [book, setBook] = useState(empyBook);

  const handleFieldChange = (e: any, field: string) => {
    setBook({ ...book, [field]: e.target.value });
  };

  const handleAddBook = () => {
    event?.preventDefault()
    const token = getToken();
    addBook(token, book)
  }

  return (
    <form className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Add book</h2>
      <input
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        placeholder="Enter book name"
        value={book.name}
        onChange={(e) => handleFieldChange(e, 'name')}
      />
      <input
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        placeholder="Enter book author"
        value={book.author}
        onChange={(e) => handleFieldChange(e, 'author')}
      />
      <div className="mb-2">
        Enter book type:
        <select
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => handleFieldChange(e, 'type')}
          value={book.type}
        >
          <option value="read">Read</option>
          <option value="readable">Readable</option>
          <option value="awaiting">Awaiting</option>
        </select>
      </div>

      {book.type === "read" ? (
        <div>
         
        </div>
      ) : book.type === "readable" ? (
        <div>
        
        </div>
      ) : book.type === "awaiting" ? (
        <div>
          
        </div>
      ) : null}
      <button onClick={handleAddBook}>Add book</button>
    </form>
  );
}