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
          dataTestId: 'customer_products__element-navbar-link-products',
        },
        {
          label: 'MEUS PEDIDOS',
          route: '/customer/orders',
          aria: 'customer-orders-button',
          name: 'customer-orders-button',
          dataTestId: 'customer_products__element-navbar-link-orders',
        }] }
        userName={ api /* informar o caminho para pegar o userName */ }
      />
      <h1> CUSTOMER ORDERS </h1>
      { getOrderData?.map((order) => (
        <CardOrder
          key={ order.id }
          id={ order.id }
          date={ order.date }
          status={ order.status }
          totalPrice={ order.totalPrice }
          dtTestIdOrder={ `customer_orders__element-order-id-${order.id}` }
          dtTestIdOrderStats={ `customer_orders__element-delivery-status${order.id}` }
          dtTestIdOrderDate={ `customer_orders__element-order-date-${order.id}` }
          dtTestIdOrderTPrice={ `customer_orders__element-card-price-${order.id}` }
        />
      ))}
    </div>
  );
}

export default CustomerOrders;