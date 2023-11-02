'use client'
import { useState } from "react"
import '@/app/globals.css'
import getToken from "@/utils/workWithTokens/getToken";
import addBook from "@/api/addBook";

const empyBook = {
  name: 'Введите имя книги',
  author: 'Авторчик',
  type: 'read',
  genre: '',
  language: '',
  rating: 0,
  pages: 0,
  startDate: '', 
  endDate: '',
  review: '',
  awaitingDate: '',
  img: ''
}

export default function BookForm() {
  const [book, setBook] = useState(empyBook);

  const handleFieldChange = (e: any, field: string) => {
    setBook({ ...book, [field]: e.target.value });
  };


  const handleFileChange = (e: any) => {
    setBook({...book, img: e.target.files[0]})
  }

  const handleAddBook = () => {
    event?.preventDefault()
    const token = getToken();
    console.log(book)
    addBook(token, book)
  }

  return (
    <form className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Add book</h2>
      <input
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        placeholder="Enter book name"
        value={book.name}
        required
        onChange={(e) => handleFieldChange(e, 'name')}
      />
      <input
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        placeholder="Enter book author"
        value={book.author}
        required
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
      <div className="mb-2">
        Enter book genre:
        <select
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => handleFieldChange(e, 'genre')}
          value={book.genre}
        >
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non Fiction</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
          <option value="thriller">Thriller</option>
          <option value="biography">Biography</option>
        </select>
      </div>

      <div className="mb-2">
        Enter book language:
        <select
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => handleFieldChange(e, 'language')}
          value={book.language}
        >
          <option value="russian">Russian</option>
          <option value="english">English</option>
        </select>
      </div>
      <input type="file" onChange={(e) => handleFileChange(e)}></input>
      
      {book.type === "read" ? (
        <div>
          Enter book rating:
         <input
          required
          type="number"
          max={10}
          placeholder="Оценка книги"
          value={book.rating}
          onChange={(e) => handleFieldChange(e, 'rating')}
          >
          </input>
          Enter book pages:
          <input
          required
          type="number"
          placeholder="Количество страниц"
          value={book.pages}
          onChange={(e) => handleFieldChange(e, 'pages')}
          >
          </input>
          Enter book start date:
          <input
          required
            type="date"
            value={book.startDate}
            onChange={(e) => handleFieldChange(e, 'startDate')}
            ></input>
            Enter book end Date:
          <input
          required
            type="date"
            value={book.endDate}
            onChange={(e) => handleFieldChange(e, 'endDate')}
            ></input> 
            Enter book review:
            <input
            type="text"
            value={book.review}
            onChange={(e) => handleFieldChange(e, 'review')}
            ></input> 
        </div>
      ) : book.type === "readable" ? (
        <div>
        
        </div>
      ) : book.type === "awaiting" ? (
        <div>
            <input
            type="date"
            value={book.awaitingDate}
            onChange={(e) => handleFieldChange(e, 'awaitingDate')}
            ></input> 
        </div>
      ) : null}
      <button onClick={handleAddBook}>Add book</button>
    </form>
  );
}