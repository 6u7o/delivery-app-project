import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CardProduct({ price, image, name, id }) {
  const [prodQuantity, setProdQuantity] = useState(0);

  const handleIncrease = () => {
    setProdQuantity(prodQuantity + 1);
  };

  const handleDecrease = () => {
    if (prodQuantity === 0) {
      return;
    }
    setProdQuantity(prodQuantity - 1);
  };

  return (
    <div>
      <span
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { price }
      </span>
      <img
        src={ image }
        alt="card-description"
        data-testid={ `customer_products__element-card-title-${id}` }
      />
      <form>
        { name }
        <button
          type="button"
          aria-label="decreaseQuantity"
          onClick={ handleDecrease }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <label htmlFor="qtty-products">
          <input
            type="number"
            aria-label="qtty-products"
            value={ prodQuantity }
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />
        </label>
        <button
          type="button"
          aria-label="increaseQuantity"
          onClick={ handleIncrease }
          data-testid={ `customer_products__button-card-add-item-${id} ` }
        >
          +
        </button>
      </form>
    </div>
  );
}

CardProduct.propTypes = {
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardProduct;
