import React from 'react';
import Header from '../Components/Header';
// import CardProduct from '../Components/ProductCard';

function Products() {
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
      {/* <CardProduct /> */}
    </div>
  );
}

export default Products;
