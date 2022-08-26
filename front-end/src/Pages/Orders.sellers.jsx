import React from 'react';
import Header from '../Components/Header';

function SellerOrders() {
  return (
    <div>
      <Header
        array={ [{
          label: 'PEDIDOS',
          route: '/seller/orders',
          aria: 'seller-orders-button',
          name: 'seller-orders-button',
        }] }
      />
      <h1> Sellers ORDERS </h1>
    </div>
  );
}

export default SellerOrders;
