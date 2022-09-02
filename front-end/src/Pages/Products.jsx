import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import api from '../services/request';
import CardProduct from '../Components/ProductCard';

function Products() {
  const [productsList, setProductsList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  // const cart = JSON.parse(localStorage.getItem('carrinho'));

  const handleTotalPrice = () => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    setCartItems(cart || []);
  };

  useEffect(() => {
    const getProductsData = async () => {
      const { data } = await api.get('/customer/products');
      // console.log(data.data);
      setProductsList(data.data);
    };
    getProductsData();
    handleTotalPrice();
  }, []);

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
        >
          {
            `Ver Carrinho: R$ ${(cartItems
              .reduce((acc, { totalPrice }) => acc + parseFloat(totalPrice), 0))
              .toFixed(2)}`
          }
        </button>
      </div>
    </div>
  );
}

export default Products;
