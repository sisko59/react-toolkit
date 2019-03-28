import React from 'react';
import { PREFIX } from '../../constants';
import Color from './Color.component';
import './colors.scss';

const Colors = ({ colors }) => (
  <div className={`${PREFIX}-colors`}>
    <h2 className={`${PREFIX}-colors__title`}>Colors</h2>
    <div className={`${PREFIX}-colors__list`}>
      {colors.map(({ name, sass, hex }) => (
        <Color key={name} name={name} sass={sass} hex={hex} />
      ))}
    </div>
  </div>
);

export default Colors;
