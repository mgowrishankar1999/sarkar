import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import SocialLinks from './SocialLinks';

export default function TeamCarousel() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

  return (
    <Card sx={{ maxWidth: 345 }}>
       
      <CardMedia
        onMouseEnter={()=>{
          handleOpen(true)
        }}
        onMouseMove={
          ()=>{
            console.log("Mouse moved")
          }
        }
        sx={{backgroundColor:"green",height:140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      >
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 ,position:"relative",height:'100%',width:'100%'}}
        open={open}
        onClick={handleClose}
      >
        <SocialLinks/>
      </Backdrop>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
         CEo & founder
        </Typography>
      </CardContent>
    </Card>
  );
}

