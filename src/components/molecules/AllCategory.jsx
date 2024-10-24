import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import { Collapse, FormControl, FormControlLabel, List, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { categories } from '../..';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useQuery } from 'react-query';
import { GetAllCategoryFilter } from '../../api/getapi/shopPageApi';

import { useSubProductType,useBrandname } from '../../utils/redux-hooks';

export default function AllCategory({ onSelectCategory }) {
    const [open, setOpen] = useState(true);
    const [value, setValue] = useState('');
    //allCategoryFilter - it needs subProductType=&brandname
    const body = {
      subproductType: useSubProductType(),
      brandname: useBrandname()
    }
    const { isLoading, isError, error,data:filterdata } = useQuery('allCategoryFilter', () => GetAllCategoryFilter(body));

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        onSelectCategory(event.target.value);
      };
    
    

    const handleClick = () => {
      setOpen(!open);
    };

  if(isLoading){
    return(
    <Skeleton count={5} style={{margin:10}}/>
    )
  }
  const {data} = filterdata.categories
  return (
    
    <List sx={{width:250}}>
        <ListItemButton onClick={handleClick}>
        <ListItemText primary="All Categories" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
      <FormControl sx={{ m: 3 }}  variant="standard">
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="Category"
          value={value}
          onChange={handleRadioChange}
        >
            {data.map((item,index) => (
          <FormControlLabel key={index} value={item.value} control={<Radio  sx={{
            '&.Mui-checked': {
              color: "#8900BA",
            },
          }}/>} label={item.dp_name} />))}
        </RadioGroup>
       
      </FormControl>
    </List>
    </Collapse>
    </List>

  )
}
