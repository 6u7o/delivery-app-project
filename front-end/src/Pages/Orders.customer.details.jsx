import React from 'react';
import Header from '../Components/Header';

function CustomerOrdersDetails() {
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
      <h1> CUSTOMER ORDERS DETAILS </h1>
    </div>
  );
}

export default CustomerOrdersDetails;
