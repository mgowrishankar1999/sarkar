import * as React from "react";
import Slider from "@mui/material/Slider";
import { Collapse, List, ListItemButton, ListItemText, Typography, useTheme } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";

function valuetext(value) {
  return `${value}`;
}

export default function PriceSlider({ onSelectCategory }) {
  const theme = useTheme();
  const [value, setValue] =useState([100, 1500]);
  const [open,setOpen]=useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onSelectCategory(newValue === null||""?value:newValue)
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{width:250,justifyContent:"center",alignItems:"center"}}>
    <ListItemButton onClick={handleClick}>
    <ListItemText primary="Price" />
    {open ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>
  <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{width:230}}>
   
      <Slider
        sx={{
          color: "#8900BA",
          height: 5,
          "& .MuiSlider-thumb": {
            height: 18,
            width: 18,
            backgroundColor: "#fff",
            border: "2px solid currentColor",
            "&:hover": {
              boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
            },
          },
          "& .MuiSlider-track": {
            height: 3,
          },
          "& .MuiSlider-rail": {
            color: theme.palette.mode === "dark" ? "#8900BA" : "#d8d8d8",
            opacity: theme.palette.mode === "dark" ? undefined : 1,
          },
        }}
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        min={10}
        max={10000}
        getAriaValueText={valuetext}
      />
      <Typography>
        Price: {value[0]} - {value[1]}
      </Typography>
    </List>
    </Collapse>
    </List>
  );
}
