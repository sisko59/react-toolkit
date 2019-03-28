import React from 'react';
import { PREFIX } from '../../constants';

const Color = ({ name, sass, hex }) => (
  <div className={`${PREFIX}-color`}>
    <div
      className={`${PREFIX}-color__pantone`}
      style={{ backgroundColor: hex }}
    />
    <span className={`${PREFIX}-color__name`}>{name}</span>
    <span className={`${PREFIX}-color__hex`}>{hex}</span>
    <span className={`${PREFIX}-color__sass`}>{sass}</span>
  </div>
);

export default Color;
