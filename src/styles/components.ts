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
        disableElevation: true,
      },
    },
    MuiPaper: {
      defaultProps: {
        variant: 'outlined',
        elevation: 0,
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'inherit',
      },
    },
  };
};

export default componentsTheme;
