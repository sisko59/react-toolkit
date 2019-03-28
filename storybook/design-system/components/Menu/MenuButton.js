import React from 'react';

import crossImg from '../../assets/icons/cross-gap.svg';
import menuImg from '../../assets/icons/menu.svg';
import { PREFIX } from '../../constants';

const OpenButton = ({ toggleMenu }) => (
  <img className={`${PREFIX}-menu__open`} src={menuImg} onClick={toggleMenu} />
);
const CloseButton = ({ toggleMenu }) => (
  <img
    className={`${PREFIX}-menu__close`}
    src={crossImg}
    onClick={toggleMenu}
  />
);

const MenuButton = ({ isOpen, toggleMenu }) => (
  <>
    {isOpen ? (
      <CloseButton toggleMenu={toggleMenu} />
    ) : (
      <OpenButton toggleMenu={toggleMenu} />
    )}
  </>
);

export default MenuButton;
