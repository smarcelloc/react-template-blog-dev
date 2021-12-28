import { Components, Theme } from '@mui/material';

const componentsTheme = (theme: Theme): Components => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
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
      styleOverrides: {
        root: {
          borderLeft: 'none',
          borderRight: 'none',
        },
      },
    },
  };
};

export default componentsTheme;
