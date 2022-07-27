import React from 'react';
import { Checkbox } from "@mui/material";

const MyCheckbox = (props: { error: boolean; [x: string]: any }) => {
  const { error, ...rest } = props;
  return (
    <Checkbox
      {...rest}
      icon={
        !error ? (
          <img
            src="/assets/images/checkbox_default.png"
            alt="checkbox_default"
          />
        ) : (
          <img src="/assets/images/checkbox_error.png" alt="checkbox_error" />
        )
      }
      checkedIcon={
        <img src="/assets/images/checkbox_checked.png" alt="checkbox_checked" />
      }
      sx={{
        p: "0",
        mt: "2px",
        ml: "30px",
        mr: "8px"
      }}
    />
  );
};

export default MyCheckbox;
