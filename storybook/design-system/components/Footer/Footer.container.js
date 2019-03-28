import Footer from './Footer.component';
import { compose } from 'recompose';
import withClassMenu from '../../shared/withClassMenu';

const enhance = compose(withClassMenu('footer'));

export default enhance(Footer);
