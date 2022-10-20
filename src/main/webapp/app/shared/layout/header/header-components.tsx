import React from 'react';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

export const BrandIcon = props => (
  <div {...props} className="brand-icon">
    <img src="content/images/logo-jhipster.png" alt="Logo" />
  </div>
);

export const Brand = () => (
  <NavbarBrand tag={Link} to="/" className="brand-logo">
    <BrandIcon />
  </NavbarBrand>
);

export const Home = () => (
  <>
    <NavItem>
      <NavLink tag={Link} to="/" className="d-flex align-items-center">
        <span>Sobre Nós</span>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="/" className="d-flex align-items-center">
        <span>Termos de Uso</span>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="/" className="d-flex align-items-center">
        <span>Fale Conosco</span>
      </NavLink>
    </NavItem>
  </>
);
