import React, { useState } from 'react';
import { Box, Button, Grid, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Counter from '../atoms/Counter';
import { NavLink } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AllCoupen, getCoupen } from '../../api/getapi/getapis';
import { useSelector } from 'react-redux';

export default function AddToCard() {
    const state = useSelector((state) => state.userData);
    const [productList, setProductList] = useState(state.addtocart.cart);

    const { isLoading: isLoadingAllCoupen, isError: isErrorAllCoupen, data: AllCoupenData, error: AllCoupenError } = useQuery('AllCoupen', AllCoupen);
    const { isLoading: isLoadinggetCoupen, isError: isErrorgetCoupen, data: getCoupenData, error: getCoupenError } = useQuery('getCoupen',()=>getCoupen(200));

    const handleCounterChange = (value, index) => {
        const updatedProductList = productList.map((product, i) => 
            i === index ? { ...product, count: value } : product
        );
        setProductList(updatedProductList);
    };

    const calculateTotal = () => {
        let total = 0;
        productList.forEach(product => {
            total += product.price * product.count;
        });
        return total;
    };

    return (
        <Box sx={{ px: {md:10,xs:3}, justifyContent: "center", alignItems: "center", display: "flex", my: 5, flexDirection: "column" }}>
            <Typography sx={{ fontSize: 30, fontWeight: 600 }}>My Shopping Cart</Typography>
            <Grid container spacing={5} sx={{my:2}}>
                <Grid item md={8} xs={12}>
                    <TableContainer component={Paper} variant='outlined' sx={{borderRadius:2}}>
                        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'>PRODUCT</TableCell>
                                    <TableCell align="center">PRICE</TableCell>
                                    <TableCell align="center">QUANTITY</TableCell>
                                    <TableCell align="center">SUBTOTAL</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {productList.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                                                <img src={row.img} width={100} alt={row.name} />
                                                <Typography sx={{ fontSize: 15, fontWeight: 400,textTransform:"capitalize" }}>{row.productName}</Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell align="center">₹ {row.price}</TableCell>
                                        <TableCell align="center" sx={{ mx: 2 }}>
                                            <Counter
                                                onCounterChange={(newCount) => handleCounterChange(newCount, index)}
                                                counter={row.count}
                                                recno={row}
                                            />
                                        </TableCell>
                                        <TableCell align="center">₹ {row.price * row.count}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell><Button variant="contained" sx={{bgcolor:"#F2F2F2",":hover":{backgroundColor:"#F2F2F2"},fontSize:14,fontWeight:600,color:"#4D4D4D",textTransform:"capitalize",borderRadius:20,height:40}}>Return To Shop</Button></TableCell>
                                    <TableCell />
                                    <TableCell />
                                    <TableCell><Button variant="contained" sx={{bgcolor:"#F2F2F2",":hover":{backgroundColor:"#F2F2F2"},fontSize:14,fontWeight:600,color:"#4D4D4D",textTransform:"capitalize",borderRadius:20,height:40}}>Update Cart</Button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Paper sx={{my:2}} variant='outlined' elevation={3} >
                        <Box sx={{p:2,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <Typography sx={{fontSize:18,fontWeight:600}}>Coupon Code</Typography>
                            <Paper variant='outlined'
                                sx={{ display: 'flex', alignItems: 'center',backgroundColor:"#fff",color:"#000",borderRadius:20,width:"80%",pl:1 }}
                            >
                                <InputBase
                                    sx={{ flex: 2,color:"#000", '&::placeholder': {
                                        color: "#000",
                                    } }}
                                    placeholder="Enter Code"
                                />
                                <Button variant="contained"  sx={{borderRadius:20,backgroundColor:"#000",":hover":{backgroundColor:"#000"},textTransform:"capitalize",fontFamily:"sans-serif"}}>
                                    Apply Coupon
                                </Button>
                            </Paper>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item md={4}>
                    <TableContainer component={Paper} variant='outlined' sx={{borderRadius:2}}>
                        <Table sx={{ minWidth: 100 }} aria-label="spanning table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='Left'>Cart Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Box sx={{justifyContent:"space-between",display:"flex"}}>
                                            <Typography sx={{ fontSize: 16, fontWeight: 400 }}>Subtotal:</Typography>
                                            <Typography sx={{ fontSize: 16, fontWeight: 600 }}>₹ {calculateTotal()}</Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Box sx={{justifyContent:"space-between",display:"flex"}}>
                                            <Typography sx={{ fontSize: 16, fontWeight: 400 }}>Shipping:</Typography>
                                            <Typography sx={{ fontSize: 16, fontWeight: 400 }}>Free</Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Box sx={{justifyContent:"space-between",display:"flex"}}>
                                            <Typography sx={{ fontSize: 16, fontWeight: 400 }}>Total:</Typography>
                                            <Typography sx={{ fontSize: 16, fontWeight: 600 }}>₹ {calculateTotal()}</Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align='center'>
                                        <NavLink to="/Billing">
                                            <Button variant="contained" sx={{bgcolor:"#8900BA",":hover":{backgroundColor:"#8900BA"},fontSize:14,fontWeight:600,color:"#fff",textTransform:"capitalize",borderRadius:20,height:40,px:10}}>Proceed To Checkout</Button>
                                        </NavLink>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Box>
    );
}
