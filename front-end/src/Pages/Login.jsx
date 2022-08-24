import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeEmail } from '../Redux/slicers/user.slicer';

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasAnError, setError] = useState('');

  const isButtonDisabled = () => {
    const PASSWORD_LENGTH = 6;
    const regex = /^\S+@\S+\.\S+$/;
    return (
      email !== ''
        && regex.test(email)
        && password.length >= PASSWORD_LENGTH
    );
  };

  const onClickButton = (event) => {
    event.preventDefault();
    
    const loginData = axios.post('./localhost:3001', { email, password });
    if (loginData.error) 
    dispatch(changeEmail(email));
  };

  return (
    <div>
      <form>
        <label htmlFor="email">
          <input
            type="text"
            aria-label="email"
            onChange={ ({ target }) => setEmail(target.value) }
            value={ email }
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            aria-label="password"
            onChange={ ({ target }) => setPassword(target.value) }
            value={ password }
            data-testid="common_login__input-password"
          />
        </label>

          <span class={ hasAnError }>
            email inválido
          </span>
        <button
          type="submit"
          aria-label="login-button"
          disabled={ !isButtonDisabled() }
          onClick={ onClickButton }
          data-testid="common_login__button-login"
          name="login-button"
        >
          LOGIN
        </button>
        <Link to="/register">
          <button
            type="button"
            aria-label="signup-button"
            data-testid="common_login__button-register"
            name="signup-button"
          >
            Ainda não tenho conta
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;

// Hello World
