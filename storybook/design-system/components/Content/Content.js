import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './content.scss';
import HeaderLinks from 'components/HeaderLinks';

const Content = ({ children, classMenu }) => (
  <>
    <Header>
      <HeaderLinks />
    </Header>
    <main className={classMenu}>{children}</main>
    <Footer />
  </>
);

export default Content;
