import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TopNavText from '../atoms/TopNav';
import TrendingProds from '../atoms/TrendingProds';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  motherContainer: {
    flexGrow: 1,
    paddingTop: '2%',
  },
}));

const navItems = [
  { text: 'Home', path: '/' },
  { text: 'Shop', path: '/shop' },
  { text: 'Fruits & Vegetables' },
  { text: 'Beverages' },
  { text: 'Blog' },
  { text: 'Contact us', path: '/contactus' },
  { text: 'Order Tracking' },
];

export default function PageSection() {
  const classes = useStyles();
  return (
    <Box className={classes.motherContainer}>
      <Grid container spacing={2} alignItems="center" justifyContent="space-evenly">
        <Grid item md={10} xs={12} sx={{flexDirection:{md:"row",xs:"column"},display:"flex",gap:5}}>
        {navItems.map((item, index) => (
          <Box key={index} sx={{flexDirection:"row",display:"flex"}}>
            <TopNavText text={item.text} path={item.path} />
          </Box>
        ))}
        </Grid>
        <Grid item md={2} xs={12}>
          <Box sx={{
            display: 'flex',
            justifyContent: {md:'flex-end'},
            width: '100%',
          }}>
            <TrendingProds />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
