import { orange } from '@mui/material/colors';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    "fontFamily": `"Poppins", sans-serif`,
    "fontSize": 13,
    "fontWeight": 500,
    body1:{
      color:"#687693"
    }
    
   },
    status: {
      danger: orange[500],
    },
});

export default theme;