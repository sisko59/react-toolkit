import { compose } from 'recompose';
import { withRouter } from 'next/router';
import { AppContext } from '../App/App.context';

import Menu from './Menu.component';
import withClassMenu from '../../shared/withClassMenu';
import withContextToProps from '../../shared/withContextToProps';

const enhance = compose(
  withRouter,
  withClassMenu('menu'),
  withContextToProps(AppContext, ['isOpen', 'toggleMenu'])
);

const Enhanced = enhance(Menu);
Enhanced.displayName = 'EnhancedMenu';

export default Enhanced;
