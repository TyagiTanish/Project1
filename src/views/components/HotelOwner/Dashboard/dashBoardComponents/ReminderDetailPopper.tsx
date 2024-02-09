import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import { Stack, Typography } from '@mui/material';

export default function TransitionsPopper({open,anchorEl,value}:any) {

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <div>
      <Popper id={id} open={open} anchorEl={anchorEl} transition placement='right-end'   >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper',marginLeft:'30px' }}>
              <Stack>
                <Typography variant='h6' fontWeight={'bolder'}>{value?.hotelId?.hotelName}</Typography>
                <Typography></Typography>
              </Stack>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}