import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CardProduct({ price, image, name }) {
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
      <span>
        { price }
      </span>
      <img
        src={ image }
        alt="card-description"
      />
      <form>
        { name }
        <button
          type="button"
          aria-label="decreaseQuantity"
          onClick={ handleDecrease }
        >
          -
        </button>
        <label htmlFor="qtty-products">
          <input
            type="number"
            aria-label="qtty-products"
            value={ prodQuantity }
          />
        </label>
        <button
          type="button"
          aria-label="increaseQuantity"
          onClick={ handleIncrease }
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
};

export default CardProduct;
