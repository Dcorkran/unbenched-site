import React, { Component } from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles data-test='nav'>
    <Link to='/'>Home</Link>
    <Link to='/join/'>Join</Link>
    <Link to='/events/'>Events</Link>
    <Link to='/sponsor/'>Sponsor</Link>
    <Link to='/about/'>About</Link>
    <Link to='/contact/'>Contact</Link>
    <Link to='/blog/'>Blog</Link>
  </NavStyles>
);

export default Nav;
