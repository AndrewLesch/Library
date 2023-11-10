'use client';
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import logout from '@/api/logout';
import getToken from '@/utils/workWithTokens/getToken';
import '@/app/globals.css';

export default function Header() {
  const router = useRouter();
  const [selectedTheme, setSelectedTheme] = useState('Светлая');
  const [selectedLanguage, setSelectedLanguage] = useState('Русский');

  const handleLogout = () => {
    const token = getToken();
    if (token) {
      logout(token);
      router.push('/login');
    }
  };

  return (
    <header className="bg-light py-3">
      <div className="container-fluid ">
        <div className="d-flex justify-content-between">
          <div>
            <Link href="/" className="d-none d-md-block d-sm-block">
              <FontAwesomeIcon icon={faBook} style={{ fontSize: '55px' }} />
            </Link>
          </div>
          <div className="d-flex align-items-center ml-auto">
            <div className="mt-1 mx-2">
              <FontAwesomeIcon icon={faUser} style={{ fontSize: '38px' }} />
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-primary mx-2"
            >
              Выход
            </button>
            <div className="mx-2">
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  id="theme-dropdown"
                  className="btn"
                  style={{minWidth: 100}}
                >
                  {selectedTheme}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSelectedTheme('Светлая')}>
                    Светлая
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setSelectedTheme('Темная')}>
                    Темная
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="mx-2">
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  id="language-dropdown"
                  className="btn"
                  style={{minWidth: 100}}
                >
                  {selectedLanguage}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSelectedLanguage('Русский')}>
                    Русский
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setSelectedLanguage('English')}>
                    English
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
