import * as React from 'react';
import OutlinedInput from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const MyDatePicker = (props:{strId:string,strClass:string, strName:string,strPlaceholder:string, objSX:object | null}) => {
  const [value, setValue] = React.useState<Date | null>(
    null,
  );

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label=""
          inputFormat="yyyy-MM-dd"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <OutlinedInput
            type="date"
            fullWidth={false}
            id={props.strId}
            placeholder={props.strPlaceholder}
            name={props.strName}
            className={props.strClass}
            sx={props.objSX}
            {...params}
          />}
        />
    </LocalizationProvider>
  );
}

export default MyDatePicker;
