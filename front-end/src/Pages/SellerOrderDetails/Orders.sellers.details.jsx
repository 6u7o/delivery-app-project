import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
// import DetailsTable from '../Components/TableDetails/TableDetails';
import api from '../../services/request';
import OrderDetails from '../../Components/OrderDetails/OrderDetails';
import * as C from './styles';

function SellerOrdersDetails() {
  const [detailsList, setOrdersList] = useState([]);
  const [userName, setUserName] = useState('');
  const [total, setTotal] = useState([]);
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

      setTotal(data.data.totalPrice);

      const formatDate = data.data.saleDate.slice(0, +'-14').split('-');

      setSaleData({
        saleDate: `${formatDate[2]}/${formatDate[1]}/${formatDate[0]}`,
        saleStatus: data.data.status,
      });
    };
    getSellersOrders();
  }, [id, userName]);

  const isReadyButtonDisabled = () => orderStatus !== 'Pendente';

  const isLeftButtonDisabled = () => orderStatus !== 'Preparando';

  const onClickButton = async (idzinho) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        authorization: token,
      },
    };
    const body = {
      newStatus: 'Preparando',
    };
    await api.patch(`sales/${idzinho}`, body, config);
    setOrderStatus('Preparando');
  };

  const onClickLeftButton = async (idzinho) => {
    console.log('cliquei1');
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        authorization: token,
      },
    };
    const body = {
      newStatus: 'Em Trânsito',
    };
    await api.patch(`sales/${idzinho}`, body, config);
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
        status={ orderStatus }
        array={ [{
          label: 'Preparar pedido',
          aria: 'botão de preparar pedido',
          name: 'prepare-order-button',
          dataTestId: 'seller_order_details__button-preparing-check',
          onclickFunc: onClickButton,
          btnDisable: isReadyButtonDisabled(),
        },
        {
          label: 'Saiu para entrega',
          aria: 'botão de saiu para entrega',
          name: 'set-to-deliver-button',
          dataTestId: 'seller_order_details__button-dispatch-check',
          onclickFunc: onClickLeftButton,
          btnDisable: isLeftButtonDisabled(),
        }] }
      />
      <C.Table>
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
            detailsList?.map((item, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-name-${index} `
                  }
                >
                  {item.name}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-quantity-${index}`
                  }
                >
                  {item.quantity}
                </td>
                <td
                  data-testid={
                    `customer_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  {`R$: ${String(item.unitPrice).replace('.', ',')}`}
                </td>
                <td>
                  {`R$: ${String(item.totalPrice).replace('.', ',')}`}
                </td>
              </tr>
            ))
          }
        </tbody>
      </C.Table>
      <C.Content>
        <h3 data-testid="seller_order_details__element-order-total-price">
          {
            `Total: R$ ${String(total).replace('.', ',')}`
          }
        </h3>
      </C.Content>
    </div>
  );
}

export default SellerOrdersDetails;
