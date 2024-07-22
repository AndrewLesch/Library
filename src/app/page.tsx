'use client';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';

import BookList from '@/components/BookList';
import { Header } from '@/components/Header';
import Loader from '@/components/Loader';
import { NavigationPanel } from '@/components/NavigationPanel';
import Pagination from '@/components/Pagination';
import { pageSizeOptions } from '@/constants/pageSize';
import { sortOptions } from '@/constants/sortOptions';

import { useBookData } from '../hooks/useBookData';

import './style.css';

export default function Home() {
  const {
    currentPage,
    pageSize,
    filteredBooks,
    loading,
    selectedBooksFilter,
    selectBooksFilter,
    setPageSize,
    setCurrentPage,
  } = useBookData();

  return (
    <main>
      <div className="home-container">
        <NavigationPanel></NavigationPanel>
        <div>
          <Header pageTitle="Книги"></Header>
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
                    <Dropdown.Item
                      key={option}
                      onClick={() => setPageSize(option)}
                    >
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
                  {selectedBooksFilter}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {sortOptions.map((option) => (
                    <Dropdown.Item
                      key={option}
                      onClick={() => selectBooksFilter(option)}
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
              filteredBooksLength={filteredBooks.length || 1}
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
        </div>
      </div>
    </main>
  );
}
