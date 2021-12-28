import * as React from 'react';

import { styled } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';

const MyButton = styled(Button)(({ theme }) => ({
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderTop: `1px solid ${theme.palette?.divider}`,
  background: 'inherit',
}));

interface Props extends Omit<ButtonProps, 'color' | 'fullWidth'> {}

const ButtonMore: React.FC<Props> = (props: Props) => {
  return <MyButton fullWidth color="inherit" {...props} />;
};

export default ButtonMore;
