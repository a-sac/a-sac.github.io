import React from 'react';

import headerStyles from './header.module.css';

const Header = () => {
  return (
    <div className={ headerStyles.container }>
      <div className={ headerStyles.links }>
        <span>home</span>
      </div>
    </div>
  );
};

export default Header;
