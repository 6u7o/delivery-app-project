import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import CardOrder from '../Components/OrderCard/OrderCard';
import api from '../services/request';

function SellerOrdersDetails() {
  const [ordersList, setOrdersList] = useState([]);
  const [userName, setUserName] = useState('');
  // const { id } = useParams;
  useEffect(() => {
    const getSellersOrders = async () => {
      const user = localStorage.getItem('userName');
      setUserName(user);
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
          dataTestId: 'customer_products__element-navbar-link-orders',
        }] }
        userName={ userName }
      />
      <h1> Sellers ORDERS </h1>
      { ordersList?.map((order) => (
        <CardOrder
          key={ order.id }
          id={ order.id }
          date={ order.saleDate.slice(0, +'-14').split('-') }
          status={ order.status }
          totalPrice={ order.totalPrice }
          dtTestIdOrder={ `seller_orders__element-order-id-${order.id}` }
          dtTestIdOrderStats={ `seller_orders__element-delivery-status-${order.id}` }
          dtTestIdOrderDate={ `seller_orders__element-order-date-${order.id}` }
          dtTestIdOrderTPrice={ `seller_orders__element-card-price-${order.id}` }
          dtTestIdOrderAdress={ `seller_orders__element-card-address-${order.id}` }
          orderAdress={ order.adress }
          path="seller"
        />
      ))}
    </div>
  );
}

export default SellerOrdersDetails;
