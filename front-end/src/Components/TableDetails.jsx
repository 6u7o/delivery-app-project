import React from 'react';
import PropTypes from 'prop-types';

function DetailsTable({
  id,
  user,
  product,
  email,
  quantity,
  userRole,
  unitPrice,
  totalPrice,
  deleteUser,
  remove,
  dtTestIdItemId,
  dtTestIdItemDesc,
  dtTestIdUsermail,
  dtTestIdOrderQtt,
  dtTestIdUserRole,
  dtTestIdUnitPrice,
  dtTestIdTotalPrice,
  dtTestIdDeleteUserBtn,
  dtTestIdRemoveProductBtn,
}) {
  return (
    <>
      <td
        data-testid={ dtTestIdItemId }
      >
        { id }
      </td>
      <td
        data-testid={ dtTestIdItemDesc }
      >
        { user || product }
      </td>
      {email && (
        <td
          data-testid={ dtTestIdUsermail }
        >
          { email }
        </td>)}
      {quantity && (
        <td
          data-testid={ dtTestIdOrderQtt }
        >
          { quantity }
        </td>)}
      {userRole && (
        <td
          data-testid={ dtTestIdUserRole }
        >
          { userRole }
        </td>)}
      {unitPrice && (
        <td
          data-testid={ dtTestIdUnitPrice }
        >
          { unitPrice }
        </td>)}
      {totalPrice && (
        <td
          data-testid={ dtTestIdTotalPrice }
        >
          { totalPrice }
        </td>)}
      {deleteUser && (
        <td>
          <button
            data-testid={ dtTestIdDeleteUserBtn }
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
            data-testid={ dtTestIdRemoveProductBtn }
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
  dtTestIdItemId: PropTypes.string.isRequired,
  dtTestIdItemDesc: PropTypes.string.isRequired,
  dtTestIdUsermail: PropTypes.string.isRequired,
  dtTestIdOrderQtt: PropTypes.string.isRequired,
  dtTestIdUserRole: PropTypes.string.isRequired,
  dtTestIdUnitPrice: PropTypes.string.isRequired,
  dtTestIdTotalPrice: PropTypes.string.isRequired,
  dtTestIdDeleteUserBtn: PropTypes.string.isRequired,
  dtTestIdRemoveProductBtn: PropTypes.string.isRequired,
};

export default DetailsTable;
