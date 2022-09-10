import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  sendToLocalStorage,
  getFromLocalStorage,
} from '../../services/handleLocalStorage';
import * as C from './styles';

function CardProduct({ price, image, name, id, handleTotalPrice }) {
  const [prodQuantity, setProdQuantity] = useState(0);

  useEffect(() => {
    const getProdQuantity = async () => {
      const storageData = getFromLocalStorage('carrinho');
      const itemData = storageData.find(({ id: idProd }) => idProd === id);
      if (itemData) setProdQuantity(itemData.quantity);
    };
    getProdQuantity();
  }, [id]);

  const handleIncrease = () => {
    setProdQuantity(prodQuantity + 1);

    const storageData = getFromLocalStorage('carrinho');

    const productExists = storageData?.find((el) => el.id === id);
    if (productExists) {
      productExists.quantity += 1;
      productExists.totalPrice = (
        Number(price) * productExists.quantity
      ).toFixed(2);
      const newStorageData = storageData.filter((item) => item.id !== id);
      sendToLocalStorage('carrinho', [...newStorageData, { ...productExists }]);
    } else {
      const newStorageData = storageData.filter((item) => item.id !== id);
      sendToLocalStorage('carrinho', [
        ...newStorageData,
        { id, unitPrice: price, quantity: 1, product: name, totalPrice: price },
      ]);
    }
    handleTotalPrice();
  };

  const handleDecrease = () => {
    if (prodQuantity === 0) {
      return;
    }

    const storageData = getFromLocalStorage('carrinho');

    const productExists = storageData?.find((el) => el.id === id);

    if (productExists && productExists.quantity > 0) {
      setProdQuantity(prodQuantity - 1);
      productExists.quantity -= 1;
      productExists.totalPrice = (
        Number(price) * productExists.quantity
      ).toFixed(2);
      const newStorageData = storageData.filter((item) => item.id !== id);
      sendToLocalStorage('carrinho', [...newStorageData, { ...productExists }]);
    }

    if (productExists.quantity === 0) {
      const newStorageData = storageData.filter((item) => item.id !== id);
      sendToLocalStorage('carrinho', [...newStorageData]);
    }
    handleTotalPrice();
  };

  const handleInputQuantity = ({ target }) => {
    setProdQuantity(target.value);

    const storageData = getFromLocalStorage('carrinho');
    const productExists = storageData?.find((el) => el.id === id);

    if (productExists) {
      productExists.quantity = target.value;
      productExists.totalPrice = (
        Number(price) * productExists.quantity
      ).toFixed(2);
      const newStorageData = storageData.filter((item) => item.id !== id);
      sendToLocalStorage('carrinho', [...newStorageData, { ...productExists }]);
    } else {
      const newStorageData = storageData.filter((item) => item.id !== id);
      sendToLocalStorage('carrinho', [
        ...newStorageData,
        {
          id,
          unitPrice: price,
          quantity: target.value,
          product: name,
          totalPrice: price * target.value,
        },
      ]);
    }

    if (target.value === '0') {
      const newStorageData = storageData.filter((item) => item.id !== id);
      sendToLocalStorage('carrinho', [...newStorageData]);
    }
    handleTotalPrice();
  };

  return (
    <C.Card>
      <h5 data-testid={ `customer_products__element-card-title-${id}` }>
        {name}
      </h5>
      <h4 data-testid={ `customer_products__element-card-price-${id}` }>
        R$:
        {' '}
        {String(price).replace('.', ',')}
      </h4>
      <img
        src={ image }
        alt="card-description"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <C.Form>
        <button
          type="button"
          aria-label="decreaseQuantity"
          onClick={ handleDecrease }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          name={ id }
        >
          -
        </button>
        <label htmlFor="qtty-products">
          <input
            type="number"
            aria-label="qtty-products"
            value={ prodQuantity }
            data-testid={ `customer_products__input-card-quantity-${id}` }
            onChange={ handleInputQuantity }
            min="0"
          />
        </label>
        <button
          type="button"
          aria-label="increaseQuantity"
          onClick={ handleIncrease }
          data-testid={ `customer_products__button-card-add-item-${id}` }
          name={ id }
        >
          +
        </button>
      </C.Form>
    </C.Card>
  );
}

CardProduct.propTypes = {
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleTotalPrice: PropTypes.func.isRequired,
};

export default CardProduct;
