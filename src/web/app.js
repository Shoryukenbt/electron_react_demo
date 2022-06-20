import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Outlet, Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './module/login/index';

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}


const root = createRoot(document.getElementById('app-root'));
root.render(<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="login" element={<Login />} />
    </Route>
  </Routes>
</BrowserRouter>);