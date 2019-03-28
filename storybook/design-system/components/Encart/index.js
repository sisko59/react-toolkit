import React from 'react';
import { PREFIX } from '../../constants';
import './encart.scss';

const Encart = ({ image, title, text }) => (
  <article className={`${PREFIX}-encart`}>
    <img className={`${PREFIX}-encart__image`} alt={image} src={image} />
    <h3 className={`${PREFIX}-encart__title`}>{title}</h3>
    <p className={`${PREFIX}-encart__text`}>{text}</p>
  </article>
);

export default Encart;
