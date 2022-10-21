import React from 'react';
import { NavLink } from 'react-router-dom';
import mic from '../../images/mic.png';
import back from '../../images/back.png';
import setting from '../../images/setting.png';
import './Navbar.css';

const Navbar = () => (
  <div className="navigation">
    <NavLink to="/" element>
      <img className="btn" src={back} alt="user" />
    </NavLink>
    <h2 className="heading">Componies</h2>

    <div className="position">
      <img className="btn" src={mic} alt="user" />
      <img className="btn" src={setting} alt="user" />
    </div>
  </div>
);

export default Navbar;
