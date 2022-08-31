import React from 'react';
import Header from '../Components/Header';
import DetailsTable from '../Components/TableDetails';
import api from '../services/request';

function SellerOrdersDetails() {
  const getOrdersData = api.get('/customer/products');
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
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {
            getOrdersData?.map((order, index) => (
              <tr key={ order.id }>
                <DetailsTable
                  id={ order.id }
                  dtTestIdItemId={
                    `seller_order_details__element-order-table-item-number-${index}`
                  }
                  product={ order.product }
                  dtTestIdItemDesc={
                    `seller_order_details__element-order-table-name-${index}`
                  }
                  quantity={ order.quantity }
                  dtTestIdOrderQtt={
                    `seller_order_details__element-order-table-quantity-${index}`
                  }
                  unitPrice={ order.unitPrice }
                  dtTestIdUnitPrice={
                    `seller_order_details__element-order-table-unit-price-${index}`
                  }
                  totalPrice={ order.totalPrice }
                  dtTestIdTotalPrice={
                    `seller_order_details__element-order-table-sub-total-${index}`
                  }
                />
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default SellerOrdersDetails;
