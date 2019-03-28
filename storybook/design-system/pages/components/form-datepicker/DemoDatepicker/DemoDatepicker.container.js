import { useState } from 'react';
import DemoDatepicker from './DemoDatepicker.component';
import { compose, withProps } from 'recompose';

const withStartDate = withProps(props => {
  const [startDate, handleChange] = useState(null);

  return {
    startDate,
    handleChangeFn: date => {
      console.log('HANDLE CHANGE', date);
      return handleChange(date);
    },
    maskChangeFn: () => console.log('handle mask')
  };
});

const enhance = compose(withStartDate);

export default enhance(DemoDatepicker);
