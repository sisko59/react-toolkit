import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import MaskedInput from 'react-maskedinput';

moment.locale('fr');
moment.updateLocale('fr', {
  weekdaysMin: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
});

const DemoDatepicker = ({ startDate, handleChangeFn, maskChangeFn }) => (
  <DatePicker
    className="af-datepicker"
    selected={startDate}
    onChange={handleChangeFn}
    dateFormatCalendar={'DD/MM/YYYY'}
    tabIndex={1}
    fixedHeight
    showMonthDropdown
    showYearDropdown
    readOnly={false}
    autoFocus={false}
    todayButton={"Aujourd'hui"}
    popperPlacement={'right-start'}
    yearDropdownItemNumber={6}
    customInput={
      <MaskedInput
        mask="11/11/1111"
        name="date"
        size="20"
        onChange={maskChangeFn}
      />
    }
  />
);

export default DemoDatepicker;
