import { useContext, useEffect } from 'react';
import { withProps } from 'recompose';
import { PREFIX } from '../constants';
import { AppContext } from '../components/App/App.context';

const classListChild = 'js-menu__list--child';
const classListClosed = 'js-menu__list--closed';
const heightAttribute = 'data-height';

const setHeight = ({ target }) => {
  const next = target.nextSibling;
  if (!next.classList.contains(classListChild)) {
    return;
  }
  if (isOpen(target)) {
    setClose(next, target);
  } else {
    setOpen(next, target);
  }
};

const isOpen = target => !target.classList.contains(classListClosed);

const setClose = (next, target) => {
  target.classList.add(classListClosed);
  next.style.height = 0;
};

const setOpen = (next, target) => {
  target.classList.remove(classListClosed);
  next.style.height = `${next.getAttribute(heightAttribute)}px`;
};

const getMenuClosers = () => document.querySelectorAll('.js-menu__item-text');
const getMenusChildren = () => document.querySelectorAll(`.${classListChild}`);

const initMenuChildren = () => {
  const menusChildren = getMenusChildren();
  [].forEach.call(menusChildren, elt => {
    elt.style.height = `${elt.offsetHeight}px`;
    if (elt.offsetHeight !== 0) {
      elt.setAttribute(heightAttribute, elt.offsetHeight);
    }
  });
};

const initMenuClosers = () => {
  const menuClosers = getMenuClosers();
  [].forEach.call(menuClosers, elt => {
    elt.addEventListener('click', setHeight);
  });
};

const initMenu = () => {
  initMenuChildren();
  initMenuClosers();
};

export default block =>
  withProps(props => {
    const { isOpen } = useContext(AppContext);
    const classBase = `${PREFIX}-${block}`;

    useEffect(() => {
      initMenu();
    });

    return {
      classMenu: `${classBase}${isOpen ? ` ${classBase}--opened` : ''}`
    };
  });
