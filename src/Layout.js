import React, { useState, useEffect } from 'react';
import {Outlet} from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from './pages/components/navbar';

function Layout() {
  
  const [section, setSection] = useState("");
  const location = useLocation();

  useEffect(() =>{
    switch (location.pathname) {
      case '/destinations':
        setSection("destinations")
        break;
      case '/crew':
        setSection("crew")
        break;
      case '/technology':
        setSection("technology")
        break;
      default:
        setSection("home")
        break;
    }
  }, [location.pathname]);
  

  return (

      <div className={'layout '+ section}>
        <Navbar changeBg={section => setSection(section)}/>
        <div className={'main-container '+ section}>
          <Outlet/>
        </div>
      </div>

  );
}

export default Layout;
