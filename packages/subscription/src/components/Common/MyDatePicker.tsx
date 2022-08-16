import * as React from 'react';
import OutlinedInput from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers-pro';

const MyDatePicker = (props: {
  strId: string;
  strClass: string;
  strName: string;
  strPlaceholder: string;
  objSX: object | null;
  value: Date;
  onChange?: Function;
}) => {
  const [value, setValue] = React.useState<Date | null>(props.value);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        reduceAnimations={true}
        label=""
        inputFormat="yyyy-MM-dd"
        value={value}
        onChange={e => {
          props.onChange ? props.onChange(e) : '';
          setValue(e);
        }}
        renderInput={params => (
          <OutlinedInput
            type="date"
            fullWidth={false}
            id={props.strId}
            placeholder={props.strPlaceholder}
            name={props.strName}
            className={props.strClass}
            sx={props.objSX}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default MyDatePicker;
