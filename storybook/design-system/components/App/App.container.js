import { compose } from 'recompose';
import withMenu from '../../shared/withMenu';
import App from './App.component';

const enhance = compose(withMenu);
const EnhancedApp = enhance(App);
EnhancedApp.displayName = 'WithContextApp';

export default EnhancedApp;
