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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
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

export default function EditBillingAddress() {

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


      const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
          marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
          borderRadius: 4,
          position: 'relative',
          backgroundColor: theme.palette.background.paper,
          border: '1px solid #ced4da',
          fontSize: 16,
          padding: '15px',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          '&:focus': {
            borderRadius: 4,
            //borderColor: '#00B207',
            boxShadow: '0 0 0 0.1rem #00B207',
          },
        },
      }));

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
          companyname:'',
          address: "",
          Phonenumber:"",
        },
      })
    const onSubmit = (data) => console.log(data)
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
   return(
    <Box sx={{ flexGrow: 1 }}>
    <ThemeProvider theme={customTheme(outerTheme)}>
    <Grid container spacing={3}>
      <Grid item md={4} xs={12}>
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
      <Grid item md={4} xs={12}>
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
      <Grid item md={4} xs={12}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <>
            <InputLabel>Company name (optional)</InputLabel>
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
        name="companyname"
      />
      {errors.companyname && <Typography className={classes.errorText}>This is required.</Typography>}

      </Grid>
      <Grid item xs={12}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <>
            <InputLabel>Street Address</InputLabel>
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
        name="address"
      />
      {errors.address && <Typography className={classes.errorText}>This is required.</Typography>}

      </Grid>
      <Grid item md={4} xs={12}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        
        render={({ field: { onChange, onBlur, value } }) => (
        <>
        <InputLabel id='demo-simple-select-label'>Country/region</InputLabel>
        <FormControl fullWidth>
        
         <Select
          id="demo-simple-select"
          value={value}
          label=""
          onChange={onChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
          </FormControl>
          </>
        )}
        name="Country"
      />
      {errors.firstName && <Typography className={classes.errorText}>This is required.</Typography>}

      </Grid>
      <Grid item md={4} xs={12} >
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        
        render={({ field: { onChange, onBlur, value } }) => (
            <>
        <>
        <InputLabel id='demo-simple-select-label'>states</InputLabel>
        <FormControl fullWidth>
        
         <Select
          id="demo-simple-select"
          value={value}
          label=""
          onChange={onChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
          </FormControl>
          </>
          </>
        )}
        name="lastName"
      />
      {errors.lastName && <Typography className={classes.errorText}>This is required.</Typography>}

      </Grid>
      <Grid item md={4} xs={12}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <>
            <InputLabel>Zip code</InputLabel>
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
        name="zipcode"
      />
      {errors.zipcode && <Typography className={classes.errorText}>This is required.</Typography>}

    
      </Grid>
      <Grid item md={6} xs={12}>
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
      <Grid item md={6} xs={12}>
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
      <Grid item xs={3}>
      <Button variant="contained"  sx={{borderRadius:10,backgroundColor:"#00B207",
      width:"80%",
      paddingX:1.5,
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