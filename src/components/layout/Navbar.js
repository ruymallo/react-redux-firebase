import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInLinks from './LoggedInLinks'
import LoggedOutLinks from './LoggedOutLinks'
import { connect } from 'react-redux';

const Navbar = ({firebase}) => {
  return(
    <nav className="nav-wrapper grey darken-3" >
      <div className="container">
        <Link to="/" className="brand-logo" >MarioPlan</Link>
        <LoggedInLinks />
        <LoggedOutLinks />
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  firebase: state.firebase
});



export default connect(mapStateToProps)(Navbar);
