import React from 'react';
import Header from '../Components/Header';

function Manage() {
  return (
    <div>
      <Header
        array={ [{
          label: 'GERENCIAR USUÁRIOS',
          route: '/admin/manage',
          aria: 'manage-button',
          name: 'manage-button',
        }] }
      />
      <h1> ADMIN / MANAGE </h1>
    </div>
  );
}

export default Manage;
