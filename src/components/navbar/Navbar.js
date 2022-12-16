import { Link } from 'gatsby';
import React from 'react';

import * as navbarStyles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={ navbarStyles.container }>
      <nav>
        <div className={ navbarStyles.links }>
          <Link className={ navbarStyles.link } to="/">
            <span>home</span>
          </Link>
          <Link className={ navbarStyles.link } to="/about">
            <span>about</span>
          </Link>
          <Link className={ navbarStyles.link } to="/blog">
            <span>blog</span>
          </Link>
          <Link className={ navbarStyles.link } to="/photography">
            <span>photography</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
