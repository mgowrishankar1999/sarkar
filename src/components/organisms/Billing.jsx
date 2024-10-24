import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, MenuItem, OutlinedInput, Paper, Radio, RadioGroup, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Area, getAddress, order } from '../../api/getapi/getapis';
import { useMutation, useQuery } from 'react-query';

const style = {
  fontSize: 16,
  color: "#1a1a1a",
  fontWeight: 400,
  mb: 1,
  mt: { xs: 2 }
};

const textfield = {
  width: { xs: "100%" }
};

const radio = {
  '&.Mui-checked': {
    color: "#8900BA",
  }
};

export default function Billing() {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [cname, setCName] = useState('');
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState('');
  const [emailVar, setEmailVar] = useState('');
  const [pincode, setPincode] = useState("");
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('cash on delivery');
  const [notes,setNotes]=useState('')
  const [queryKey, setQueryKey] = useState(null);
  
  const { isLoading: isLoadingAddress, isError: isErrorAddress, data: AddressData, error: AddressError } = useQuery(
    queryKey,
    getAddress,
    {
      enabled: !!queryKey, // Ensures the query runs only if queryKey is not null
    }
  ); 
  const { isLoading: isLoadingArea, isError: isErrorArea, data: AreaData, error: AreaError } = useQuery('Area', Area);
  const mutation = useMutation((orderData) => order(orderData));
  const { isLoading: isLoadingOrder, isError: isErrorOrder, data: OrderData, error: OrderError} = mutation;

  const state = useSelector((state) => state.userData);

  const data = state.addtocart.cart;

  const total = data.reduce((acc, item) => acc + (item.price * item.count), 0);
  const shipping = 0;
  const aftership = total + shipping;

  const handleRadio = (event) => {
    setValue(event.target.value);
  };

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    if (country && AreaData) {
      const selectedCity = AreaData.postalcodes.data.find(item => item.area === country);
      if (selectedCity) {
        setPincode(selectedCity.postcode);
      }
    }
  }, [country, AreaData]);

  const handleButtonClick = () => {
    // const ad1 = address;
    // const ad2 = country;
    // const ad3 = "India";
    // const mno = phone;
    // const pin = pincode;
    // const nam = `${fname} ${lname}`;
    // const email = emailVar;

    // setQueryKey(['Address', ad1, ad2, ad3, mno, pin, country, email, nam, token]);

    const products = data.map(item => ({
      productrecno: item.recno,
      unit: "PCS",
      qty: item.count,
      rate: item.price,
      barcodeno: item.barcodeno || '',
      batch: item.batch || '',
      mrp: item.mrp,
      wholesalerate: item.wholesalerate,
      avgpurcost: item.avgpurcost
    }));

    const orderData = {
      eo_custrecno: 1,
      eo_status: "PENDING",
      eo_deliverydt: "2024-05-02",
      eo_deliverytime: "23:00:00",
      eo_paymentmode: "Cash",
      eo_deladdress: address,
      eo_ordernote: notes,
      eo_value: aftership,
      eo_deliverymethod: value,
      deliverychrg: "0",
      couponRecno: 1,
      discount: 0,
      products
    };

    mutation.mutate(orderData);
  };

  return (
    <Box sx={{ px: { md: 20, xs: 5 }, my: 5 }}>
      <Grid container spacing={5}>
        <Grid item md={8} sm={12}>
          <Typography sx={{ fontSize: 20, fontWeight: 600, color: "#1A1A1A" }}>Billing Information</Typography>
          <Box sx={{ display: { md: "flex" }, flexDirection: "row", my: 2, gap: 5 }}>
            <div>
              <Typography sx={style}>First Name</Typography>
              <TextField
                placeholder='First Name'
                sx={textfield}
                value={fname}
                onChange={(event) => {
                  setFName(event.target.value);
                }}
              />
            </div>
            <div>
              <Typography sx={style}>Last Name</Typography>
              <TextField
                placeholder='Last Name'
                sx={textfield}
                value={lname}
                onChange={(event) => {
                  setLName(event.target.value);
                }}
              />
            </div>
            <div>
              <Typography sx={style}>Company Name<span style={{ color: "grey" }}>(optional)</span></Typography>
              <TextField
                placeholder='Company Name'
                sx={textfield}
                value={cname}
                onChange={(event) => {
                  setCName(event.target.value);
                }}
              />
            </div>
          </Box>
          <Box >
            <Typography sx={style}>Street Address</Typography>
            <TextField
              placeholder='Street Address'
              value={address}
              sx={{ width: { md: 750, xs: "100%" } }}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
            <Box sx={{ display: { md: "flex" }, flexDirection: "row", my: 2, gap: 5 }}>
              <div>
                <Typography sx={style}>City</Typography>
                <Select
                  displayEmpty
                  value={country}
                  sx={{ width: 300 }}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem disabled value="">
                    <em style={{ color: "gray" }}>Select </em>
                  </MenuItem>
                  {AreaData && AreaData.postalcodes.data.map((name, index) => (
                    <MenuItem
                      key={index}
                      value={name.area}
                    >
                      {name.area}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div>
                <Typography sx={style}>States</Typography>
                <TextField
                  sx={{ width: 300 }}
                  placeholder='Pin Code'
                  value={pincode}
                  onChange={(event) => {
                    setPincode(event.target.value);
                  }}
                />
              </div>
            </Box>
            <Box sx={{ display: { md: "flex" }, flexDirection: "row", my: 2, gap: 5 }}>
              <div>
                <Typography sx={style}>Email</Typography>
                <TextField
                  sx={{ width: 300 }}
                  placeholder='Email Address'
                  value={emailVar}
                  onChange={(event) => {
                    setEmailVar(event.target.value);
                  }}
                />
              </div>
              <div>
                <Typography sx={style}>Phone Number</Typography>
                <TextField
                  sx={{ width: 300 }}
                  placeholder='Phone Number'
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                />
              </div>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <Checkbox
                checked={checked}
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <Typography sx={{ fontSize: 16, fontWeight: 400 }}>Ship to a different address</Typography>
            </Box>
          </Box>
          <Divider sx={{ my: 3 }} />
          <Box>
            <Typography sx={{ fontSize: 20, fontWeight: 600, color: "#1A1A1A" }}>Additional Info</Typography>
            <Typography sx={style}>Order Notes (Optional)</Typography>
            <TextField
              multiline
              rows={4}
              value={notes}
              onChange={(event) => {
                setNotes(event.target.value);
              }}
              placeholder="Notes about your order, e.g. special notes for delivery"
              variant="outlined"
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item md={4} sm={12}>
          <TableContainer component={Paper} variant='outlined' sx={{ borderRadius: 2 }}>
            <Table sx={{ minWidth: 150 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align='Left' sx={{ fontSize: 20, fontWeight: 600 }}>Order Summary</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell >
                    {data && data.map((item, index) => (
                      <Box key={index} sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between', flexDirection: "row" }}>
                        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                          <img src={item.img} style={{ width: 50 }} />
                          <Typography sx={{ fontSize: 16, fontWeight: 400 }}>{item.productName}x{item.count}</Typography>
                        </Box>
                        <Typography sx={{ fontSize: 14, fontWeight: 600 }}>₹{item.price * item.count}</Typography>
                      </Box>
                    ))}
                    <Box sx={{ justifyContent: "space-between", display: "flex", mt: 2 }}>
                      <Typography sx={{ fontSize: 16, fontWeight: 400 }}>Subtotal:</Typography>
                      <Typography sx={{ fontSize: 14, fontWeight: 600 }}>₹{total}</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Box sx={{ justifyContent: "space-between", display: "flex" }}>
                      <Typography sx={{ fontSize: 16, fontWeight: 400 }}>Shipping:</Typography>
                      <Typography sx={{ fontSize: 16, fontWeight: 400 }}>Free</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Box sx={{ justifyContent: "space-between", display: "flex" }}>
                      <Typography sx={{ fontSize: 16, fontWeight: 400 }}>Total:</Typography>
                      <Typography sx={{ fontSize: 14, fontWeight: 600 }}>₹{aftership}</Typography>
                    </Box>
                    <Box sx={{ my: 2 }}>
                      <Typography sx={{ fontSize: 20, fontWeight: 600, mt: 2 }}>Payment Method</Typography>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleRadio}
                      >
                        <FormControlLabel value="cash on delivery" control={<Radio sx={radio} />} label="Cash On Delivery" />
                        <FormControlLabel value="paypal" control={<Radio sx={radio} />} label="PayPal" />
                        <FormControlLabel value="amazonpay" control={<Radio sx={radio} />} label="Amazon Pay" />
                      </RadioGroup>
                    </Box>
                    <Box>
                      <Button variant="contained" onClick={handleButtonClick} sx={{ bgcolor: "#8900BA", ":hover": { backgroundColor: "#8900BA" }, fontSize: 14, fontWeight: 600, color: "#fff", textTransform: "capitalize", borderRadius: 20, height: 40, px: 10 }}>Proceed To Checkout</Button>
                    </Box>
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
