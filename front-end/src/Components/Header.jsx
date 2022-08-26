import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Header.button';

function Header({ array }) {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        {
          array.map((button) => (
            <Button
              key={ button.label }
              label={ button.label }
              handleClick={ () => navigate(button.route) }
              aria={ button.aria }
              name={ button.name }
            />
          ))
        }
        <h3> PESSOA USUÁRIA </h3>
        <button
          type="button"
          aria-label="logout-button"
          onClick={ () => navigate('/login') }
          data-testid="customer_products__element-navbar-link-logout"
          name="logout-button"
        >
          SAIR
        </button>
      </div>
    </div>
  );
}

export default Header;
