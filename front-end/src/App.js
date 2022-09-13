import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './Assets/Styles/themes/default';
import GlobalStyles from './Assets/Styles/global';
import './App.css';

import Login from './Pages/Login/Login';
import Register from './Pages/Register';
import Checkout from './Pages/Checkout';
import Manage from './Pages/Manage';
import CustomerOrdersDetails from './Pages/CustomerOrderDetails/Orders.customer.details';
import CustomerOrders from './Pages/CustomerOrders/Orders.customer';
import SellerOrdersDetails from './Pages/SellerOrderDetails/Orders.sellers.details';
import SellerOrders from './Pages/SellerOrders/Orders.sellers';
import Products from './Pages/Products/Products';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={ defaultTheme }>
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route exact path="/" element={ <Navigate to="/login" /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/customer/products" element={ <Products /> } />
          <Route path="/customer/orders" element={ <CustomerOrders /> } />
          <Route path="/customer/orders/:id" element={ <CustomerOrdersDetails /> } />
          <Route path="/customer/checkout" element={ <Checkout /> } />
          <Route path="/seller/orders" element={ <SellerOrders /> } />
          <Route path="/seller/orders/:id" element={ <SellerOrdersDetails /> } />
          <Route path="/admin/manage" element={ <Manage /> } />
        </Routes>
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
