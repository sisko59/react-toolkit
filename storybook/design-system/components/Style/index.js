import React from 'react';
import { PREFIX } from '../../constants';
import { Colors } from 'components/Colors';
import Markdown from 'components/Markdown';

const Style = ({ colors, typography, structure, files }) => (
  <div className={`${PREFIX}-style`}>
    <Colors colors={colors} />
    <Markdown source={typography} />
    <Markdown source={structure} />
  </div>
);

export default Style;
