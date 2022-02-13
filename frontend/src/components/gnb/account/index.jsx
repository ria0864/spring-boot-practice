import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './login';
import Register from './register';

function Account() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default Account;
