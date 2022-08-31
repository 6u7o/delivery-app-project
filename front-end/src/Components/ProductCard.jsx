import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { sendToLocalStorage, getFromLocalStorage } from '../services/handleLocalStorage';

function CardProduct({ price, image, name, id }) {
  const [prodQuantity, setProdQuantity] = useState(0);

  const handleIncrease = () => {
    setProdQuantity(prodQuantity + 1);

    const storageData = getFromLocalStorage('carrinho');
    // console.log(storageData);

    const productExists = storageData?.find((el) => el.id === id);
    if (productExists) {
      productExists.quantity += 1;
      productExists.totalPrice = (Number(price) * productExists.quantity).toFixed(2);
      const newStorageData = storageData.filter((item) => item.id !== id);
      sendToLocalStorage('carrinho', [...newStorageData, { ...productExists }]);
    } else {
      const newStorageData = storageData.filter((item) => item.id !== id);
      sendToLocalStorage('carrinho', [...newStorageData,
        { id, unitPrice: price, quantity: 1, product: name, totalPrice: price }]);
    }
  };

  const handleDecrease = () => {
    if (prodQuantity === 0) {
      return;
    }

    const storageData = getFromLocalStorage('carrinho');
    // console.log(storageData);

    const productExists = storageData?.find((el) => el.id === id);

    if (productExists && productExists.quantity > 0) {
      setProdQuantity(prodQuantity - 1);
      productExists.quantity -= 1;
      productExists.totalPrice = (Number(price) * productExists.quantity).toFixed(2);
      const newStorageData = storageData.filter((item) => item.id !== id);
      sendToLocalStorage('carrinho', [...newStorageData, { ...productExists }]);
    }

    if (productExists.quantity === 0) {
      const newStorageData = storageData.filter((item) => item.id !== id);
      sendToLocalStorage('carrinho', [...newStorageData]);
    }
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
          name={ id }
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
          name={ id }
        >
          +
        </button>
      </form>
    </div>
  );
}

CardProduct.propTypes = {
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardProduct;
