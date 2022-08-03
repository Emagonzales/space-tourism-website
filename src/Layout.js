import React, { useState } from 'react';
import {Outlet} from "react-router-dom";
import Navbar from './pages/components/navbar';

function Layout() {

  const [sectionBg, setSectionBg] = useState("layout home");

  return (
    <div className={sectionBg}>
      <Navbar changeBg={sectionBg => setSectionBg(sectionBg)}/>
      <Outlet />
    </div>
  );
}

export default Layout;
