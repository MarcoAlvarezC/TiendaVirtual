import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Home } from '../pages'
export const MainRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
    </BrowserRouter>
  );
};
