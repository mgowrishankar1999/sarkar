import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import { CircularProgress, useMediaQuery } from '@mui/material';
import { LoginApi, LoginVerify } from '../../api/auth/userApi';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OtpInput from 'react-otp-input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SarkarLogo from '../atoms/SarkarLogo';
import Logo from '../../assets/Group11541.png';

const defaultTheme = createTheme();

export default function Login() {
  const { isLoading, isSuccess, error, mutate } = useMutation(LoginApi);
  console.log(mutate);
  const { isLoading: isLoading2, isSuccess: isSuccess2, error: error2, mutate: mutate2 } = useMutation(LoginVerify);
  const [otp, setOtp] = useState('');
  const [phone, setPhone] = useState('');
  const dtoken = useSelector((state) => state.userData.userData.dtoken);
  const navigate = useNavigate();
  const [eventType, setEventType] = useState('');

  const handleSubmit = (event, eventType) => {
    event.preventDefault();
    if (eventType === 'Login') {
      mutate({ phone });
      
    } else if (eventType === 'verify') {
      mutate2({ phone, otp, dtoken });
      navigate('/');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ p: 8, backgroundColor: '#898EB3' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={6} component={Paper}
        sx={{borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px'}}>
          <Box
            sx={{
              my: 25,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',

            }}
          >
            <Typography sx={{ fontSize: 40, fontWeight: 600, color: '#000' }}>
              Welcome Back!!
            </Typography>

            <Box sx={{ width: '410px', textAlign: 'left', marginTop: '35px', marginLeft:{xs:'110px'} }}>
              <Typography  variant="h6" gutterBottom fontWeight={700} fontSize={25}>
                Login
              </Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <label style={{ color: '#222222' }} htmlFor="fname">
                Mobile Number&nbsp;<span style={{ color: 'red' }}>*</span>
              </label>
              <TextField
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '30px',
                    background: '#EEEEEE',
                    color: '#111111',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#888888',
                  },
                  '& .MuiFormLabel-asterisk': {
                    display: 'none',
                  },
                }}
                InputLabelProps={{
                  style: { marginLeft: '20px' },
                }}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Enter Your Mobile Number"
                name="name"
                autoFocus
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {isSuccess ? (
                <>
                  <OtpInput
                    inputStyle={{ width: 50, height: 50, margin: 20 }}
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span> </span>}
                    renderInput={(props) => <input {...props} />}
                  />
                  <Button
                    style={{ backgroundColor: '#1E2770', borderRadius: '30px' }}
                    type="button"
                    fullWidth
                    onClick={(event) => handleSubmit(event, 'verify')}
                    variant="contained"
                    sx={{ mt: 3, color: '#FFFFFF' ,mb: 2, p:2 }}
                  >
                    {isLoading2 ? (
                      <CircularProgress size={24} sx={{ color: '#FFFFFF' }} />
                    ) : (
                      'Verify'
                    )}
                  </Button>
                </>
              ) : (
                <Button
                  style={{ backgroundColor: '#1E2770', borderRadius: '30px' }}
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={(event) => handleSubmit(event, 'Login')}
                  sx={{ mt: 8, color: '#FFFFFF', p: 2 }}
                >
                  {isLoading ? (
                    <CircularProgress size={24} sx={{ color: 'red' }} />
                  ) : (
                    'Send OTP'
                  )}
                </Button>
              )}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Box
            sx={{
              height: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundColor: '#1E2770',
              backgroundPosition: 'center',
              gridColumn: { md: 'span 12' },
              p: 2,
              borderTopRightRadius: '20px',
              borderBottomRightRadius:'20px',
              
            }}
          >
            <Grid
              container
              sx={{
                height: '80%',
                backgroundImage: `url(${Logo})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',


              }}
            >

            </Grid>
            <Typography 
            
            style={{ textAlign: 'center', color: 'white', fontSize: '2em' ,overflow:'hidden'}}>
              Click Here To Sign Up
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
