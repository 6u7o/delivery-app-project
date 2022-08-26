import React from 'react';
import Header from '../Components/Header';

function SellerOrdersDetails() {
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
      <h1> Sellers ORDERS DETAILS </h1>
    </div>
  );
}

export default SellerOrdersDetails;
