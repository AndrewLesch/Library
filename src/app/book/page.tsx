'use client'
import { useState } from "react"
import '@/app/globals.css'

export default function Book() {
  const [book, setBook] = useState({ type: "read" });

  const handleTypeChange = (e: any) => {
    setBook({ type: e.target.value });
  };

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Добавить книгу</h2>
      <input
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        placeholder="Введите название книги"
      />
      <input
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        placeholder="Введите автора книги"
      />
      <div className="mb-2">
        Введите тип книги:
        <select
          className="w-full p-2 border border-gray-300 rounded"
          onChange={handleTypeChange}
          value={book.type}
        >
          <option value="read">Read</option>
          <option value="readable">Readable</option>
          <option value="awaiting">Awaiting</option>
        </select>
      </div>

      {book.type === "read" ? (
        <div>
          <input
            className="w-full p-2 mb-2 border border-gray-300 rounded"
            placeholder="Введите количество страниц"
          />
          <input
            className="w-full p-2 mb-2 border border-gray-300 rounded"
            placeholder="Введите вашу оценку"
          />
          <div className="mb-2">
            Введите дату начала и дату конца прочтения книги:
            <input
              className="w-1/2 p-2 mb-2 border border-gray-300 rounded"
              placeholder="Дата начала"
            />
            <input
              className="w-1/2 p-2 mb-2 border border-gray-300 rounded"
              placeholder="Дата конца"
            />
          </div>
          <textarea
            className="w-full p-2 mb-2 border border-gray-300 rounded"
            placeholder="Введите свой отзыв"
          ></textarea>
        </div>
      ) : book.type === "readable" ? (
        <div>
          <input
            className="w-full p-2 mb-2 border border-gray-300 rounded"
            placeholder="Прогресс чтения (например, страницы или главы)"
          />
        </div>
      ) : book.type === "awaiting" ? (
        <div>
          <input
            className="w-full p-2 mb-2 border border-gray-300 rounded"
            placeholder="Дата ожидания (например, дата выпуска книги)"
          />
        </div>
      ) : null}
    </div>
  );
}