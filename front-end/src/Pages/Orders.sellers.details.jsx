import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import DetailsTable from '../Components/TableDetails';
import api from '../services/request';

function SellerOrdersDetails() {
  const [detailsList, setOrdersList] = useState([]);
  const [userName, setUserName] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
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
      console.log('data.data: ', data.data.status);
      setOrderStatus(data.data.status);
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
      setOrdersList(products);
    };
    getSellersOrders();
  }, [id, userName]);

  const isButtonDisabled = () => orderStatus !== 'Pendente';

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
      <h1> Sellers ORDERS DETAILS </h1>
      <button
        type="button"
        aria-label="button"
        disabled={ isButtonDisabled() }
        onClick={ onClickButton }
        data-testid="common_login__button-login"
        name="login-button"
      />
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
            detailsList?.map((order, index) => (
              <tr key={ order.id }>
                <DetailsTable
                  id={ order.id }
                  dtTestIdItemId={
                    `seller_order_details__element-order-table-item-number-${index}`
                  }
                  product={ order.name }
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
