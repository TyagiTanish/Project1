import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}`;
}

export default function RangeSlider({price,setPrice}:any) {

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  return (
    <Box sx={{ width: "80%" }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={50000}
        step={5000}
      />
    </Box>
  );
}