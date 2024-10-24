import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { homeCategories } from '../../api/getapi/getapis';

export default function HomeCat() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(true);
  const { isLoading: isLoadinghomecat, isError: isErrorhomecat, data: homecatData, error: homecatError } = useQuery('homecategories', homeCategories);

  const handleClick = () => {
    setOpen(!open);
  };

  console.log(homecatData)
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  if (isLoadinghomecat) {
    return <Typography>Loading...</Typography>;
  }

  let orderedData = [];
  if (homecatData && homecatData.categories.data) {
    // Sort the data by dp_recno
    orderedData = homecatData.categories.data.sort((a, b) => a.dp_recno - b.dp_recno);
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper' }}>
      <ListItemButton onClick={handleClick} sx={{backgroundColor:"#8900BA",color:"#fff",height:50,pl:0,":hover":{backgroundColor:"#8900BA"}}}>
        <MenuIcon sx={{bgcolor:"#000",color:"#fff",fontSize:30,mr:2,p:1.3}}/>
        <ListItemText primary="All Categories" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {open && (
        <List component="nav" aria-label="secondary mailbox folder">
          {orderedData.map((item,index) => (
            <ListItemButton
              key={index}
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
              sx={{
                "&.Mui-selected": {
                    backgroundColor: '#8900BA',
                    ":hover":{
                        background:"#8900BA"
                    }
                },
                color:selectedIndex===index?'#fff':"#000"
              }}
            >
              <Typography sx={{fontSize:15,textTransform:'capitalize'}}>{item.dp_name}</Typography>
            </ListItemButton>
          ))}
        </List>
      )}
    </Box>
  );
}
