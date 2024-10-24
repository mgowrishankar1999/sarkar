import React from 'react'
import { CiHeart } from "react-icons/ci";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import  IconButton  from '@mui/material/IconButton';
import { Margin } from '@mui/icons-material';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    backgroundColor:
    "#CC0000",
    width:15,
    height:15,
    color:"#fff",
    borderRadius:'50%',
    padding:'10px',
    
  },
}));

function HeartIcon() {
  return (
    <IconButton>
    <StyledBadge badgeContent={4}>
    <CiHeart size={30} />
  </StyledBadge>
  </IconButton>
  )
}

export default HeartIcon