'use client';
import React from 'react';

import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import NotificationToast from '@/components/Toast';

import { useLoginState } from './hooks/useLoginState';
import { useToast } from './hooks/useToast';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const { showToast, showToastMessage, hideToast, toastMessage, toastIsError } =
    useToast();

  const {
    user,
    isRegistering,
    isLoading,
    handleUserDataChange,
    toggleForm,
    handleSubmit,
  } = useLoginState(showToastMessage);

  return (
    <div
      className="container-fluid vh-100 bg-light text-light
      p-5 d-flex justify-content-center align-items-center"
    >
      <div className="container d-flex justify-content-center align-items-center">
        <form className="col-md-7 col-xl-6" onSubmit={handleSubmit}>
          <div className="bg-white text-dark p-4 rounded shadow">
            <h5>
              Пожалуйста,{' '}
              {isRegistering ? 'зарегистрируйтесь' : 'авторизируйтесь'}.
            </h5>
            <hr />
            {isLoading ? (
              <div className="text-center">
                <div className="spinner-border" role="status" />
              </div>
            ) : isRegistering ? (
              <RegisterForm user={user} onUserChange={handleUserDataChange} />
            ) : (
              <LoginForm user={user} onUserChange={handleUserDataChange} />
            )}
            <div className="mt-3 row">
              <div className="d-flex align-items-center justify-content-center">
                <p className="my-auto">
                  {isRegistering ? 'Уже есть аккаунт?' : 'Ещё нет аккаунта?'}
                </p>
                <button
                  type="button"
                  className="btn btn-link p-1"
                  onClick={toggleForm}
                >
                  {isRegistering ? 'Войти' : 'Зарегистрироваться'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <NotificationToast
        showToast={showToast}
        onClose={hideToast}
        toastIsError={toastIsError}
        toastMessage={toastMessage}
      />
    </div>
  );
}
