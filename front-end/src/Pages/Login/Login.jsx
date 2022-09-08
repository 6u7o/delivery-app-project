import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/request';
import { changeEmail } from '../../Redux/slicers/user.slicer';
import * as C from './styles';

const COSTUMER_HOMEPAGE = '/customer/products';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasAnError, setError] = useState(false);

  const isButtonDisabled = () => {
    const PASSWORD_LENGTH = 6;
    const regex = /^\S+@\S+\.\S+$/;
    return (
      email !== ''
        && regex.test(email)
        && password.length >= PASSWORD_LENGTH
    );
  };

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'administrator') navigate('/admin/manage');
    if (role === 'customer') navigate(COSTUMER_HOMEPAGE);
    if (role === 'seller') navigate('/seller/orders');
  }, [navigate]);

  const onClickButton = async (event) => {
    event.preventDefault();
    try {
      const loginData = await api.post('/login', { email, password });
      dispatch(changeEmail(email));
      localStorage.setItem('role', loginData.data.role);
      localStorage.setItem('token', loginData.data.token);
      localStorage.setItem('userEmail', loginData.data.email);
      localStorage.setItem('userName', loginData.data.name);
      const saveUser = {
        role: loginData.data.role,
        name: loginData.data.name,
        token: loginData.data.token,
        email: loginData.data.email,
      };
      localStorage.setItem('user', JSON.stringify(saveUser));
      if (loginData.data.role === 'administrator') navigate('/admin/manage');
      if (loginData.data.role === 'customer') navigate(COSTUMER_HOMEPAGE);
      if (loginData.data.role === 'seller') navigate('/seller/orders');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <C.Container>
      <C.Form>
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

        {hasAnError && (
          <span data-testid="common_login__element-invalid-email">
            email ou senha inválidos
          </span>)}
        <button
          className="login-button"
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
            className="register-button"
            type="button"
            aria-label="signup-button"
            data-testid="common_login__button-register"
            name="signup-button"
          >
            Ainda não tenho conta
          </button>
        </Link>
      </C.Form>
    </C.Container>
  );
}

export default Login;
