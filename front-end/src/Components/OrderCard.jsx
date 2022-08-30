import React from 'react';
import PropTypes from 'prop-types';

function CardOrder(
  { id,
    status,
    date,
    totalPrice,
    dtTestIdCustOrder,
    dtTestIdSellOrder,
    dtTestIdCustOrderStats,
    dtTestIdSellOrderStats,
    dtTestIdCustOrderDate,
    dtTestIdSellOrderDate,
    dtTestIdCustOrderTPrice,
    dtTestIdSellOrderTPrice,
    orderAdress,
    dtTestIdOrderAdress,
  },
) {
  return (
    <div>

      <div
        data-testid={ dtTestIdCustOrder || dtTestIdSellOrder }
      >
        <h3>
          Pedido
          { id }
        </h3>
      </div>

      <div
        data-testid={ dtTestIdCustOrderStats || dtTestIdSellOrderStats }
      >
        <h3>{ status }</h3>
      </div>

      <div>
        <h3
          data-testid={ dtTestIdCustOrderDate || dtTestIdSellOrderDate }
        >
          { date }
        </h3>
        <h3
          data-testid={ dtTestIdCustOrderTPrice || dtTestIdSellOrderTPrice }
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
  dtTestIdCustOrder: PropTypes.string.isRequired,
  dtTestIdSellOrder: PropTypes.string.isRequired,
  dtTestIdCustOrderStats: PropTypes.string.isRequired,
  dtTestIdSellOrderStats: PropTypes.string.isRequired,
  dtTestIdCustOrderDate: PropTypes.string.isRequired,
  dtTestIdSellOrderDate: PropTypes.string.isRequired,
  dtTestIdCustOrderTPrice: PropTypes.string.isRequired,
  dtTestIdSellOrderTPrice: PropTypes.string.isRequired,
  orderAdress: PropTypes.string.isRequired,
  dtTestIdOrderAdress: PropTypes.string.isRequired,
};

export default CardOrder;
