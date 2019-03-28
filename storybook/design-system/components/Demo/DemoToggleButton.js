import React from 'react';

import reduceImg from '../../assets/icons/cross-full.svg';
import expandImg from '../../assets/icons/full-screen.svg';
import { PREFIX } from '../../constants';

const OpenButton = ({ toggleExpand }) => (
  <img
    className={`${PREFIX}-demo__open`}
    src={expandImg}
    onClick={toggleExpand}
  />
);
const CloseButton = ({ toggleExpand }) => (
  <img
    className={`${PREFIX}-demo__close`}
    src={reduceImg}
    onClick={toggleExpand}
  />
);

const DemoToggleButton = ({ isExpanded, toggleExpand }) => (
  <>
    {isExpanded ? (
      <CloseButton toggleExpand={toggleExpand} />
    ) : (
      <OpenButton toggleExpand={toggleExpand} />
    )}
  </>
);

export default DemoToggleButton;
