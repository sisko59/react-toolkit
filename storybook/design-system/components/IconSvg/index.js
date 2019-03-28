import React from 'react';
import sprite from '@axa-fr/react-toolkit-core/dist/assets/icons-sprite.svg';

const IconSvg = ({ className, name }) => (
  <svg className={className} viewBox="0 0 16 16">
    {name && <use xlinkHref={`${sprite}#${name}`} />}
  </svg>
);

export default IconSvg;
