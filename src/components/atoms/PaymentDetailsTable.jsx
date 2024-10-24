import React from 'react'
import  Box  from '@mui/material/Box'
import  Grid  from '@mui/material/Grid'
import  Divider  from '@mui/material/Divider'
import { Typography } from '@mui/material'

const DividerItems = (props)=>{
    return(
        <>
        <Grid container sx={{display:"flex", justifyContent:"space-between",padding:1, borderLeft:"1px solid #E6E6E6", borderRight:"1px solid #E6E6E6"}}>
            <Grid item>
                <Typography sx={{
                    fontWeight:!props.fontWeight?400:props.fontWeight,
                    fontSize:!props.fontSize?18:props.fontSize
                }} color={!props.titleColor?props.titleColor:'#666666'}>{props.title}</Typography>
            </Grid>
            <Grid item>
                <Typography  sx={{
                      fontSize:!props.fontSize?18:props.fontSize
                }} color={!props.ValueColor?'#1A1A1A':props.ValueColor}>{props.value}</Typography>
            </Grid>
        </Grid>
        <Divider/>
        </>
    )
}


export default function PaymentDetailsTable() {
  return (
    <Box sx={{flexGrow:1}}> 
        <Grid container sx={{flex:1}}>
            <Grid item sx={{display: "flex",justifyContent:"space-between",padding:2,border:"1px solid #E6E6E6"}} xs={12}>
                <Grid>
                    <Typography>
                    Order ID:
                    </Typography>
                    <Typography>
                        {/* {props.orderId} */}
                        #4152
                    </Typography>
                </Grid>
                <Grid>
                <Typography>
                Payment Method:
                    </Typography>
                    <Typography>
                        {/* {props.paymentType} */}
                        Paypal
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <DividerItems title="Subtotal:" value="$365.00" fontWeight={null} titleColor={null} ValueColor={null} />
            </Grid>
            <Grid item xs={12}>
                <DividerItems title="Discount" value="20%" fontWeight={null} titleColor={null} ValueColor={null} />
            </Grid>
            <Grid item xs={12}>
                <DividerItems title="Shipping" value="Free" fontWeight={null} titleColor={null} ValueColor={null} />
            </Grid>
            <Grid item xs={12}>
                <DividerItems title="Total" value="$84.00" fontWeight={500} titleColor={null} ValueColor={'#2C742F'} fontSize={20} />
            </Grid>
           
        </Grid>
    </Box>
  )
}
