import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <form>
        <label htmlFor="email">
          <input
            type="text"
            aria-label="email"
            onChange={ ({ target }) => setEmail(target.value) }
            value={ email }
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            aria-label="password"
            onChange={ ({ target }) => setPassword(target.value) }
            value={ password }
          />
        </label>
        <button
          type="submit"
          aria-label="login-button"
          // onClick={}
        >
          LOGIN
        </button>
        <button
          type="submit"
          aria-label="signup-button"
          // onClick={}
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}

export default Login;
