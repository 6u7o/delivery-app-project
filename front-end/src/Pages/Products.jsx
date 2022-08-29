import React from 'react';
import Header from '../Components/Header';
import api from '../services/request';
import CardProduct from '../Components/ProductCard';

function Products() {
  const getProductsData = api.get('/customer/products');

  return (
    <div>
      <Header
        array={ [{
          label: 'PRODUTOS',
          route: '/customer/products',
          aria: 'customer-products-button',
          name: 'customer-products-button',
        },
        {
          label: 'MEUS PEDIDOS',
          route: '/customer/orders',
          aria: 'customer-orders-button',
          name: 'customer-orders-button',
        }] }
      />
      <h1> PRODUCTS </h1>
      { getProductsData?.map((product) => (
        <CardProduct
          key={ product.name }
          price={ product.price }
          image={ product.image }
          name={ product.name }
        />
      )) }
    </div>
  );
}

export default Products;
