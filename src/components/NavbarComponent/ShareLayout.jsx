import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

const ShareLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default ShareLayout;
