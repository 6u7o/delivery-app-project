import React from 'react';
import Header from '../Components/Header';
import DetailsTable from '../Components/TableDetails';
// import api from '../services/request';

function CustomerOrdersDetails() {
  // const arrayData = await api.get('/customer/orders/:id');
  const arrayDataMock = [
    {
      id: 1,
      product: 'Beer',
      quantity: 12,
      unitPrice: 'R$ 3,50',
      totalPrice: 'R$ 42,00',
    },
    {
      id: 2,
      product: 'Soda',
      quantity: 6,
      unitPrice: 'R$ 3,50',
      totalPrice: 'R$ 21,00',
    },
  ];
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
      <h1> CUSTOMER ORDERS DETAILS </h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {
            arrayDataMock?.map((item, index) => (
              <tr key={ item.id }>
                <DetailsTable
                  id={ item.id }
                  dtTestIdItemId={
                    `customer_order_details__element-order-table-item-number-${index}`
                  }
                  product={ item.product }
                  dtTestIdItemDesc={
                    `customer_order_details__element-order-table-name-${index}`
                  }
                  quantity={ item.quantity }
                  dtTestIdOrderQtt={
                    `customer_order_details__element-order-table-quantity-${index}`
                  }
                  unitPrice={ item.unitPrice }
                  dtTestIdUnitPrice={
                    `customer_order_details__element-order-table-sub-total-${index}`
                  }
                  totalPrice={ item.totalPrice }
                  dtTestIdTotalPrice={
                    `customer_order_details__element-order-total-price-${index}`
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

export default CustomerOrdersDetails;
