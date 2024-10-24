import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Checkbox, Collapse, FormControlLabel, FormGroup, List, ListItemButton, ListItemText, Rating } from '@mui/material';
import React, { useState } from 'react';
import { ratings } from '../..';

export default function Ratings({ onSelectCategory }) {
    const [open, setOpen] = useState(true);
    const [value, setValue] = useState('');

   
    const handleChange = (event) => {
        const checkValue = event.target.value;
        const isChecked = event.target.checked;
        if (isChecked) {
            setValue([...value, checkValue]);
            onSelectCategory([...value, checkValue])
        } else {
            setValue(value.filter(val => val !== value));
        }
    };
     

    const handleClick = () => {
      setOpen(!open);
    };
  return (
    <List sx={{width:250}}>
        <ListItemButton onClick={handleClick}>
        <ListItemText primary="Ratings" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <FormGroup aria-label="position" >
        {ratings.map((item, index) => (
  <FormControlLabel
    key={index}
    value={item.value}
    control={<Checkbox sx={{ '&.Mui-checked': {
        color: "#8900BA",
      },}}onChange={handleChange}/>}
    label={
      <div style={{alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"row",gap:5}}>
        <Rating name="half-rating-read" value={item.value} readOnly />
        {item.label}
      </div>
    }
    labelPlacement="end"
  />
))}

    </FormGroup>
    </List>
    </Collapse>
    </List>

  )
}
