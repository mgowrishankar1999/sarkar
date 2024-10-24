import * as React from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  CircularProgress,
  Typography,
  createTheme,
  ThemeProvider,
  useMediaQuery,
  useTheme,
  Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import OtpInput from 'react-otp-input';
import { Signup, SignupVerify } from '../../api/auth/userApi';
import { useMutation } from 'react-query';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SarkarLogo from '../atoms/SarkarLogo';
import Banner from '../../assets/Group11542.png';

const defaultTheme = createTheme();

export default function Signin() {
  const navigate = useNavigate();
  const { isLoading, isSuccess, error, mutate } = useMutation(Signup, {
   
  });
  const { isLoading: isLoading2, isSuccess: isSuccess2, error: error2, mutate: mutate2 } = useMutation(SignupVerify);
  const [eventType, setEventType] = useState('');
  const dtoken = useSelector((state) => state.userData.userData.dtoken);

  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState({ name: '', phone: '', email: '' });
  const [data, setData] = useState(null); // State to store API response

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isBigScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = 'Full Name is required';
    if (!phone) errors.phone = 'Mobile Number is required';
    if (!email) errors.email = 'Email Address is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event, eventType) => {
    event.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData(event.currentTarget);

    if (eventType === 'signup') {
      mutate({
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        dtoken: dtoken,
      }, {
        onSuccess: (data) => {
          setData(data);
          if (data.message === 'Phone number is already exist.') {
            alert(data.message);
            navigate('/login'); 
          }
        }
      });
    } else if (eventType === 'verify') {
      mutate2({
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        otp: otp,
        dtoken: dtoken,
      }, {
        onSuccess: (data) => {
          setData(data);
        }
      });
      navigate('/login');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sm={12}
        sx={{
          height: 'auto',
          alignContent: 'center',
          justifyContent: 'center',
          backgroundColor: isSmallScreen ? 'transparent' : '#898EB3',
        }}
      >
        <CssBaseline />
        <Grid
          style={{ padding: '100px', backgroundColor: '#1E2770' }}
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            marginLeft: isSmallScreen ? '0' : '25px',
            marginTop: isSmallScreen ? '0' : '30px',
            marginBottom: isSmallScreen ? '0' : '30px',
            backgroundImage: `url(${Banner})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'dark' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: isSmallScreen ? 'none' : 'block',
            borderTopLeftRadius: '30px',
            borderBottomLeftRadius: '30px',
            borderTopLeftRadius: isBigScreen ? '0' : '30px',
            borderBottomLeftRadius: isBigScreen ? '0' : '30px',
          }}
        />
        <Grid
          style={{
            marginRight: isSmallScreen ? '0' : '25px',
            marginTop: isSmallScreen ? '0' : '30px',
            marginBottom: isSmallScreen ? '0' : '30px',
          }}
          item
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            borderTopRightRadius: isSmallScreen ? '0' : '30px',
            borderBottomRightRadius: isSmallScreen ? '0' : '30px',
            borderTopRightRadius: isBigScreen ? '0' : '30px',
            borderBottomRightRadius: isBigScreen ? '0' : '30px',
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <SarkarLogo />
            <Typography sx={{ mt: 0 }} component="h1" variant="h5">
              Sign Up
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={(event) => handleSubmit(event, eventType)}
              sx={{ mt: 1 }}
              style={{ paddingLeft: '60px', paddingRight: '60px' }}
            >
              <label style={{ color: '#222222' }} htmlFor="fname">
                Full Name&nbsp;<span style={{ color: 'red' }}>*</span>
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
                  style: { marginLeft: '16px' },
                }}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Enter Full Name"
                name="name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!formErrors.name}
                helperText={formErrors.name}
              />

              {/* MOBILE TEXT FIELD */}
              <label style={{ color: '#222222' }} htmlFor="fname">
                Mobile Number&nbsp;<span style={{ color: 'red', marginTop: '10px' }}>*</span>
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
                  style: { marginLeft: '16px' },
                }}
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Enter Mobile Number"
                name="phone"
                autoComplete="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={!!formErrors.phone}
                helperText={formErrors.phone}
              />

              {/* EMAIL TEXT FIELD */}
              <label style={{ color: '#222222' }} htmlFor="fname">
                E-Mail&nbsp;<span style={{ color: 'red' }}>*</span>
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
                  style: { marginLeft: '16px' },
                }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Enter Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!formErrors.email}
                helperText={formErrors.email}
              />

              {isSuccess && data && data.message !== 'Phone number is already exist.' && (
                <OtpInput
                  inputStyle={{ width: 50, height: 50, margin: 20 }}
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span> </span>}
                  renderInput={(props) => <input {...props} />}
                />
              )}

              {isSuccess ? (
                <Button
                  type="submit"
                  fullWidth
                  onClick={() => setEventType('verify')}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {isLoading2 ? (
                    <CircularProgress size={24} sx={{ color: 'blue' }} />
                  ) : (
                    'Verify'
                  )}
                </Button>
              ) : (
                <Button
                  style={{ backgroundColor: '#1E2770', borderRadius: '30px' }}
                  type="submit"
                  fullWidth
                  color="error"
                  onClick={() => setEventType('signup')}
                  disabled={isLoading}
                  variant="contained"
                  sx={{ mt: 3, mb: 2, color: '#FFFFFF', p: 2 }}
                >
                  {isLoading ? (
                    <CircularProgress size={24} sx={{ color: 'red' }} />
                  ) : (
                    'Send OTP'
                  )}
                </Button>
              )}
              <Grid container>
                <Grid item>
                  <Typography sx={{ mx: 10 }}>
                    Already have an account?
                    <Link href="/login" sx={{ textDecoration: 'none', ml: 1 }}>
                      Log In
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
