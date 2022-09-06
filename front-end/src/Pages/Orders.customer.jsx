import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import CardOrder from '../Components/OrderCard';
import api from '../services/request';

function CustomerOrders() {
  const [ordersList, setOrdersList] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getOrderData = async () => {
      const token = localStorage.getItem('token');
      const userNameLocal = localStorage.getItem('userName');
      const config = {
        headers: {
          authorization: token,
        },
      };
      const { data } = await api.get('/sales', config);
      // console.log(data.data);
      setOrdersList(data.data);
      setUserName(userNameLocal);
    };
    getOrderData();
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
        userName={ userName }
      />
      <h1> CUSTOMER ORDERS </h1>
      { ordersList?.map((order) => (
        <CardOrder
          key={ order.id }
          id={ order.id }
          date={ order.saleDate }
          status={ order.status }
          totalPrice={ order.totalPrice }
          path="customer"
          dtTestIdOrder={ `customer_orders__element-order-id-${order.id}` }
          dtTestIdOrderStats={ `customer_orders__element-delivery-status-${order.id}` }
          dtTestIdOrderDate={ `customer_orders__element-order-date-${order.id}` }
          dtTestIdOrderTPrice={ `customer_orders__element-card-price-${order.id}` }
        />
      ))}
    </div>
  );
}

export default CustomerOrders;
