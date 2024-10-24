import React from 'react'
import  Box  from '@mui/material/Box'
import  Grid  from '@mui/material/Grid'
import FormBoxorder from '../../components/atoms/FormBoxorder'
import OrderHistoryTable from '../../components/atoms/orderHistoryTable'
import OrderDetailsHistoryTable from '../../components/atoms/OrderDetailsHistoryTable'
import PaymentDetailsTable from '../../components/atoms/PaymentDetailsTable'
import OrderHistoryStepper from '../../components/atoms/OrderHistoryStepper'

export default function ViewOrderDetails() {
  return (
    <Box sx={{flexGrow:1}}>
        <FormBoxorder title="Order Details" date="Apr 24 2021" productCount={3}>
        <Box sx={{flexGrow:{md:1}}}>
        <Grid container sx={{display:"flex"}} spacing={2} xs={12}>
          <Grid item md={4} xs={12} sx={{flex:1}}>
          <OrderHistoryTable title='Billing Address' name='Dainne Russell' address='4140 Parker Rd. Allentown, New Mexico 31134' email='dainne.ressell@gmail.com' phone='(671) 555-0110'/>
          </Grid>
          <Grid item md={4} xs={12}>
          <OrderHistoryTable title='Billing Address' name='Dainne Russell' address='4140 Parker Rd. Allentown, New Mexico 31134' email='dainne.ressell@gmail.com' phone='(671) 555-0110'/>
          </Grid>
          <Grid item md={4} xs={12}>
     <PaymentDetailsTable/>

          </Grid>
        </Grid>
      </Box>
      <Box sx={{paddingTop:3, paddingBottom:3}}>
      <OrderHistoryStepper/>
        </Box>
        <Box sx={{width:"100%"}}>
          <OrderDetailsHistoryTable/>
        </Box>

          </FormBoxorder>
    </Box>
  )
}
