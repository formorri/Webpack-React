import BasementGrotesque from '../assets/fonts/BasementGrotesque-Black.woff2';
import HelveticaNeueBold from '../assets/fonts/HelveticaNeue-Bold.woff2';
import HelveticaNeue from '../assets/fonts/HelveticaNeue.woff2';

const theme = createTheme({
  typography: {
    fontFamily: 'BasementGrotesque, HelveticaNeue',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'BasementGrotesque';
          font-weight: 800;
          font-style: normal;
          font-display: swap;
          src: local('BasementGrotesque'), local('BasementGrotesque-Black'), url(${BasementGrotesque}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        },
        @font-face {
          font-family: 'HelveticaNeue';
          font-weight: bold;
          font-style: normal;
          font-display: swap;
          src: local('HelveticaNeue'), local('HelveticaNeue-Bold'), url(${HelveticaNeueBold}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        },
        @font-face {
          font-family: 'HelveticaNeue';
          font-weight: normal;
          font-style: normal;
          font-display: swap;
          src: local('HelveticaNeue'), local('HelveticaNeue'), url(${HelveticaNeue}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        },
      `,
    },
  },
});

// ...
return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box
      sx={{
        fontFamily: 'BasementGrotesque',
      }}
    >
      Raleway
    </Box>
  </ThemeProvider>
);

