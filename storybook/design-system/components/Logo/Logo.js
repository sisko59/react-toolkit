import React from 'react';
import PropTypes from 'prop-types';
import { PREFIX } from '../../constants';
import './logo.scss';

const Logo = ({ className, icon, title, subtitle }) => (
  <div className={className}>
    <img src={icon} alt={icon} className={`${PREFIX}-logo__img`} />
    <div className={`${PREFIX}-logo__title`}>
      <h2 className={`${PREFIX}-logo__name`}>{title}</h2>
      {subtitle && <h3 className={`${PREFIX}-logo__subtitle`}>{subtitle}</h3>}
    </div>
  </div>
);

Logo.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

Logo.defaultProps = {
  subtitle: ''
};

export default Logo;
