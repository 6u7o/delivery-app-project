import React from 'react';
import PropTypes from 'prop-types';

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
  },
) {
  return (
    <div>

      <div
        data-testid={ dtTestIdOrder }
      >
        <h3>
          Pedido
          { id }
        </h3>
      </div>

      <div
        data-testid={ dtTestIdOrderStats }
      >
        <h3>{ status }</h3>
      </div>

      <div>
        <h3
          data-testid={ dtTestIdOrderDate }
        >
          { date }
        </h3>
        <h3
          data-testid={ dtTestIdOrderTPrice }
        >
          { totalPrice }
        </h3>
        {orderAdress && (
          <h6
            data-testid={ dtTestIdOrderAdress }
          >
            { orderAdress }
          </h6>)}
      </div>

    </div>
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
};

export default CardOrder;
