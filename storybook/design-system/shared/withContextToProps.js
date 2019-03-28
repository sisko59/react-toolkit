import { useContext } from 'react';
import { withProps } from 'recompose';

export default (context, allowedProps) =>
  withProps(props => {
    const contextProps = useContext(context);
    const filtered = setFilteredContext(contextProps, allowedProps);
    return filtered;
  });

const setFilteredContext = (context, contextProps) =>
  Object.keys(context)
    .filter(key => contextProps.includes(key))
    .reduce((obj, key) => {
      obj[key] = context[key];
      return obj;
    }, {});
