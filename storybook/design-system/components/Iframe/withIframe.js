import Iframe from './Iframe';

export default ({ condition, children }) =>
  condition ? <Iframe>{children}</Iframe> : children;
