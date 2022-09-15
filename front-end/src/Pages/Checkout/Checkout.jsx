import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import DetailsTable from '../../Components/TableDetails/TableDetails';
import api from '../../services/request';
import { getFromLocalStorage } from '../../services/handleLocalStorage';
import * as C from './styles';

function Checkout() {
  const [productsList, setProductsList] = useState([]);
  const [sellersList, setSellersList] = useState([]);
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [sellerId, setSellerId] = useState(2); // Número 2 porque é o Nº do id da primeira (e única XD) pessoa vendedora do array

  const navigate = useNavigate();

  const handleDeleteItemButtonClick = (itemId) => {
    const currentCartItens = JSON.parse(localStorage.getItem('carrinho'));

    const updatedCartItens = currentCartItens.filter(({ id }) => itemId !== id);

    localStorage.setItem('carrinho', JSON.stringify(updatedCartItens));
    setProductsList(updatedCartItens);
  };

  useEffect(() => {
    const getProductsData = async () => {
      const itemsLS = await getFromLocalStorage('carrinho');
      // console.log(itemsLS);
      setProductsList(itemsLS);
    };
    const getSellers = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          authorization: token,
        },
      };
      const { data } = await api.get('/customer/checkout', config);
      // console.log(data.data);
      setSellersList(data.data);
    };
    getProductsData();
    getSellers();
  }, []);

  const handleChange = ({ target }) => {
    if (target.type === 'text') setAddress(target.value);
    if (target.type === 'number') setAddressNumber(target.value);
    if (target.name === 'seller-person') setSellerId(target.value);
  };

  const clickToSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        authorization: token,
      },
    };
    const body = {
      saleData: {
        sellerId,
        totalPrice: (productsList
          .reduce((acc, { totalPrice }) => acc + parseFloat(totalPrice), 0))
          .toFixed(2), // remover o .toFixed(2) se o tipo esperado for um number e não uma string
        deliveryAddress: address,
        deliveryNumber: addressNumber,
      },
      products: productsList,
    };
    const orderData = await api.post('customer/checkout', body, config);
    navigate(`/customer/orders/${orderData.data.data.id}`);
  };

  return (
    <C.Container>
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
        userName={ localStorage.getItem('userName') }
      />
      <C.Table>
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
            productsList?.map((item, index) => (
              <DetailsTable
                key={ item.id }
                id={ item.id }
                dtTestIdItemIndex={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
                product={ item.product }
                dtTestIdItemDesc={
                  `customer_checkout__element-order-table-name-${index}`
                }
                quantity={ item.quantity }
                dtTestIdOrderQtt={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
                unitPrice={ item.unitPrice }
                dtTestIdUnitPrice={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
                totalPrice={ item.totalPrice }
                dtTestIdTotalPrice={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
                remove
                index={ index }
                dtTestIdRemoveProductBtn={
                  `customer_checkout__element-order-table-remove-${index}`
                }
                handleDeleteItemButtonClick={ handleDeleteItemButtonClick }
              />
            ))
          }
        </tbody>
      </C.Table>
      <C.Content data-testid="customer_checkout__element-order-total-price">
        <h3>
          {
            `Total: R$ ${String((productsList
              .reduce((acc, { totalPrice }) => acc + parseFloat(totalPrice), 0))
              .toFixed(2)).replace('.', ',')}`
          }
        </h3>
      </C.Content>
      <br />
      <h4>Detalhes e Endereço para Entrega</h4>
      <C.Form>
        <label htmlFor="seller-person">
          Vendedora Responsável:
          <select
            name="seller-person"
            data-testid="customer_checkout__select-seller"
            onChange={ handleChange }
          >
            { sellersList.map((person) => (
              <option value={ person.id } key={ person.name }>
                { person.name }
              </option>
            )) }
          </select>
        </label>
        <input
          placeholder="Informe o endereço para entrega"
          type="text"
          onChange={ handleChange }
          value={ address }
          data-testid="customer_checkout__input-address"
        />
        <input
          placeholder="Informe o número para entrega"
          type="number"
          onChange={ handleChange }
          value={ addressNumber }
          data-testid="customer_checkout__input-addressNumber"
        />
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ clickToSubmit }
        >
          FINALIZAR PEDIDO
        </button>
      </C.Form>
    </C.Container>
  );
}

export default Checkout;
