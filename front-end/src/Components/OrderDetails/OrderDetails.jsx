import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function OrderDetails({
  id,
  seller,
  date,
  status,
  array,
  dtTestIdOrderId,
  testIdSaleDate,
  testIdStat,
}) {
  return (
    <Container>
      <div data-testid={ dtTestIdOrderId }>
        { `PEDIDO: ${id}` }
      </div>
      {
        seller
      && (
        <div
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          { `P. Vend: ${seller}` }
        </div>
      )
      }
      <div data-testid={ testIdSaleDate }>
        { date }
      </div>
      <h3 data-testid={ testIdStat }>
        { status }
      </h3>
      <div>
        {
          array.map((button) => (
            <button
              key={ button.label }
              type="button"
              onClick={ () => button.onclickFunc(id) }
              aria-label={ button.aria }
              name={ button.name }
              data-testid={ button.dataTestId }
              disabled={ button.btnDisable }
            >
              { button.label }
            </button>
          ))
        }
      </div>
    </Container>
  );
}

OrderDetails.propTypes = {
  id: PropTypes.number.isRequired,
  seller: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  dtTestIdOrderId: PropTypes.string.isRequired,
  testIdSaleDate: PropTypes.string.isRequired,
  testIdStat: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      aria: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      dataTestId: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default OrderDetails;
