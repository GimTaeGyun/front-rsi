import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import OutlinedInput from '@mui/material/TextField';
import { width } from '@mui/system';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers-pro';
import * as React from 'react';
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
        minDate={new Date('1900-01-01')}
        maxDate={new Date('2099-12-31')}
        inputFormat="yyyy-MM-dd"
        value={props.value}
        showDaysOutsideCurrentMonth={true}
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
              svg: { color: `${active ? '#1976d2' : '#000000'}` },
              fieldset: {
                borderColor: `${active ? '#284AD5 !important' : ''}`,
                borderWidth: `${active ? '1px !important' : ''}`,
              },
              fontFamily: 'NotoSansKRReguler',
              fontSize: '13px',
            }}
            {...params}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
          />
        )}
        onOpen={() => setActive(true)}
        onClose={() => setActive(false)}
        components={{
          LeftArrowIcon: ArrowUpwardIcon,
          RightArrowIcon: ArrowDownwardIcon,
        }}
        PopperProps={{
          sx: {
            width: '244px',
            height: '328px',
            '.MuiPaper-root': {
              borderRadius: '6px',
              boxShadow: '0px 3px 3px #0000002E',
            },
            '.MuiYearPicker-root .PrivatePickersYear-root:first-child': {
              padding: '0px !important',
            },
            '.MuiCalendarPicker-root': {
              width: '244px',
              margin: '0px',
            },
            '.MuiCalendarPicker-root div:first-child': {
              paddingLeft: '15px',
              paddingRight: '20px',
              marginTop: '17px',
              marginBottom: '0px',
              color: '#000000DE !important',
            },
            '.MuiCalendarPicker-root div[role="presentation"]': {
              fontFamily: 'NotoSansKRMedium',
              fontSize: '14px',
              paddingLeft: '0px',
              letterSpacing: '0px',
              marginTop: '0px',
              lineHeight: '22px',
            },
            '.MuiCalendarPicker-root div[role="presentation"] div[aria-live="polite"]':
              { padding: '0px', margin: '0px' },
            '.MuiCalendarPicker-root div[role="presentation"] .MuiPickersArrowSwitcher-root':
              { width: '24px', height: '24px' },
            '.MuiCalendarPicker-root div[role="presentation"] button': {
              padding: '0px',
              width: '24px',
              height: '24px',
            },
            '.MuiPickersArrowSwitcher-spacer': { width: '8px' },
            '.MuiPickersArrowSwitcher-root button': { padding: '0px' },
            '.MuiCalendarPicker-root div:last-child': { height: '100%' },
            '.MuiCalendarPicker-root div:last-child div:first-child': {
              marginTop: '0px',
              paddingLeft: '8px',
              paddingRight: '14px',
            },
            '.MuiCalendarPicker-root div:last-child .PrivatePickersSlideTransition-root':
              { minHeight: 'calc(100% - 52px)', height: 'calc(100% - 52px)' },
            '.MuiCalendarPicker-root div:last-child div[role="grid"]': {
              marginTop: '0px',
              height: 'calc(100% - 52px)',
            },
            '.MuiCalendarPicker-root div:last-child div[role="grid"] div[role="row"]':
              {
                margin: '0px',
                padding: '0px',
                justifyContent: 'space-around',
              },
            '.MuiCalendarPicker-root div:last-child div:first-child .MuiTypography-root':
              {
                fontFamily: 'NotoSansKRRegular',
                fontSize: '14px',
                lineHeight: '20px',
                color: '#000000DE',
              },
            '.MuiCalendarPicker-root div:last-child div[role="cell"]': {
              padding: '0px',
              margin: '0px',
              width: '28px',
              height: '28px',
            },
            '.MuiCalendarPicker-root div:last-child div[role="cell"] .MuiPickersDay-root':
              {
                width: '28px',
                height: '28px',
                marginLeft: '0px',
                marginRight: '0px',
              },
            '.MuiCalendarPicker-root div:last-child div[role="cell"] .MuiPickersDay-hiddenDaySpacingFiller':
              { width: '28px', height: '28px', margin: '0px' },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default MyDatePicker;
