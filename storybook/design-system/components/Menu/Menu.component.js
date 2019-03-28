import React from 'react';
import Link from 'next/link';
import './Menu.scss';
import { main, layouts, style, components, form, structure } from './constants';
import { PREFIX } from '../../constants';
import MenuButton from './MenuButton';

const getMenu = ({ menu, isChild = false, activePath = '/' }) => (
  <ul
    className={`${PREFIX}-menu__list${
      isChild ? ` ${PREFIX}-menu__list--child js-menu__list--child` : ''
    }`}
    role="menu"
  >
    {menu &&
      menu.map(({ href, label, childsmenu }) => (
        <CustomLink
          key={label}
          label={label}
          href={href}
          childsmenu={childsmenu}
          activePath={activePath}
        />
      ))}
  </ul>
);

const CustomLink = ({ href, label, childsmenu, activePath }) => (
  <li
    className={`${PREFIX}-menu__item${
      activePath === href ? ` ${PREFIX}-menu__item--active` : ''
    }`}
  >
    {href ? (
      <Link as={href} href={href}>
        <a className={`${PREFIX}-menu__item-link`}>{label}</a>
      </Link>
    ) : (
      <span className={`${PREFIX}-menu__item-text js-menu__item-text`}>
        {label}
      </span>
    )}
    {childsmenu &&
      childsmenu.length &&
      getMenu({ menu: childsmenu, isChild: true, activePath })}
  </li>
);

const Menu = ({ classMenu, toggleMenu, isOpen, router: { pathname } }) => (
  <div className={classMenu}>
    <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
    <nav className="tk-menu__nav">
      {getMenu({ menu: main, activePath: pathname })}
      {getMenu({ menu: layouts, activePath: pathname })}
      {getMenu({ menu: style, activePath: pathname })}
      {getMenu({ menu: structure, activePath: pathname })}
      {getMenu({ menu: components, activePath: pathname })}
      {getMenu({ menu: form, activePath: pathname })}
    </nav>
  </div>
);

export default Menu;
