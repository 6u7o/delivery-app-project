import React, { useState } from 'react';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link, useNavigate /* useEffect */ } from 'react-router-dom';
import api from '../services/request';
import { changeEmail } from '../Redux/slicers/user.slicer';

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

  /*   useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const name = localStorage.getItem('userName');
    const email =
  }, []); */

  const onClickButton = async (event) => {
    event.preventDefault();
    try {
      const loginData = await api.post('/login', { email, password });
      if (loginData.error) return setError(true);
      console.log(loginData);
      dispatch(changeEmail(email));
      localStorage.setItem('role', loginData.data.role);
      localStorage.setItem('token', loginData.data.token);
      localStorage.setItem('userEmail', loginData.data.email);
      localStorage.setItem('userName', loginData.data.name);
      // *** tratar o erro de forma diferente. Quando os requests tem retorno com status de erro o programa está crashando. Buscar uma opção do axios ou react que evite isso (se existir);
      // *** Apesar do problema acima, os retornos da api não estão segundo o combinado ainda e isso deve ser refatorado o quanto antes;
      navigate('/register');
    } catch (err) {
      console.log(err.message);
    }
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

        {hasAnError && (
          <span className={ hasAnError } style>
            email ou senha inválidos
          </span>)}
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
