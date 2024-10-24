
import React from 'react';
import Logo from '../../../src/assets/Sarkar.svg';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: 12,
    fontWeight: 400,
    body1: {
      color: "#687693"
    }
  }
});

const useStyles = makeStyles(() => ({
  logoBox: {
    width: "100%",
    maxWidth: 200, // Set a max-width for the logo
    [theme.breakpoints.down("sm")]: {
      maxWidth: 150,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 100,
    },
    marginBottom: theme.spacing(1)
  },
  typographyText: {
    color: '#808080',
    fontFamily: "Poppins",
    fontSize: 12,
    [theme.breakpoints.down("sm")]: {
      fontSize: 9,
      lineHeight: 1
    }
  }
}));

export default function SarkarLogo() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box className={classes.logoBox}>
          <img src={Logo} alt='logo' width="100%" height="auto" />
        </Box>
        <Box>
          <Typography variant='body1' component='span' className={classes.typographyText}>
            All types of products Available
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
