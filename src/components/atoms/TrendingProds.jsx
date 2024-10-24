import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MdKeyboardArrowDown } from "react-icons/md";
import { Box, Grid, Typography } from '@mui/material';


export default function TrendingProds() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
  return (
   <Box>
    <Grid containe sx={{
        display:"flex",
        
      }}>
      <Grid item>
        <Typography>Trending Products</Typography>
      </Grid>
      <Grid item>
        <MdKeyboardArrowDown size={30}/>
      </Grid>
    </Grid>
   </Box>
  )
}
