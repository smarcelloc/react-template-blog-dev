import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';

import Tab from '../../../components/Tab';
import TabPanel from '../../../components/TabPanel';

const PostNew: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <Paper sx={{ borderRadius: 0 }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="tabs new post">
          <Tab label="Editor" index={0} />
          <Tab label="Preview" index={1} />
        </Tabs>
      </Paper>
      <Box mt={2}>
        <TabPanel value={value} index={0}>
          Form
        </TabPanel>
        <TabPanel value={value} index={1}>
          Preview
        </TabPanel>
      </Box>
    </Container>
  );
};

export default PostNew;
