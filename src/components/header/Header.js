import React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { GrMail } from '@react-icons/all-files/gr/GrMail';

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
