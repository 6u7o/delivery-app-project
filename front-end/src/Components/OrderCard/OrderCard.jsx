import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as C from './styles';

function CardOrder(
  { id,
    status,
    date,
    totalPrice,
    dtTestIdOrder,
    dtTestIdOrderStats,
    dtTestIdOrderDate,
    dtTestIdOrderTPrice,
    orderAdress,
    dtTestIdOrderAdress,
    path,
  },
) {
  return (
    <C.Card>
      <Link to={ `/${path}/orders/${id}` }>
        <C.Order
          data-testid={ dtTestIdOrder }
        >
          <h4>
            Pedido: 0
            { id }
          </h4>
        </C.Order>
      </Link>
      <C.Status
        data-testid={ dtTestIdOrderStats }
      >
        <h3>{ status }</h3>
      </C.Status>

      <C.Date>
        <C.TotalPrice
          data-testid={ dtTestIdOrderDate }
        >
          { `${date[2]}/${date[1]}/${date[0]}` }
        </C.TotalPrice>
        <h3
          data-testid={ dtTestIdOrderTPrice }
        >
          R$:
          {' '}
          { String(totalPrice).replace('.', ',') }
        </h3>
        {orderAdress && (
          <C.Adress
            data-testid={ dtTestIdOrderAdress }
          >
            { orderAdress }
          </C.Adress>)}
      </C.Date>
    </C.Card>
  );
}

CardOrder.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  dtTestIdOrder: PropTypes.string.isRequired,
  dtTestIdOrderStats: PropTypes.string.isRequired,
  dtTestIdOrderDate: PropTypes.string.isRequired,
  dtTestIdOrderTPrice: PropTypes.string.isRequired,
  orderAdress: PropTypes.string.isRequired,
  dtTestIdOrderAdress: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default CardOrder;
