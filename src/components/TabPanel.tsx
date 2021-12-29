import * as React from 'react';

import Box, { BoxProps } from '@mui/material/Box';

interface Props extends Omit<BoxProps, 'role' | 'hidden' | 'aria-labelledby'> {
  value: number;
  index: number;
}

const TabPanel: React.FC<Props> = ({
  children,
  value,
  index,
  ...rest
}: Props) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...rest}>
      {value === index && <>{children}</>}
    </Box>
  );
};

export default TabPanel;
