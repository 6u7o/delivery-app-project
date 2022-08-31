import React from 'react';
import { Link } from 'react-router-dom';

function CardOrder({ id, status, date, totalPrice, userId }) {
  return (
    <Link to={ `seller/${userId}` }>
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
    </Link>
  );
}

export default CardOrder;
