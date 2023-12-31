import React, { useState } from 'react';

import register from '@/api/register';
import emptyUser from '@/constants/emptyUser';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalUser, setModalUser] = useState(emptyUser);
  const [isRegistering, setIsRegistering] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsRegistering(false);
    setIsOpen(false);
  };

  const handleUserDataChange = (e: any, field: string) => {
    setModalUser({ ...modalUser, [field]: e.target.value });
  };

  const handleLogin = () => {};

  const handleRegister = () => {
    register(modalUser);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (isRegistering) {
      handleRegister();
    } else {
      handleLogin();
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
      >
        Login / Registration
      </button>

      {isOpen && (
        <form
          className="fixed inset-0 flex items-center justify-center z-50"
          onSubmit={handleSubmit}
        >
          {isRegistering ? (
            <div className="bg-white p-4 rounded shadow">
              <label htmlFor="username" className="block font-semibold">
                Login:
              </label>
              <input
                required
                type="text"
                id="username"
                name="username"
                value={modalUser.username}
                onChange={(e) => handleUserDataChange(e, 'username')}
                className="w-full border p-2 rounded mt-2"
              />
              <br />
              <label htmlFor="password" className="block font-semibold">
                Password:
              </label>
              <input
                required
                type="password"
                id="password"
                name="password"
                value={modalUser.password}
                onChange={(e) => handleUserDataChange(e, 'password')}
                className="w-full border p-2 rounded mt-2"
              />
              <br />
              <label htmlFor="email" className="block font-semibold">
                Email:
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={modalUser.email}
                onChange={(e) => handleUserDataChange(e, 'email')}
                className="w-full border p-2 rounded mt-2"
              />
              <div className="mt-4 flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                >
                  Registration
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white p-4 rounded shadow">
              <label htmlFor="username" className="block font-semibold">
                Login:
              </label>
              <input
                required
                type="text"
                id="username"
                name="username"
                value={modalUser.username}
                onChange={(e) => handleUserDataChange(e, 'username')}
                className="w-full border p-2 rounded mt-2"
              />
              <br />
              <label htmlFor="password" className="block font-semibold">
                Password:
              </label>
              <input
                required
                type="password"
                id="password"
                name="password"
                value={modalUser.password}
                onChange={(e) => handleUserDataChange(e, 'password')}
                className="w-full border p-2 rounded mt-2"
              />
              <br />
              <div className="mt-4 flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>

              <p className="mt-4 text-center">
                No account?{' '}
                <button
                  type="button"
                  onClick={() => setIsRegistering(true)}
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Registration
                </button>
              </p>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
