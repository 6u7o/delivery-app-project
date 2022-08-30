import React from 'react';
import PropTypes from 'prop-types';

function DetailsTable({ id, user, product, email, quantity, userRole,
  unitPrice, totalPrice, deleteUser, remove }) {
  return (
    <>
      <td>{ id }</td>
      <td>{ user || product }</td>
      {email && (<td>{ email }</td>)}
      {quantity && (<td>{ quantity }</td>)}
      {userRole && (<td>{ userRole }</td>)}
      {unitPrice && (<td>{ unitPrice }</td>)}
      {totalPrice && (<td>{ totalPrice }</td>)}
      {deleteUser && (
        <td>
          <button
            type="button"
            aria-label="delete-user-button"
          >
            EXCLUIR
          </button>
        </td>
      )}

      {remove && (
        <td>
          <button
            type="button"
            aria-label="remove-item-button"
          >
            REMOVER
          </button>
        </td>
      )}
    </>
  );
}

DetailsTable.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  userRole: PropTypes.string.isRequired,
  unitPrice: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  deleteUser: PropTypes.bool.isRequired,
  remove: PropTypes.bool.isRequired,
};

export default DetailsTable;
