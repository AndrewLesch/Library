import React from 'react';

const LoginForm = ({ user, onUserChange }: any) => {
  return (
    <div>
      <div className="mb-3 row justify-content-between">
        <label htmlFor="username" className="col-12 col-md-4">
          Имя пользователя:
        </label>
        <div className="col-12 col-md-8">
          <input
            onChange={(e) => onUserChange(e, 'username')}
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
            onChange={(e) => onUserChange(e, 'password')}
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>
      </div>
      <div className="text-center mt-4">
        <button type="submit" className="btn btn-primary">
          Войти
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
