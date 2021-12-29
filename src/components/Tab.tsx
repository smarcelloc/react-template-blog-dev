import * as React from 'react';

import MuiTab, { TabProps } from '@mui/material/Tab';

interface Props extends Omit<TabProps, 'id' | 'aria-controls' | 'value'> {
  index: number;
}

const Tab: React.FC<Props> = ({ children, index, ...rest }: Props) => {
  return (
    <MuiTab
      aria-controls={`tabpanel-${index}`}
      value={index}
      id={`tab-${index}`}
      {...rest}>
      {children}
    </MuiTab>
  );
};

export default Tab;
