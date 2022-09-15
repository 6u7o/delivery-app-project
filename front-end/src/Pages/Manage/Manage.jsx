import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../Components/Header/Header';
import api from '../../services/request';
import * as C from './styles';

const userDataStructure = {
  userName: '',
  userEmail: '',
  userPassword: '',
  userRole: 'customer' };
const formFieldsMin = { name: 12, password: 6 };
const filtersStateStructure = { filtRole: '', filterText: '', applyFilter: false };

const fieldsTranslation = { seller: 'Vendedor',
  administrator: 'Administrador',
  customer: 'Cliente' };

function Manage() {
  // const arrayData = await api.get('/admin/manage');
  const [userData, setUserData] = useState(userDataStructure);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [filters, setFilters] = useState(filtersStateStructure);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const { data } = await api.get('admin/users');
        setRegisteredUsers(data);
      } catch (err) {
        localStorage.clear();
        navigate('/');
      }
    };
    getUsersData();
    setUserData(userDataStructure);
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
    try {
      await api.post('/admin/new-user', body, config);
      toast.success('usuário cadastrado com sucesso');
      setUserData(userDataStructure);
      setRegisteredUsers([...registeredUsers, body]);
    } catch (err) {
      // console.log('response', err.response);
      // console.log('request', err.request);
      toast.error('dados inválidos');
    }
  };

  const handleFilter = ({ target }) => {
    setFilters({ ...filters, [target.name]: target.value });
  };

  const handleDeleteItemButtonClick = async (id) => {
    // event.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      headers: { authorization: token },
    };
    await api.delete(`/admin/${id}`, {}, config);
    toast.success('usuário removido com sucesso');
    setRegisteredUsers(registeredUsers.filter(({ id: userId }) => id !== userId));
  };

  const validateFormData = ({ userName, userEmail, userPassword, userRole }) => !(
    userName?.length > formFieldsMin.name && userPassword?.length > formFieldsMin.password
      && userEmail.match(/^\S+@\S+\.\S+$/) && userRole
  );

  return (
    <C.Container>
      <Header
        array={ [{
          label: 'GERENCIAR USUÁRIOS',
          route: '/admin/manage',
          aria: 'manage-button',
          name: 'manage-button',
          dataTestId: 'customer_products__element-navbar-link-orders',
        }] }
      />
      <h3> Cadastrar novo usuário </h3>
      <C.Form>
        <C.FormComponentsContainer htmlFor="userName">
          <span>Nome</span>
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
            type="email"
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
            value={ userData.userRole }
            data-testid="admin_manage__input-email"
          >
            <option value="customer"> Cliente </option>
            <option value="seller"> Vendedor </option>
            <option value="administrator"> Administrador </option>
          </select>
        </C.FormComponentsContainer>
        <div>
          <button
            type="submit"
            data-testid="customer_checkout__button-submit-order"
            onClick={ handleSubmit }
            disabled={ validateFormData(userData) }
          >
            Cadastrar
          </button>
        </div>
      </C.Form>

      <h3> Lista de usuários </h3>
      <div className="filters-container">
        <h4>
          Buscar:
        </h4>
        <C.FormComponentsContainer htmlFor="filtRole">
          <h5> Tipo </h5>
          <select name="filtRole" value={ filters.filtRole } onChange={ handleFilter }>
            <option value="">selecionar</option>
            <option value="administrator">Admin</option>
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
          </select>
        </C.FormComponentsContainer>
        <C.FormComponentsContainer htmlFor="filterText">
          <h5>Adicione um nome ou email</h5>
          <input
            type="text"
            value={ filters.filterText }
            onChange={ handleFilter }
            name="filterText"
          />
        </C.FormComponentsContainer>
      </div>
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
            registeredUsers?.filter(({ name, email, role }) => {
              let validText = true;
              let validRole = true;
              if (filters.filterText?.length > 0) {
                validText = email.toLowerCase().includes(filters.filterText.toLowerCase())
                || (name.toLowerCase().includes(filters.filterText.toLowerCase()));
              }
              if (filters.filtRole.length > 0) validRole = role === filters.filtRole;
              return (validText && validRole);
            }).map((user, index) => (
              <tr key={ index }>
                <td
                  id={ user.id }
                  data-testid={ `admin_manage__element-user-table-item-number-${index}` }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-name-${index}` }
                >
                  {user.name}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-email-${index}` }
                >
                  {user.email}
                </td>
                <td
                  data-testid={ `admin_manage__element-user-table-role-${index}` }
                >
                  {fieldsTranslation[user.role]}
                </td>
                <td>
                  <button
                    data-testid={ `admin_manage__element-user-table-remove-${index}` }
                    type="button"
                    aria-label="remove-item-button"
                    value={ user.id }
                    onClick={ () => handleDeleteItemButtonClick(user.id) }
                  >
                    REMOVER
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </C.Table>
      <Toaster />
    </C.Container>
  );
}

export default Manage;
