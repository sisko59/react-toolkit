import ButtonLink from './ButtonLink.component';
import { PREFIX } from '../../constants';
import { withClassModifier } from '@axa-fr/react-toolkit-core';
import { compose, withProps } from 'recompose';

const withClassName = withProps(({ classModifier, right }) => ({
  className: `${PREFIX}-btn`,
  defaultClassName: `${PREFIX}-btn`,
  classModifier: `${classModifier}${right ? ` has-icon-right` : ''}`
}));

const enhance = compose(
  withClassName,
  withClassModifier
);

const Enhanced = enhance(ButtonLink);

export default Enhanced;
