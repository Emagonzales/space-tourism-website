import React, { useState } from 'react';
import {Outlet} from "react-router-dom";
import Navbar from './pages/components/navbar';

function Layout() {

  const [section, setSection] = useState("home");

  return (
    <div className={'layout '+ section}>
      <Navbar changeBg={section => setSection(section)}/>
      <div className={'main-container '+ section}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
