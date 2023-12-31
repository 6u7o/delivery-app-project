import React, { useEffect, useState } from 'react';
import CardOrder from '../../Components/OrderCard/OrderCard';
import Header from '../../Components/Header/Header';
import api from '../../services/request';
import { Content } from './styles';

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
      <Content>
        { ordersList?.map((order) => (
          <CardOrder
            key={ order.id }
            id={ order.id }
            date={ order.saleDate.slice(0, +'-14').split('-') }
            status={ order.status }
            totalPrice={ order.totalPrice }
            path="customer"
            dtTestIdOrder={ `customer_orders__element-order-id-${order.id}` }
            dtTestIdOrderStats={ `customer_orders__element-delivery-status-${order.id}` }
            dtTestIdOrderDate={ `customer_orders__element-order-date-${order.id}` }
            dtTestIdOrderTPrice={ `customer_orders__element-card-price-${order.id}` }
          />
        ))}
      </Content>
    </div>
  );
}

export default CustomerOrders;
