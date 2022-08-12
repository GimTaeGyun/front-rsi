import * as React from 'react';
import PropTypes from 'prop-types';
import TabList from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { number } from 'yup/lib/locale';

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
      {value === index && (
        <Box sx={{ p: 3, padding: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <h3>나의 글</h3>
      <Box
        sx={{
          width: '100%',
          height: '48px',
          position: 'static',
          mb: '20px',
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            aria-label="simple tabs example"
            value={value}
            onChange={handleChange}
            disabled={false}
          >
            {props.item.map(item => (
              <Tab
                sx={{
                  minWidth: '100px',
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
          <Box>
            {props.item.map(item => (
              <TabPanel index={item.index} value={value}>
                {item.child}
              </TabPanel>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TabButton;
