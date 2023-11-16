import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


export default function BasicCard() {
  return (
    <Card sx={{ width:"100%" }}>
      <CardContent>
        <Typography sx={{ fontSize:"20px", mt:1}} color="text.secondary" gutterBottom>
            OYO
        </Typography>
       
      </CardContent>
    
    </Card>
  );
}
