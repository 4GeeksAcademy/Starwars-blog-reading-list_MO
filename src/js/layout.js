import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Context } from './store/appContext';
import Home from './views/Home';
import Demo from './views/demo';

const Layout = () => {
  return (
    <BrowserRouter>
      <Context.Provider value={{ /* tu contexto */ }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          {/* otros enrutamientos */}
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
};

export default Layout;
