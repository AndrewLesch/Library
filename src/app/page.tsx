'use client';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';

import BookList from '@/components/BookList';
import Loader from '@/components/Loader';
import Pagination from '@/components/Pagination';
import { pageSizeOptions } from '@/constants/pageSize';
import { sortOptions } from '@/constants/sortOptions';

import { useBookData } from '../hooks/useBookData';

import './globals.css';

export default function Home() {
  const {
    currentPage,
    selectedSort,
    pageSize,
    filteredBooks,
    loading,
    setPageSize,
    setCurrentPage,
    setSelectedSort,
  } = useBookData();

  return (
    <main
      className="container-fluid mx-auto bg-body-secondary
      flex flex-col items-center pt-8 min-vh-100"
    >
      <div className="container-fluid w-75 d-flex flex-wrap align-items-center pt-2">
        <div className="d-flex justify-content-center col m-2">
          <p className="my-auto h6">Количество книг</p>
          <Dropdown className="p-2">
            <Dropdown.Toggle
              variant="secondary"
              id="pageSize-dropdown"
              className="btn"
            >
              {pageSize}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {pageSizeOptions.map((option) => (
                <Dropdown.Item key={option} onClick={() => setPageSize(option)}>
                  {option}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="col m-2 text-center">
          <Dropdown className="p-2">
            <Dropdown.Toggle
              variant="secondary"
              id="sort-dropdown"
              className="btn"
              style={{ minWidth: 150 }}
            >
              {selectedSort}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {sortOptions.map((option) => (
                <Dropdown.Item
                  key={option}
                  onClick={() => setSelectedSort(option)}
                >
                  {option}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          filteredBooks={filteredBooks}
          pageSize={pageSize}
        />

        <Link href="/book/new" className="col m-2 text-center">
          <button className="btn btn-success">Добавить книгу</button>
        </Link>
      </div>

      {loading ? (
        <Loader></Loader>
      ) : (
        <BookList
          filteredBooks={filteredBooks}
          currentPage={currentPage}
          pageSize={pageSize}
        ></BookList>
      )}
    </main>
  );
}
