import Content from './Content';
import { compose } from 'recompose';
import withClassMenu from '../../shared/withClassMenu';

const enhance = compose(withClassMenu('content'));

export default enhance(Content);
