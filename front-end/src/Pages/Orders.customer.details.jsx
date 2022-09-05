import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import DetailsTable from '../Components/TableDetails';
import api from '../services/request';
// import { getFromLocalStorage } from '../services/handleLocalStorage';
import OrderDetails from '../Components/OrderDetails';

function CustomerOrdersDetails() {
  const [detailsList, setOrdersList] = useState([]);
  const [userName, setUserName] = useState('');
  const [total, setTotal] = useState([]);
  const [saleData, setSaleData] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const getOrdersData = async () => {
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
      // console.log('products ', products);
      setOrdersList(products);

      const currentCartItens = JSON.parse(localStorage.getItem('carrinho'));
      setTotal(currentCartItens);

      const formatDate = data.data.saleDate.slice(0, +'-14').split('-');

      setSaleData({
        sellerName: data.data.seller.name,
        saleDate: `${formatDate[2]}/${formatDate[1]}/${formatDate[0]}`,
        saleStatus: data.data.status,
      });
      // console.log(data.data);
    };
    getOrdersData();
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
      <OrderDetails
        dtTestIdOrderId="customer_order_details__element-order-details-label-order-id"
        dtTestIdSaleDate="customer_order_details__element-order-details-label-order-date"
        testIdStatus="customer_order_details__element-order-details-label-delivery-status"
        id={ id }
        seller={ saleData.sellerName }
        date={ saleData.saleDate }
        status={ saleData.saleStatus }
        array={ [{
          label: 'Marcar como entregue',
          aria: 'botão de marcar pedido como entregue',
          name: 'set-order-as-delivered-button',
          dataTestId: 'customer_order_details__button-delivery-check',
        }] }
      />
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
      <div data-testid="customer_checkout__element-order-total-price">
        <h3>
          {
            `Total: R$ ${String((total
              .reduce((acc, { totalPrice }) => acc + parseFloat(totalPrice), 0))
              .toFixed(2)).replace('.', ',')}`
          }
        </h3>
      </div>
    </div>
  );
}

export default CustomerOrdersDetails;
