
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom';

const Root = () => {
     return (
          <div>
               <Navbar></Navbar>
               <Header></Header>
               <Outlet></Outlet>
          </div>
     );
};

export default Root;