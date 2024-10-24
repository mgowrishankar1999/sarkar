import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import SignupCard from '../components/organisms/SignUpCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SignUp() {
  return (
    <SignupCard/>
  );
}

{/* <Container fixed>
<Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
    <Grid item xs={7}>
      <Item>xs=8</Item>
    </Grid>
    <Grid item xs={5}>
    <SignupCard/>
    </Grid>
  </Grid>
</Box>
</Container> */}