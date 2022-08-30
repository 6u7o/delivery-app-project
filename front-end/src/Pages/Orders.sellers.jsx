import React from 'react';
import Header from '../Components/Header';
import CardOrder from '../Components/OrderCard';

function SellerOrders() {
  const getOrderData = api.get('/seller/orders');

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
      <h1> Sellers ORDERS </h1>
      { getOrderData?.map((order) => (
        <CardOrder
          key={ order.id }
          id={ order.id }
          date={ order.date }
          status={ order.status }
          totalPrice={ order.totalPrice }
        />
      ))}
    </div>
  );
}

export default SellerOrders;
