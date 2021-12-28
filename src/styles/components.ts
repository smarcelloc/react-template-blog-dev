import { Components, Theme } from '@mui/material';

const componentsTheme = (theme: Theme): Components => {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        color: 'primary',
        variant: 'contained',
      },
    },
  };
};

export default componentsTheme;
