import React from 'react';

function Header() {
  return (
    <div>
      <button
        type="button"
        aria-label="header-button1"
        name="header-button1"
        // onClick={}
      >
        LALALAND
      </button>
      <button
        type="button"
        aria-label="header-button2"
        name="header-button2"
        // onClick={}
      >
        ARTURITO
      </button>
      <div>
        <h3> PESSOA USUÁRIA </h3>
      </div>
      <button
        type="button"
        aria-label="checkout-button"
        name="checkout-button"
        // onClick={}
      >
        SAIR
      </button>
    </div>
  );
}

export default Header;
