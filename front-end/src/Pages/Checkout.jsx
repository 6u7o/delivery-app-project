import React from 'react';
import Header from '../Components/Header';
import DetailsTable from '../Components/TableDetails';
// import api from '../services/request';

function Checkout() {
  // const arrayData = await api.get('/customer/checkout');
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
        },
        {
          label: 'MEUS PEDIDOS',
          route: '/customer/orders',
          aria: 'customer-orders-button',
          name: 'customer-orders-button',
        }] }
      />
      <h1> CHECKOUT </h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Subtotal</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {
            arrayDataMock?.map((item) => (
              <tr key={ item.id }>
                <DetailsTable
                  id={ item.id }
                  product={ item.product }
                  quantity={ item.quantity }
                  unitPrice={ item.unitPrice }
                  totalPrice={ item.totalPrice }
                  remove
                />
              </tr>

            ))
          }
        </tbody>
      </table>

    </div>
  );
}

export default Checkout;
