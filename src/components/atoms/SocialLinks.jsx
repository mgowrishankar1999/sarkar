import React ,{useState}from 'react'
import { Footicon } from '../../index.js'
import  Box  from '@mui/material/Box'
import { IconButton } from '@mui/material'
export default function SocialLinks() {
    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleIconClick = (index) => {
      setSelectedIcon(index);
    };
  return (
    
    <Box sx={{
        display:"flex",
        justifyContent:"center"
    }}>
    {
    Footicon.map((item,index)=>(
      <IconButton key={index} color="primary" sx={{ p: '5px', backgroundColor: selectedIcon === index ? '#00B207' : 'inherit',":hover":{backgroundColor:"#00B207"} }} onClick={() => handleIconClick(index)} aria-label="directions">
      <img src={item.icon} style={{width:item.width,height:"auto",color:selectedIcon === index ? "#fff":"inherit"}}/>
    </IconButton>
    ))
  }

    </Box>
  )
}
