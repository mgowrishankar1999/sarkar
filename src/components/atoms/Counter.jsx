import React, { useState } from 'react';
import { IconButton, Box } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addTocart } from '../../Redux/reducers/user-reducer';

function Counter({ width, height, recno,fullWidth,counter,onCounterChange }) {
  const dispatch = useDispatch();
  console.log(Number(counter))

  const [count, setCount] = useState(counter?counter:0); // Initialize count to 2, you can set it to any initial value you want

  console.log("mine",Number(count)+1)

  const handleAdd = () => {
    const newCount = Number(count) + 1;
    setCount(newCount);
    dispatch(addTocart({ recno: recno.recno,img:recno.image_path,recnoName:recno.recnoname,price:recno.salesrate,mrp:recno.mrp,barcodeno:recno.barcodeno,batch:recno.batch,wholesalerate:recno.wholesalerate,avgpurcost:recno.avgpurcost, count:count }));
    onCounterChange(newCount)
  };

  const handleMinus = () => {
    const newCount = Number(count) > 0 ? Number(count) - 1 : 0;
    setCount(newCount);
    dispatch(addTocart({ recno: recno.recno,img:recno.image_path,recnoName:recno.recnoname,price:recno.salesrate,mrp:recno.mrp,barcodeno:recno.barcodeno,batch:recno.batch,wholesalerate:recno.wholesalerate,avgpurcost:recno.avgpurcost, count:count }));
    onCounterChange(newCount)

  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: 120,
        padding: fullWidth ? 0 : 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      }}
    >
      <IconButton onClick={handleMinus} sx={{ width: width ? width : 40, height: height ? height : 40, borderRadius: 20, bgcolor: '#00B207' }}>
        <RemoveIcon sx={{ fontSize: 20, color: '#000' }} />
      </IconButton>
      <input
        type="text"
        value={count}
        readOnly
        style={{
          width: 40,
          height: height ? height : 40,
          textAlign: 'center',
          border: 'none',
          background: 'transparent',
          outline: 'none',
          fontSize: 16,
          fontWeight: 400,
        }}
        maxLength={2}
      />
      <IconButton onClick={handleAdd} sx={{ width: width ? width : 40, height: height ? height : 40, borderRadius: 50, bgcolor: '#00B207' }}>
        <AddIcon sx={{ fontSize: 20, color: '#000' }} />
      </IconButton>
    </Box>
  );
}

export default Counter;
