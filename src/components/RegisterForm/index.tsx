import React, { ChangeEvent, FC } from 'react';

import { userType } from '@/constants/emptyUser';

type RegisterFormType = {
  user: userType;
  onUserDataChange: (
    event: ChangeEvent<HTMLInputElement>,
    field: string,
  ) => void;
};

const RegisterForm: FC<RegisterFormType> = ({ user, onUserDataChange }) => {
  return (
    <div>
      <div className="mb-3 row justify-content-between">
        <label htmlFor="username" className="col-12 col-md-4">
          Имя пользователя:
        </label>
        <div className="col-12 col-md-8">
          <input
            onChange={(e) => onUserDataChange(e, 'username')}
            value={user.username}
            type="text"
            className="form-control"
            id="username"
            required
          />
        </div>
      </div>
      <div className="mb-3 row justify-content-between">
        <label htmlFor="password" className="col-12 col-md-4">
          Пароль:
        </label>
        <div className="col-12 col-md-8">
          <input
            value={user.password}
            onChange={(e) => onUserDataChange(e, 'password')}
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>
      </div>
      <div className="mb-3 row justify-content-between">
        <label htmlFor="email" className="col-12 col-md-4">
          Email:
        </label>
        <div className="col-12 col-md-8">
          <input
            value={user.email}
            onChange={(e) => onUserDataChange(e, 'email')}
            type="email"
            className="form-control"
            id="email"
            required
          />
        </div>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
