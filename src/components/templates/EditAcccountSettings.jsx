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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
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
  }
})

export default function EditAccountSettings() {

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
          lastName:"",
          email: "",
          Phonenumber:"",
        },
      })
    const onSubmit = (data) => console.log(data)
   return(
    <Box >
    <ThemeProvider theme={customTheme(outerTheme)}>
    <Grid container spacing={3} sx={{display:"flex"}}>
      <Grid item xs={12}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        
        render={({ field: { onChange, onBlur, value } }) => (
        <>
         <InputLabel>First name</InputLabel>
          <TextField
            placeholder=""
            onBlur={onBlur}
            sx={{
                flex:1,
                width:"100%"
            }}
           onChange={onChange}
            value={value}
          />
          </>
        )}
        name="firstName"
      />
      {errors.firstName && <Typography className={classes.errorText}>This is required.</Typography>}

      </Grid>
      <Grid item xs={12}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        
        render={({ field: { onChange, onBlur, value } }) => (
            <>
            <InputLabel>Last name</InputLabel>
          <TextField
            placeholder=""
            onBlur={onBlur}
            sx={{
                flex:1,
                width:"100%"
            }}
           onChange={onChange}
            value={value}
          />
          </>
        )}
        name="lastName"
      />
      {errors.lastName && <Typography className={classes.errorText}>This is required.</Typography>}

      </Grid>
      <Grid item xs={12}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <>
            <InputLabel>email</InputLabel>
          <TextField
            placeholder=""
            onBlur={onBlur}
            sx={{
                flex:1,
                width:"100%"
            }}
            onChange={onChange}
            value={value}
          />
          </>
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
            <>
            <InputLabel>Phone number</InputLabel>
          <TextField
            placeholder=""
            onBlur={onBlur}
            sx={{
                flex:1,
                width:"100%"
            }}
            onChange={onChange}
            value={value}
          />
          </>
        )}
        name="Phonenumber"
      />
      {errors.Phonenumber && <Typography className={classes.errorText}>This is required.</Typography>}

      </Grid>
      <Grid item xs={3}>
      <Button variant="contained"  sx={{borderRadius:10,backgroundColor:"#00B207",
      width:"150%",
      padding:1.5,
      ":hover":{backgroundColor:"#00B207"},textTransform:"capitalize",fontFamily:"sans-serif"}}
      onClick={handleSubmit(onSubmit)} 
      >
          Save changes
        </Button>
      </Grid>
    </Grid>
    </ThemeProvider>
  </Box>
   )
}