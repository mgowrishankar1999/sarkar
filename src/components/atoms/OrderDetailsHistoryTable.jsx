
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Sale } from '../../Data/MyaccountData';
import { Typography } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function OrderDetailsHistoryTable() {
  return (
    <TableContainer component={Paper} sx={{width:"100%"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{bgcolor:"grey"}}>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align='center'>Price</TableCell>
            <TableCell align='center'>Quantity</TableCell>
            <TableCell align='center'>Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Sale.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{display:"flex",alignItems:"center"}}>
                <img src={row.image} width={80}/>&nbsp;<Typography sx={{fontSize:18}}>{row.name}</Typography>
              </TableCell>
              <TableCell align='center' sx={{fontSize:18}}>{row.price}</TableCell>
              <TableCell align='center' sx={{fontSize:18}} >x5</TableCell>
              <TableCell align='center' sx={{fontWeight:600,fontSize:18}} >$70.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}