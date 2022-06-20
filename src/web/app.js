import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Outlet, Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './module/login/index';
import { Home } from './module/home/index';
import { UserList } from './module/user/list';
import { CreateAccount } from './module/user/create';

const root = createRoot(document.getElementById('app-root'));
root.render(<BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Home />}>
      <Route path="save" element={<CreateAccount />} />
      <Route path="users" element={<UserList />} />
    </Route>
    <Route path="*" element={<Login />} />
  </Routes>
</BrowserRouter>);