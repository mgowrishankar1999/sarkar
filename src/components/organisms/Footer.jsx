import { Box, Button, Divider, Icon, IconButton, InputBase, Link, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Mailicon from '../../assets/mailIcon.svg';
import Logo from '../../assets/Sarkar.svg';
import { makeStyles } from '@mui/styles';
import { Footicon, Help, Proxy, myAccount } from '../../index.js';
import App from '../../assets/AppStore.svg';
import Play from '../../assets/Playstore.svg';
import payment from '../../assets/Paymentop.svg';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { NavLink } from 'react-router-dom';

const theme = createTheme({
  typography: {
    "fontFamily": `"Poppins", sans-serif`,
  },
  link: {
    "fontFamily": `"Poppins", sans-serif`,
    body1: {
      color: "#666666",
    },
  }
});

export default function Footer() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (index, url) => {
    setSelectedIcon(index);
    window.open(url, '_blank');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: { md: "flex" }, flexDirection: { md: "row", sm: 'column' }, justifyContent: "space-between", backgroundColor: "#000", width: "100%", height: { md: "30%", sm: "auto" }, paddingY: 2 }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "space-between", padding: 2 }}>
          <div>
            <img src={Mailicon} style={{ width: 40, height: "auto" }} />
          </div>
          <div>
            <Typography sx={{ fontSize: 20, fontWeight: 500, color: "#fff" }}>Subscribe our Newsletter</Typography>
            <Typography sx={{ fontSize: 10, color: "#fff" }}>Pellentesque eu nibh eget mauris congue mattis matti.</Typography>
          </div>
        </Box>
        <Box sx={{ flexDirection: { md: "row" }, display: { md: "flex" }, justifyContent: "center", alignItems: "center" }}>
          <Box sx={{ ml: { md: -10 }, padding: 2 }}>
            <Paper sx={{ display: 'flex', alignItems: 'center', backgroundColor: "#333333", color: "#fff", borderRadius: 20, width: { md: 390, sm: 200 } }}>
              <InputBase
                sx={{ ml: 1, flex: 1, color: "#fff", '&::placeholder': { color: "#fff" } }}
                placeholder="Your email address"
              />
              <Button variant="contained" sx={{ borderRadius: 20, backgroundColor: "#00B207", ":hover": { backgroundColor: "#00B207" }, textTransform: "capitalize", fontFamily: "sans-serif" }}>
                Subscribe
              </Button>
            </Paper>
          </Box>
          {Footicon.map((item, index) => (
            <IconButton
              key={index}
              color="primary"
              sx={{ m: 1, p: '5px', backgroundColor: selectedIcon === index ? '#00B207' : 'inherit', ":hover": { backgroundColor: "#00B207" } }}
              onClick={() => handleIconClick(index, item.url)}
              aria-label={`social-icon-${index}`}
            >
              <img src={item.icon} style={{ width: item.width, height: "auto", color: selectedIcon === index ? "#fff" : "inherit" }} />
            </IconButton>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: { md: "flex" }, flexDirection: "row", bgcolor: "#F2F2F2", justifyContent: "space-around", py: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "row", py: 3 }}>
          <Box sx={{ p: { xs: 2 } }}>
            <img src={Logo} style={{ width: 150, height: "auto" }} />
            <Typography sx={{ width: 350, paddingY: 2 }}>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</Typography>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ color: "#1A1A1A", fontSize: 16, fontWeight: 500, borderBottom: '3px solid #20B526' }}>(219) 555-0114</Typography>
              <Typography sx={{ color: "#808080", fontSize: 15, fontWeight: 500, paddingX: 1 }}>or</Typography>
              <Typography sx={{ color: "#1A1A1A", fontSize: 16, fontWeight: 500, borderBottom: '3px solid #20B526' }}>Proxy@gmail.com</Typography>
            </div>
          </Box>
        </Box>
        <Box sx={{ padding: 3 }}>
          <Typography sx={{ fontSize: 20 }}>My Account</Typography>
          {myAccount.map((item, index) => (
            <Box key={index} sx={{ lineHeight: 5, display: "flex" }}>
              <NavLink style={{ textDecoration: "none" }} to={item.path}>
                <Link color={"#666666"} underline="none">
                  <Typography sx={{ paddingY: 1 }}>{item.item}</Typography>
                </Link>
              </NavLink>
            </Box>
          ))}
        </Box>
        <Box sx={{ padding: 3 }}>
          <Typography sx={{ fontSize: 20 }}>Helps</Typography>
          {Help.map((item, index) => (
            <Box key={index} sx={{ lineHeight: 2 }}>
              <NavLink style={{ textDecoration: "none" }} to={item.path}>
                <Link color={"#666666"} underline="none">
                  <Typography sx={{ paddingY: 1 }}>{item.item}</Typography>
                </Link>
              </NavLink>
            </Box>
          ))}
        </Box>
        <Box sx={{ padding: 3 }}>
          <Typography sx={{ fontSize: 20 }}>Proxy</Typography>
          {Proxy.map((item, index) => (
            <Box key={index} sx={{ lineHeight: 2 }}>
              <NavLink style={{ textDecoration: "none" }} to={item.path}>
                <Link color={"#666666"} underline="none">
                  <Typography sx={{ paddingY: 1 }}>{item.item}</Typography>
                </Link>
              </NavLink>
            </Box>
          ))}
        </Box>
        <Box sx={{ paddingY: 3, px: { xs: 2 } }}>
          <Typography sx={{ fontSize: 20, mb: 2 }}>Download Mobile App</Typography>
          <Box sx={{ display: "flex", gap: "3%" }}>
            <img src={App} style={{ width: 150, height: "auto" }} />
            <img src={Play} style={{ width: 150, height: "auto" }} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "auto", bgcolor: "#8900BA", justifyContent: "space-between", display: { md: "flex" }, flexDirection: "row", alignItems: "center", paddingY: 1 }}>
        <div style={{ marginLeft: "2%" }}>
          <Typography sx={{ color: "#fff", fontSize: 14 }}>Sarkar eCommerce © 2024. All Rights Reserved</Typography>
        </div>
        <div style={{ marginRight: "2%" }}>
          <img src={payment} style={{ width: 300, height: "auto" }} />
        </div>
      </Box>
    </ThemeProvider>
  );
}
