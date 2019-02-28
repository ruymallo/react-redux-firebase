import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/create" >New Project</NavLink> </li>
      <li><NavLink to="/" >Log Out</NavLink> </li>
      <li><NavLink to="/" className="btn btn-floating pink" >RUY</NavLink> </li>
    </ul>
  );
}

export default LoggedInLinks;
