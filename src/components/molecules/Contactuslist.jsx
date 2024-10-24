import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Grid, Typography } from '@mui/material';
import map from '../../assets/contactus/PhoneCall.svg'
import ContactData from '../../Data/contaclistData';

const DetailsSHown = ({types,item})=>{
    console.log(types,item)
    console.log(item[types])
    
    
    return (
        <>
        <Grid item xs={12} sx={{
            textAlign:"center"
        }}>
                <Typography>{item[types].primary}</Typography>
        </Grid>
        <Grid item xs={12} sx={{
            textAlign:"center"
        }}>
        <Typography>{item[types].secondary
}</Typography>
         
        </Grid>
        </>
    )
}






function Contactuslist({data,index}) {
    console.log(data,index)
    
    return (
        <Box sx={{
            display:"flex",
            justifyContent:"center",
        }}>
        <Card
        elevation={0} 
        sx={{
            display:"flex",
            padding:3,
           justifyContent:"center",
           border:"none",
           borderBottom:ContactData.length-1 ==index ?null:"1px solid grey",

           borderRadius:0
            
          
        }}>
            <Box>
                <Grid direction="column" sx={{ flexGrow: 1}} container spacing={2}>
                    <Grid item xs={12} sx={{
                        alignSelf:"center"
                    }} >
                        <img src={data.img} alt='map'/>
                    </Grid>
                    <DetailsSHown types={data.type} item={data}/>
                </Grid>
            </Box>
        </Card>
        </Box>
      ) 
}


export default function Finally() {
    console.log(ContactData)
    return (
        <div>
            {ContactData.map((item, index) => (
                <Contactuslist data={item} index={index}/>
            ))}
        </div>
    );
}