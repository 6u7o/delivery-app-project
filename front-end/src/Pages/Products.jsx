import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';
import api from '../services/request';
import CardProduct from '../Components/ProductCard';

function Products() {
  const [productsList, setProductsList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const handleTotalPrice = () => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    setCartItems(cart || []);
  };

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const { data } = await api.get('/customer/products');
        setProductsList(data.data);
      } catch (err) {
        localStorage.clear();
        navigate('/customer/checkout');
      }
    };
    getProductsData();
    handleTotalPrice();
  }, [navigate]);

  return (
    <div>
      <Header
        array={ [{
          label: 'PRODUTOS',
          route: '/customer/products',
          aria: 'customer-products-button',
          name: 'customer-products-button',
          dataTestId: 'customer_products__element-navbar-link-products',
        },
        {
          label: 'MEUS PEDIDOS',
          route: '/customer/orders',
          aria: 'customer-orders-button',
          name: 'customer-orders-button',
          dataTestId: 'customer_products__element-navbar-link-orders',
        }] }
        userName={ localStorage.getItem('userName') }
      />
      <h1> PRODUCTS </h1>
      { productsList.map((product) => (
        <CardProduct
          key={ product.name }
          price={ product.price }
          image={ product.urlImage }
          name={ product.name }
          id={ product.id }
          handleTotalPrice={ handleTotalPrice }
        />
      )) }
      <div>
        <button
          type="button"
          onClick={ () => navigate('/customer/checkout') }
          disabled={
            !(cartItems.reduce((acc, { totalPrice }) => acc + parseFloat(totalPrice), 0))
          }
          data-testid="customer_products__button-cart"
        >
          <span data-testid="customer_products__checkout-bottom-value">
            {
              `Ver Carrinho: R$ ${String((cartItems
                .reduce((acc, { totalPrice }) => acc + parseFloat(totalPrice), 0))
                .toFixed(2)).replace('.', ',')}`
            }
          </span>
        </button>
      </div>
    </div>
  );
}

export default Products;
