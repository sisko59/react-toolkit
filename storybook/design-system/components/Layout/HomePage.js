import Menu from '../Menu';
import App from '../App';
import Content from '../Content';

import '../../assets/scss/global.scss';

const Layout = ({ children }) => (
  <App>
    <Menu />
    <Content>{children}</Content>
  </App>
);

export default Layout;
