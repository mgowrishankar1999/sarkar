import * as React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from "react-hook-form"
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { Typography } from '@mui/material';

import { makeStyles } from '@mui/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const customTheme = (outerTheme) =>
createTheme({
  palette: {
    mode: outerTheme.palette.mode,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '--TextField-brandBorderColor': '#DAE2ED',
          '--TextField-brandBorderHoverColor': '#00B207',
          '--TextField-brandBorderFocusedColor': '#00B207',
          '& label.Mui-focused': {
            color: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'var(--TextField-brandBorderColor)',
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: 'var(--TextField-brandBorderHoverColor)',
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            border:"0.3px solid #00B207",
            borderColor: 'var(--TextField-brandBorderFocusedColor)',
            boxShadow : '0 0 0 0.3px #00B207'
          },
        },
      },
    }
  },
});



const useStyles = makeStyles({
  errorText:{
    color:"red",
    fontSize:'14px',
    fontWeight:'400'
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#8900BA",
    width: "80%",
    padding: 1.5,
    '&:hover': {
      backgroundColor: "#8900BA",
    },
    textTransform: "capitalize",
    fontFamily: "sans-serif",
  },
})

export default function ContactusForm() {

    const classes = useStyles()
    const outerTheme = useTheme();
    //Textarea 
    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
      };

      const green = {
        100:'#00B207'
      }
    
      const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
      };
    
      const theme = createTheme({
        typography: {
          "fontFamily": `"Poppins", sans-serif`,
          "fontSize": 12,
          "fontWeight": 400,
          body1:{
            color:"#687693"
          }
          
         }
      })
    
    



      const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        box-sizing: border-box;
        width: 320px;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    
        &:hover {
          border-color: ${green[100]};
        }

        &:placeholder {
          color: ${green[100]};
        }
    
        &:focus {
          border-color: ${green[100]};
          box-shadow: 0 0 0 0.3px ${theme.palette.mode === 'dark' ? green[100] : green[100]};
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
      );


    //   const CssTextField = withStyles({
    //     root: {
    //       "& label.Mui-focused": {
    //         color: "green",
    //       },
    //       "& .MuiInput-underline:after": {
    //         borderBottomColor: "green",
    //       },
    //       "& .MuiOutlinedInput-root": {
    //         "& fieldset": {
    //           borderColor: "red",
    //         },
    //         "&:hover fieldset": {
    //           borderColor: "yellow",
    //         },
    //         "&.Mui-focused fieldset": {
    //           borderColor: "green",
    //         },
    //       },
    //     },
    //   })(TextField);

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
          firstName: "",
          email: "",
          text:"",
          message:""
        },
      })
    const onSubmit = (data) => console.log(data)
   return(
    <Box sx={{ flexGrow: 1 }}>
    <ThemeProvider theme={customTheme(outerTheme)}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography sx={{
          fontFamily:'"Poppins", sans-serif',
          fontWeight:'600',
          fontSize:'24px',
          color:"#1A1A1A"
        }}>
             Just Say Hello!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid item xs={8}>
        <Typography sx={{
          fontFamily:'"Poppins", sans-serif',
          fontWeight:'400',
          fontSize:'14px',
          color:'#808080'
        }}>
        Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.
        </Typography>
        </Grid>
      </Grid>
      <Grid item xs={6}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            placeholder="First name"
            onBlur={onBlur}
            sx={{
                flex:1,
                width:"100%"
            }}
           onChange={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Typography className={classes.errorText}>This is required.</Typography>}

      </Grid>
      <Grid item xs={6}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            placeholder="email"
            onBlur={onBlur}
            sx={{
                flex:1,
                width:"100%"
            }}
            onChange={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Typography className={classes.errorText}>This is required.</Typography>}

      </Grid>
      <Grid item xs={12}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            placeholder="Text"
            onBlur={onBlur}
            onChange={onChange}
            sx={{
                flex:1,
                width:"100%"
            }}
            value={value}
          />
        )}
        name="text"
      />
      {errors.text && <Typography className={classes.errorText}>This is required.</Typography>}

      </Grid>
      <Grid item xs={12}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <Textarea aria-label="minimum height"
              minRows={3}
            placeholder="subject"   
                      sx={{
                flex:1,
                width:"100%"
                
            }}
            onChange={onChange}
            value={value}
             />
        )}
        name="message"
      />
      {errors.message && <Typography className={classes.errorText}>This is required.</Typography>}

      </Grid>
      <Grid item xs={4}>
      <Button variant="contained"  sx={{borderRadius:10,backgroundColor:"#8900BA",
      width:"80%",
      padding:1.5,
      ":hover":{backgroundColor:"#8900BA"},textTransform:"capitalize",fontFamily:"sans-serif"}}
      onClick={handleSubmit(onSubmit)} 
      >
          Send Message
        </Button>
      </Grid>
    </Grid>
    </ThemeProvider>
  </Box>
   )
}