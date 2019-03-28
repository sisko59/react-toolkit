import Logo from './Logo';
import { PREFIX } from '../../constants';
import { compose, withProps } from 'recompose';
import { withClassModifier } from '@axa-fr/react-toolkit-core';

const withClassName = withProps({
  className: `${PREFIX}-logo`,
  defaultClassName: `${PREFIX}-logo`
});

const enhance = compose(
  withClassName,
  withClassModifier
);

const Enhanced = enhance(Logo);

export default Enhanced;
