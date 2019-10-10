import React, { Component } from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles data-test='nav'>
    <Link to='/'>Home</Link>
    <Link to='/join/'>Join</Link>
    <Link to='/sponsors/'>Sponsors</Link>
  </NavStyles>
);

export default Nav;
