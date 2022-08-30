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
          dtTestIdSellOrder={ `seller_orders__element-order-id-${order.id}` }
          dtTestIdSellOrderStats={ `seller_orders__element-delivery-status-${order.id}` }
          dtTestIdSellOrderDate={ `seller_orders__element-order-date-${order.id}` }
          dtTestIdSellOrderTPrice={ `seller_orders__element-card-price-${order.id}` }
          dtTestIdOrderAdress={ `seller_orders__element-card-address-${order.id}` }
          orderAdress={ order.adress }
        />
      ))}
    </div>
  );
}

export default SellerOrders;
