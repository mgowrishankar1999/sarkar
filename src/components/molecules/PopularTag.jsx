import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Chip, Collapse, List, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { GetProductType } from '../../api/getapi/shopPageApi';
import { useProductType, useSubProductType } from '../../utils/redux-hooks';
import { categories } from '../..';
import Skeleton from 'react-loading-skeleton';

export default function PopularTag({ onSelectCategory }) {
    const [open, setOpen] = useState(true);
    const [selectedChips, setSelectedChips] = useState([]);

    const body = {
        subProductType:useSubProductType(),
        productType:useProductType()
    }
    const { isLoading, isError, error,data:filterdata } = useQuery('PopularTag', () => GetProductType(body));

    const handleClick = () => {
        setOpen(!open);
    };

    const handleChipClick = (index) => {
        const selectedIndex = selectedChips.indexOf(index);
        let newSelected = [...selectedChips];

        if (selectedIndex === -1) {
            // Chip is not selected, add it to the selected chips
            newSelected.push(index);
        } else {
            // Chip is already selected, remove it from the selected chips
            newSelected.splice(selectedIndex, 1);
        }

        setSelectedChips(newSelected);
        onSelectCategory( newSelected.map(index => categories[index].label));
    };

    return (
        <List sx={{ width: 250 }}>
        <ListItemButton onClick={handleClick}>
            <ListItemText primary="Popular Tag" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding >
                <Stack direction="row" sx={{ width: 250, display: "flex", flexWrap: "wrap",gap:1 }} spacing={1}>
                    {isLoading ? categories.map((item, index) => (
                        <Skeleton/>
                    )):filterdata.data.map((item,index)=>
                    <Chip
                    key={index}
                    label={item.brandname}
                    onClick={() => handleChipClick(index)}
                    sx={{
                        backgroundColor: selectedChips.includes(index) ? "#8900BA" : "#F2F2F2",
                        color: selectedChips.includes(index) ? "#fff" : "inherit",
                        '&:hover': {
                            backgroundColor: selectedChips.includes(index) ? "#8900BA" : "#F2F2F2",
                            color: selectedChips.includes(index) ? "#fff" : "inherit",
                        },
                        
                    }}
                />)}
                </Stack>
            </List>
        </Collapse>
    </List>
    
    );
}
