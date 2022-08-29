import React from 'react';
import Header from '../Components/Header';
import CardOrder from '../Components/OrderCard';
import api from '../services/request';

function CustomerOrders() {
  const getOrderData = api.get('/customer/orders');

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
      <h1> CUSTOMER ORDERS </h1>
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

export default CustomerOrders;
