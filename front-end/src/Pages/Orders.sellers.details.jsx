import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import DetailsTable from '../Components/TableDetails';
import api from '../services/request';
import OrderDetails from '../Components/OrderDetails';

function SellerOrdersDetails() {
  const [detailsList, setOrdersList] = useState([]);
  const [userName, setUserName] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [saleData, setSaleData] = useState('');
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

      const formatDate = data.data.saleDate.slice(0, +'-14').split('-');

      setSaleData({
        saleDate: `${formatDate[2]}/${formatDate[1]}/${formatDate[0]}`,
        saleStatus: data.data.status,
      });
      // console.log(data.data);
    };
    getSellersOrders();
  }, [id, userName]);

  const isReadyButtonDisabled = () => orderStatus !== 'Pendente';

  const isLeftButtonDisabled = () => orderStatus !== 'Preparando';

  const onClickButton = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        authorization: token,
      },
    };
    const body = {
      newStatus: 'Preparando',
    };
    const { data } = await api.patch(`sales/${id}`, body, config);
    console.log('data do newStatus: ', data);
    setOrderStatus('Preparando');
  };

  const onClickLeftButton = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        authorization: token,
      },
    };
    const body = {
      newStatus: 'Em Trânsito',
    };
    const { data } = await api.patch(`sales/${id}`, body, config);
    console.log('data do newStatus: ', data);
    setOrderStatus('Em Trânsito');
  };

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
      <OrderDetails
        dtTestIdOrderId="seller_order_details__element-order-details-label-order-id"
        dtTestIdSaleDate="seller_order_details__element-order-details-label-order-date"
        testIdStatus="seller_order_details__element-order-details-label-delivery-status"
        id={ id }
        date={ saleData.saleDate }
        status={ saleData.saleStatus }
        array={ [{
          label: 'Preparar pedido',
          aria: 'botão de preparar pedido',
          name: 'prepare-order-button',
          dataTestId: 'seller_order_details__button-preparing-check',
        },
        {
          label: 'Saiu para entrega',
          aria: 'botão de saiu para entrega',
          name: 'set-to-deliver-button',
          dataTestId: 'seller_order_details__button-dispatch-check',
        }] }
      />
      <h2>
        {orderStatus}
      </h2>
      <button
        type="button"
        aria-label="button"
        disabled={ isReadyButtonDisabled() }
        onClick={ onClickButton }
        name="login-button"
      >
        PREPARAR PEDIDO
      </button>
      <button
        type="button"
        aria-label="button"
        disabled={ isLeftButtonDisabled() }
        onClick={ onClickLeftButton }
        name="login-button"
      >
        SAIU PRA ENTREGA
      </button>
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
