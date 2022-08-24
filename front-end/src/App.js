import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route exact path="/" element={ <Navigate to="/login" /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
