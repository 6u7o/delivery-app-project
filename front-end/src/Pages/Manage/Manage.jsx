import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
// import DetailsTable from '../../Components/TableDetails/TableDetails';
// import api from '../services/request';
import * as C from './styles';

function Manage() {
  // const arrayData = await api.get('/admin/manage');
  const [userData, setUserData] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    userRole: '',
  });
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const { data } = await api.get('/admin/users');
        console.log('aaaaa', data);
        setRegisteredUsers(data.data);
      } catch (err) {
        localStorage.clear();
        navigate('/');
      }
    };
    getUsersData();
  }, [navigate]);

  const handleChange = ({ target }) => {
    setUserData({ ...userData, [target.name]: target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        authorization: token,
      },
    };
    const body = {
      name: userData.userName,
      email: userData.userEmail,
      password: userData.userPassword,
      role: userData.userRole,
    };
    await api.post('/admin/new-user', body, config);
    // const newUserData = await api.post('admin/new-user', body, config);
  };

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
        /* userName={  api informar o caminho para pegar o userName  } */
      />
      <h1> ADMIN / MANAGE </h1>
      <C.Form>
        <C.FormComponentsContainer htmlFor="userName">
          <span>Nome</span>
          {/* !!!! PARA EVITAR PLACEHOLDERS PODE SER INTERESSANTE COLOCAR UM SEGUNDO SPAN COM OUTRA ESTILIZAÇÃO PARA DAR O EXEMPLO DO MODELO QUE SE ESPERA DO ENDEREÇO */}
          <input
            name="userName"
            type="text"
            onChange={ handleChange }
            value={ userData.userName }
            data-testid="admin_manage__input-name"
          />
        </C.FormComponentsContainer>
        <C.FormComponentsContainer htmlFor="userEmail">
          <span>Email</span>
          <input
            name="userEmail"
            type="text"
            onChange={ handleChange }
            value={ userData.userEmail }
            data-testid="admin_manage__input-email"
          />
        </C.FormComponentsContainer>
        <C.FormComponentsContainer htmlFor="userPassword">
          <span>Senha</span>
          <input
            name="userPassword"
            type="password"
            onChange={ handleChange }
            value={ userData.userPassword }
            data-testid="admin_manage__input-password"
          />
        </C.FormComponentsContainer>
        <C.FormComponentsContainer htmlFor="userEmail">
          <span>Tipo</span>
          <select
            name="userRole"
            type="text"
            onChange={ handleChange }
            value={ userData.userEmail }
            data-testid="admin_manage__input-email"
          >
            <option value="Customer"> Cliente </option>
            <option value="Seller"> Vendedor </option>
            <option value="Admin"> Administrador </option>
          </select>
        </C.FormComponentsContainer>
        <div>
          <button
            type="submit"
            data-testid="customer_checkout__button-submit-order"
            onClick={ handleSubmit }
            disabled={ Object.values(userData).some((data) => data.length < 1) }
          >
            Cadastrar
          </button>
        </div>
      </C.Form>

      <C.Table>
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
            registeredUsers?.map((user, index) => (
              <tr key={ index }>
                <td
                  id={ user.id }
                  data-testid={
                    `admin_manage__element-user-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `admin_manage__element-user-table-name-${index}`
                  }
                >
                  {user.name}
                </td>
                <td
                  data-testid={
                    `admin_manage__element-user-table-email-${index}`
                  }
                >
                  {user.email}
                </td>
                <td
                  data-testid={
                    `admin_manage__element-user-table-role-${index}`
                  }
                >
                  {user.userRole}
                </td>
                <td>
                  <button
                    data-testid={ `admin_manage__element-user-table-remove-${index}` }
                    type="button"
                    aria-label="remove-item-button"
                    // onClick={ () => handleDeleteItemButtonClick(id) }
                  >
                    REMOVER
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </C.Table>
    </div>
  );
}

export default Manage;
