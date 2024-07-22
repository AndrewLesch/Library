'use client';
import React, { FC } from 'react';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

type HeaderType = {
  pageTitle: string;
};

export const Header: FC<HeaderType> = ({ pageTitle }) => {
  return (
    <header className="header">
      <div className="header-container">
        <h3 className="header-title">{pageTitle}</h3>
        <div className="header-buttons">
          <input
            className="header-search-input"
            placeholder="Поиск среди ваших книг"
          ></input>
          <FontAwesomeIcon icon={faCircleUser} className="header-no-img-user" />
        </div>
      </div>
    </header>
  );
};
