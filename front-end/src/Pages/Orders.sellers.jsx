import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import CardOrder from '../Components/OrderCard';
import api from '../services/request';

function SellerOrdersDetails() {
  const [ordersList, setOrdersList] = useState([]);
  const { id } = useParams;
  useEffect(() => {
    const getSellersOrders = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          authorization: token,
        },
      };
      const { data } = await api.get('/sales', config);
      setOrdersList(data.data);
    };
    getSellersOrders();
  }, []);

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
      { ordersList?.map((order) => (
        <CardOrder
          key={ order.id }
          id={ order.id }
          date={ order.saleDate }
          status={ order.status }
          totalPrice={ order.totalPrice }
          userId={ id }
        />
      ))}
    </div>
  );
}

export default SellerOrdersDetails;
