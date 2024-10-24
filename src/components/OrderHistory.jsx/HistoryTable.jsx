import React from 'react'
import { makeStyles } from '@mui/styles';
import {withStyles} from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Text from '../atoms/Text';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  const TableHeads = withStyles((theme) => ({
    root: {
      backgroundColor: "#F2F2F2",
      color: "black",
      fontSize: "1.2em",
      borderRadius: 0,
    },
  }))(TableHead);
  
  const TableHeaderCell = withStyles((theme) => ({
    root: {
      color: "black",
      fontSize: "1em",
    },
  }))(TableCell);


  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  

export default function HistoryTable() {
    const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={0} sx={{border:'1px solid #E6E6E6'}}>
      <Table className={classes.table} aria-label="simple table">
        <TableHeads>
          <TableRow>
            <TableHeaderCell>Dessert (100g serving)</TableHeaderCell>
            <TableHeaderCell align="right">Calories</TableHeaderCell>
            <TableHeaderCell align="right">Fat&nbsp;(g)</TableHeaderCell>
            <TableHeaderCell align="right">Carbs&nbsp;(g)</TableHeaderCell>
            <TableHeaderCell align="right"></TableHeaderCell>
          </TableRow>
        </TableHeads>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell style={{width:"15%"}}>
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">
              <Text fontSize={12} fontWeight={500} value='View all' color='#00B207' /> 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
