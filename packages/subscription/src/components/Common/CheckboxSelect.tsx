import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';

const CheckboxSelect = (props:{names:Array<string>,value:string[],width:number,margin:string,onChangeHandler:Function}) => {
  const [itemName, setItemName] = React.useState<string[]>(props.value);

  const handleChange = (event: SelectChangeEvent<typeof itemName>) => {
    const {
      target: { value },
    } = event;
    setItemName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    props.onChangeHandler()
  };

  return (
      <FormControl sx={{ m: props.margin, width: props.width }}>
        <Select
          className="sub_select_common sub_listpage_filter_list2"
          multiple
          value={itemName}
          onChange={handleChange}
          input={<OutlinedInput
            type="text"
            fullWidth={false}
            className="selectInputMultiple"
          />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={{
            PaperProps: {
              style: {
                overflow:"hidden",
                width: props.width,
              },
            },
          }}
        >
          {props.names.map((name) => (
            <MenuItem className="selectMenuItem" key={name} value={name}>
              <Checkbox checked={itemName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}

export default CheckboxSelect;