import React from 'react';

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

export default DetailsTable;
