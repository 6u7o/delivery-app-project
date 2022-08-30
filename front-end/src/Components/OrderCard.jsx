import React from 'react';
import PropTypes from 'prop-types';

function CardOrder({ id, status, date, totalPrice }) {
  return (
    <div>

      <div>
        <h3>
          Pedido
          { id }
        </h3>
      </div>

      <div>
        <h3>{ status }</h3>
      </div>

      <div>
        <h3>{ date }</h3>
        <h3>{ totalPrice }</h3>
      </div>

    </div>
  );
}

CardOrder.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default CardOrder;
