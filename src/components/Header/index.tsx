import React, { useState, useEffect } from "react";
import Link from "next/link";
import '@/app/globals.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAdjust, faLanguage, faBook } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";

import getToken from "@/utils/workWithTokens/getToken";
import emptyUser from "@/constants/emptyUser";
import getUser from "@/api/getUser";
import logout from "@/api/logout";

export default function Header() {
  const [user, setUser] = useState(emptyUser)

  const token = getToken();
  
  useEffect(() => {
    if (token) {
      getUser(token, setUser)
    }
  }, []);

  const handleLogout = () => {
    if (token) {
      logout(token, setUser)
    }
  }
  
  return (
    <header className="container mx-auto justify-between flex items-center px-6 py-15 h-32 bg-yellow-100 rounded-lg">
      <div className="w-1/4 flex items-center">
        <Link href="/" className="mx-auto">
          <FontAwesomeIcon icon={faBook} className="text-sm w-20 h-20" />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-2 md:gap-8 w-1/4">
        <Link className="text-xl" href="/readable">
          Readable
        </Link>
        <Link className="text-xl" href="/read">
          Read
        </Link>
        <Link className="text-xl" href="/waiting">
          Waiting
        </Link>
      </div>
      <div className="flex items-center justify-center gap-2 md:gap-8 w-1/4">
        {user.username ? (
          <>
            <FontAwesomeIcon icon={faUser} className="text-sm w-8 h-8" />
            {user.username}
            <button onClick={handleLogout}>Log out</button>
          </>
        ) : (
          <Modal setUser={setUser}/>
        )}
        <FontAwesomeIcon icon={faAdjust} className="text-sm w-8 h-8" />
        <FontAwesomeIcon icon={faLanguage} className="text-sm w-12 h-12" />
      </div>
    </header>
  );
}