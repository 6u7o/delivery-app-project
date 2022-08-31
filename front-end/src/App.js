import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Checkout from './Pages/Checkout';
import Manage from './Pages/Manage';
import CustomerOrdersDetails from './Pages/Orders.customer.details';
import CustomerOrders from './Pages/Orders.customer';
import SellerOrdersDetails from './Pages/Orders.sellers.details';
import SellerOrders from './Pages/Orders.sellers';
import Products from './Pages/Products';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
