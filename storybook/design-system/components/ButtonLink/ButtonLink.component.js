import React from 'react';
import Link from 'next/link';
import { PREFIX } from '../../constants';
import './buttonlink.scss';
import IconSvg from '../IconSvg';

const ButtonLink = ({ href, label, iconName, target, className }) => (
  <Link href={href}>
    <a target={target} className={className}>
      <IconSvg className={`${PREFIX}-btn__icon`} name={iconName} />
      <span className={`${PREFIX}-btn__text`}>{label}</span>
    </a>
  </Link>
);

export default ButtonLink;
