import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/request';
import * as C from './styles';
import logo from '../../images/delivery-man.jpg';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasAnError, setError] = useState(false);
  const navigate = useNavigate();

  const isButtonDisabled = () => {
    const PASSWORD_LENGTH = 6;
    const regex = /^\S+@\S+\.\S+$/;
    const NAME_LENGTH = 3;

    return (
      email !== ''
        && regex.test(email)
        && password.length >= PASSWORD_LENGTH
        && name.length >= NAME_LENGTH
    );
  };

  const registerOnClick = async (event) => {
    event.preventDefault();
    try {
      const registerData = await api.post('/register', { name, email, password });
      if (registerData) {
        localStorage.setItem('role', registerData.data.role);
        localStorage.setItem('token', registerData.data.token);
        localStorage.setItem('userEmail', registerData.data.email);
        localStorage.setItem('userName', registerData.data.name);
        const saveUser = {
          role: registerData.data.role,
          name: registerData.data.name,
          token: registerData.data.token,
          email: registerData.data.email,
        };
        localStorage.setItem('user', JSON.stringify(saveUser));
        navigate('/customer/products');
      }
    } catch (err) {
      console.log('error:', err.message);
      setError(true);
      // console.log(err);
    }
  };

  return (
    <C.Container>
      <C.Form>
        <img src={ logo } alt="logo-delivery-man" />
        <label htmlFor="name">
          <input
            type="text"
            aria-label="name"
            onChange={ ({ target }) => setName(target.value) }
            value={ name }
            data-testid="common_register__input-name"
            placeholder="seu nome"
          />
        </label>
        <label htmlFor="email">
          <input
            type="text"
            aria-label="email"
            onChange={ ({ target }) => setEmail(target.value) }
            value={ email }
            data-testid="common_register__input-email"
            placeholder="seu email"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            aria-label="password"
            onChange={ ({ target }) => setPassword(target.value) }
            value={ password }
            data-testid="common_register__input-password"
            placeholder="sua senha"
          />
        </label>

        {
          hasAnError && (
            <span data-testid="common_register__element-invalid_register">
              Nome ou e-mail já existente
            </span>
          )
        }

        <button
          className="register-button"
          type="button"
          aria-label="register-button"
          data-testid="common_register__button-register"
          name="signup-button"
          onClick={ registerOnClick }
          disabled={ !isButtonDisabled() }
        >
          CADASTRAR
        </button>
      </C.Form>
    </C.Container>
  );
}

export default Register;
