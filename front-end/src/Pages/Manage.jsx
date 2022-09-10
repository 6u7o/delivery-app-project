import React from 'react';
import Header from '../Components/Header/Header';
import DetailsTable from '../Components/TableDetails';
// import api from '../services/request';

function Manage() {
  // const arrayData = await api.get('/admin/manage');
  const arrayDataMock = [
    {
      id: 1,
      user: 'Zé Fulano',
      email: 'zefulano@email.com',
      userRole: 'Cliente',
    },
    {
      id: 2,
      user: 'Zé Ciclano',
      email: 'zeciclano@email.com',
      userRole: 'Vendedor',
    },
  ];
  return (
    <div>
      <Header
        array={ [{
          label: 'GERENCIAR USUÁRIOS',
          route: '/admin/manage',
          aria: 'manage-button',
          name: 'manage-button',
          dataTestId: 'customer_products__element-navbar-link-orders',
        }] }
        userName={ api /* informar o caminho para pegar o userName */ }
      />
      <h1> ADMIN / MANAGE </h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            arrayDataMock?.map((user, index) => (
              <tr key={ user.id }>
                <DetailsTable
                  id={ user.id }
                  dtTestIdItemId={
                    `admin_manage__element-user-table-item-number-${index}`
                  }
                  user={ user.user /* user ou name */ }
                  dtTestIdItemDesc={ `admin_manage__element-user-table-name-${index}` }
                  email={ user.email }
                  dtTestIdUsermail={ `admin_manage__element-user-table-email-${index}` }
                  userRole={ user.userRole }
                  dtTestIdUserRole={ `admin_manage__element-user-table-role-${index}` }
                  deleteUser
                  dtTestIdDeleteUserBtn={
                    `admin_manage__element-user-table-remove-${index}`
                  }
                />
              </tr>

            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Manage;
