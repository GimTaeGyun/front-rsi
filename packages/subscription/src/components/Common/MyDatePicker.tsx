import * as React from 'react';
import OutlinedInput from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers-pro';
import { useState } from 'react';

const MyDatePicker = (props: {
  strId: string;
  strClass: string;
  strName: string;
  strPlaceholder: string;
  objSX: object | null;
  value: string;
  onChange?: Function;
}) => {
  const [active, setActive] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        reduceAnimations={true}
        inputFormat="yyyy-MM-dd"
        value={props.value}
        onChange={e => {
          props.onChange ? props.onChange(e) : '';
        }}
        componentsProps={{
          actionBar: {
            actions: ['today'],
          },
        }}
        renderInput={params => (
          <OutlinedInput
            type="date"
            fullWidth={false}
            id={props.strId}
            placeholder={props.strPlaceholder}
            name={props.strName}
            className={props.strClass}
            sx={{
              ...props.objSX,
              svg: { color: `${active ? '#1976d2' : ''}` },
              fieldset: {
                borderColor: `${active ? '#1976d2 !important' : ''}`,
                borderWidth: `${active ? '2px !important' : ''}`,
              },
            }}
            {...params}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
          />
        )}
        onOpen={() => setActive(true)}
        onClose={() => setActive(false)}
      />
    </LocalizationProvider>
  );
};

export default MyDatePicker;
