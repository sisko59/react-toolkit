import { useState } from 'react';
import { compose, withProps } from 'recompose';
import Code from './Demo.component';
import { PREFIX } from '../../constants';
import { withClassModifier } from '@axa-fr/react-toolkit-core';

const withCopy = withProps(props => {
  const [isExpanded, toggleExpand] = useState(false);

  return {
    isExpanded,
    classExpanded: `${PREFIX}-demo__display ${
      isExpanded ? ` ${PREFIX}-demo__display--fullscreen` : ''
    }`,
    toggleExpandFn: () => toggleExpand(!isExpanded)
  };
});

const withClassName = withProps({
  className: `${PREFIX}-demo__template`,
  defaultClassName: `${PREFIX}-demo__template`
});

const enhance = compose(
  withCopy,
  withClassName,
  withClassModifier
);

export default enhance(Code);
