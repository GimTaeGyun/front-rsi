import * as React from 'react';
import PropTypes from 'prop-types';
import TabList from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { number } from 'yup/lib/locale';
import { Divider } from '@mui/material';

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, padding: 0 }}>{children}</Box>}
    </div>
  );
}

interface TabPanel {
  children: React.ReactNode;
  index: number;
  value: number;
}

const allyProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

interface item {
  title: React.ReactNode;
  index: number;
}

const TabButton = (props: {
  item: Array<{
    title: string;
    index: number;
    child: JSX.Element;
  }>;
}) => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          mt:'-20px',
          mb: '28px',
        }}
      >
        <TabList
          className="sub_tabs_container"
          aria-label="simple tabs example"
          value={value}
          onChange={handleChange}
          disabled={false}
        >
          {props.item.map(item => (
            <Tab
              sx={{
                minHeight: '48px',
                opacity: '1',
                fontSize: '14px',
                color: '#00000099',
                ':hover': {
                  color: '#284AD5',
                },
                '.Mui-selected': {
                  color: '#284AD5',
                },
              }}
              label={item.title}
              value={item.index}
              {...allyProps(item.index)}
              key={item.index}
            />
          ))}
        </TabList>
        <Divider />
        {props.item.map((item, index) => (
          <TabPanel key={index} index={item.index} value={value}>
            {item.child}
          </TabPanel>
        ))}
      </Box>
    </>
  );
};

export default TabButton;
