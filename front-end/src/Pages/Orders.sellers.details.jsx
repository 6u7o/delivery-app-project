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
          dataTestId: 'customer_products__element-navbar-link-orders',
        }] }
        userName={ api /* informar o caminho para pegar o userName */ }
      />
      <h1> Sellers ORDERS DETAILS </h1>
    </div>
  );
}

export default SellerOrdersDetails;
