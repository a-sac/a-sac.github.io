import React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { GrMail } from '@react-icons/all-files/gr/GrMail';

import footerStyles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={ footerStyles.footer }>
      <div className={ footerStyles.social }>
        <a
          href="https://github.com/a-sac"
          rel="noopener noreferrer"
          target="_blank"
          className={ footerStyles.icon }
        >
          <FaGithub size='25'/>
        </a>
        <a
          href="https://twitter.com/sergio_alvesc"
          rel="noopener noreferrer"
          target="_blank"
          className={ footerStyles.icon }
        >
          <FaTwitter size='25'/>
        </a>
        <a
          href="mailto:asergioalvesc@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className={ footerStyles.icon }
        >
          <GrMail size='25'/>
        </a>
      </div>
      <div>
        © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
