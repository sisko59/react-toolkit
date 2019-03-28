import React from 'react';
import './footer.scss';
import { PREFIX } from '../../constants';

const Footer = ({ classMenu }) => {
  return (
    <footer className={classMenu}>
      <span className={`${PREFIX}-footer__privacy`}>
        Privacy Policy © 2019 AXA All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
