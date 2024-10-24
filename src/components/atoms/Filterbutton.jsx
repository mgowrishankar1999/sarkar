import { Button, Typography } from '@mui/material'
import React from 'react'
import filter from "../../assets/Filter.svg"

export default function Filterbutton({ onFilterClick }) {
  return (
    <div>
        <Button sx={{backgroundColor:"#8900BA",width:100,height:40,borderRadius:10,color:"#fff",paddingY:3,paddingX:10,":hover":{backgroundColor:"#8900BA"}}} onClick={onFilterClick}>Filter <img src={filter} style={{width:20,height:"auto",marginLeft:10}}/></Button>
    </div>
  )
}
