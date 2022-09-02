import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import DetailsTable from '../Components/TableDetails';
import api from '../services/request';

function CustomerOrdersDetails() {
  const [detailsList, setOrdersList] = useState([]);
  const [userName, setUserName] = useState('');
  const { id } = useParams();
  useEffect(() => {
    const getSellersOrders = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          authorization: token,
        },
      };
      const userNameLocal = localStorage.getItem('userName');
      setUserName(userNameLocal);
      const { data } = await api.get(`sales/${id}`, config);
      const products = data.data.products.map((prod) => {
        const obj = {
          id: prod.id,
          name: prod.name,
          unitPrice: prod.price,
          quantity: prod.salesProducts.quantity,
          totalPrice: Number(prod.price) * Number(prod.salesProducts.quantity),
        };
        return obj;
      });
      console.log('products ', products);
      setOrdersList(products);
    };
    getSellersOrders();
  }, [id, userName]);

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
            detailsList?.map((item, index) => (
              <tr key={ item.id }>
                <DetailsTable
                  id={ item.id }
                  dtTestIdItemId={
                    `customer_order_details__element-order-table-item-number-${index}`
                  }
                  product={ item.name }
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
