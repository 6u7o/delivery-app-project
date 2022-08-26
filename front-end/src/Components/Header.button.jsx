import React from 'react';

function Button({ label, handleClick, aria, name }) {
  return (
    <button
      type="button"
      onClick={ handleClick }
      aria-label={ aria }
      name={ name }
    >
      {label}
    </button>
  );
}

export default Button;
