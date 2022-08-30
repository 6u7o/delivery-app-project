import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import Button from './Header.button';

function Header({ array }) {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        {
          array.map((button) => (
            <button
              key={ button.label }
              type="button"
              onClick={ () => navigate(button.route) }
              aria-label={ button.aria }
              name={ button.name }
            >
              { button.label }
            </button>
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

Header.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
      aria: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Header;
