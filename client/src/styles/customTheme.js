import { createTheme } from '@mui/material/styles';
const warningColor = '#d14334';

const primaryColor = '#1c1c1c';

const secondaryColor = '#e9e7dc';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    warning: {
      main: warningColor,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 850,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'p',
          body2: 'p',
          body3: 'p',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Thunder, sans-serif', 'open-sans, sans-serif'].join(','),
    h1: {
      fontFamily: 'Thunder, sans-serif',
    },
    header1: {
      fontWeight: 400,
      fontFamily: 'Thunder, sans-serif',
      textTransform: 'capitalize',
      fontStyle: 'uppercase',
      fontSize: 'clamp(3.38rem, calc(0.88rem + 13.47vw), 11.77rem)',
    },
    header2: {
      fontWeight: 400,
      fontFamily: 'Thunder, sans-serif',
      textTransform: 'capitalize',
      fontSize: '4.8rem',
    },
    subheader1: {
      fontSize: '3.2rem',
      fontWeight: 400,
      fontFamily: 'Thunder, sans-serif',
      textTransform: 'uppercase',
      display: 'block',
    },
    body1: {
      fontSize: '1.6rem',
      fontFamily: 'open-sans, sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontSize: '2.4rem',
      fontFamily: 'open-sans, sans-serif',
      fontWeight: 400,
      color: secondaryColor,
    },
    body3: {
      fontSize: '1.8rem',
      fontFamily: 'open-sans, sans-serif',
      fontWeight: 400,
      color: secondaryColor,
    },
    navOption: {
      color: secondaryColor,
      fontSize: '1.6rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontFamily: 'open-sans, sans-serif',
      textTransform: 'uppercase',
      transition: 'all color .2s ease',
      position: 'relative',
      display: 'inline-block',
      padding: '3px 0',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 'calc(100% + 5px)',
        width: 0,
        right: 0,
        height: '3px',
        transition: 'width .4s cubic-bezier(0.51, 0.18, 0, 0.88) .1s',
        background: warningColor,
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 'calc(100% + 5px)',
        width: 0,
        right: 0,
        height: '3px',
        transition: 'width .2s cubic-bezier(0.29, 0.18, 0.26, 0.83)',
        background: secondaryColor,
      },
      '&:hover': {
        '&::after': { width: '100%', left: 0 },
        '&::before': { width: '100%', left: 0 },
      },
      '&.active': {
        color: warningColor,
      },
    },
  },
});