import { useState, useEffect } from 'react';
import Code from './Code.component';
import { compose, withProps } from 'recompose';
import { highlightCode } from './Code.helper';

const withCopy = withProps(props => {
  const [copied, setCopy] = useState(false);
  useEffect(() => {
    highlightCode();
  });
  return {
    copied,
    setCopyFn: () => {
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 2000);
    }
  };
});

const enhance = compose(withCopy);

export default enhance(Code);
