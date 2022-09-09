import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Container from './styles';

function Header({ array, userName }) {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="header-buttons">
        {
          array.map((button) => (
            <button
              key={ button.label }
              type="button"
              onClick={ () => navigate(button.route) }
              aria-label={ button.aria }
              name={ button.name }
              data-testid={ button.dataTestId }
            >
              { button.label }
            </button>
          ))
        }
      </div>
      <div className="user-logout">
        <h3
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {userName}
        </h3>
        <button
          type="button"
          aria-label="logout-button"
          onClick={ () => { navigate('/login'); localStorage.clear(); } }
          data-testid="customer_products__element-navbar-link-logout"
          name="logout-button"
        >
          SAIR
        </button>
      </div>
    </Container>
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
  userName: PropTypes.string.isRequired,
};

export default Header;
