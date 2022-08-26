import React, { useState } from 'react';
import api from '../services/request';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasAnError, setError] = useState(false);

  const isButtonDisabled = () => {
    const PASSWORD_LENGTH = 6;
    const regex = /^\S+@\S+\.\S+$/;
    const NAME_LENGTH = 12;

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
      await api.post('/register', { name, email, password });
    } catch (err) {
      setError(true);
      // console.log(err);
    }
  };

  return (
    <>
      <h1> Cadastro </h1>
      <div>
        <form>
          <label htmlFor="name">
            <input
              type="text"
              aria-label="name"
              onChange={ ({ target }) => setName(target.value) }
              value={ name }
              data-testid="common_register__input-name"
              placeholder="Seu nome"
            />
          </label>
          <label htmlFor="email">
            <input
              type="text"
              aria-label="email"
              onChange={ ({ target }) => setEmail(target.value) }
              value={ email }
              data-testid="common_register__input-email"
              placeholder="seu-email@site.com.br"
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              aria-label="password"
              onChange={ ({ target }) => setPassword(target.value) }
              value={ password }
              data-testid="common_register__input-password"
              placeholder="**********"
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
            type="button"
            aria-label="register-button"
            data-testid="common_register__button-register"
            name="signup-button"
            onClick={ registerOnClick }
            disabled={ !isButtonDisabled() }
          >
            CADASTRAR
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
