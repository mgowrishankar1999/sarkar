import React from 'react'
import  Box  from '@mui/material/Box';
import  Grid  from '@mui/material/Grid';

import ProfileCompnent from '../../components/atoms/ProfileCompnent';
import BillingAddress from '../../components/atoms/BillingAddress';
import Tabletitlele from '../../components/OrderHistory.jsx/Tabletitlele'; 
import HistoryTable from '../../components/OrderHistory.jsx/HistoryTable';

{/* <ProfileCompnent/>
<BillingAddress/>
<Tabletitlele text="Recent Order History" text2="View All"/>
<HistoryTable/> */}

export default function ProfileDashboard() {
  return (
        <Box sx={{
            flexGrow:1
        }}> 
            <Grid container spacing={1}>
                <Grid item md={6} sx={{display:'flex',flex:1}}>
                    <ProfileCompnent/>
                </Grid>
                <Grid item md={6} sx={{display:'flex',flex:1}}>
                    <BillingAddress/>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Tabletitlele textsize={20} text="Recent History Table" text2="View All" text2size={16}/>
                    <HistoryTable/>
                </Grid>
            </Grid>
        </Box>
  )
}
