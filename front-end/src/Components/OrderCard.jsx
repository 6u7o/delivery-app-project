import React from 'react';

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

export default CardOrder;
