import { compose } from 'recompose';
import { ComponentContext } from '../Layout/ComponentPage/Component.context';

import HeaderLinks from './HeaderLinks.component';
import withContextToProps from '../../shared/withContextToProps';

const enhance = compose(
  withContextToProps(ComponentContext, ['github', 'storybook', 'npm'])
);

const Enhanced = enhance(HeaderLinks);
Enhanced.displayName = 'EnhancedHeaderLinks';

export default Enhanced;
