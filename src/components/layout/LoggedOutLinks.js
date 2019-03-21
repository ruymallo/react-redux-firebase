import React from 'react';
import { NavLink } from 'react-router-dom';

import { SIGNUP_ROUTE, LOGIN_ROUTE } from '../layout/constants';


const LoggedOutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to={SIGNUP_ROUTE} >Sign Up</NavLink> </li>
      <li><NavLink to={LOGIN_ROUTE} >Log In</NavLink> </li>
    </ul>
  );
}

export default LoggedOutLinks;
