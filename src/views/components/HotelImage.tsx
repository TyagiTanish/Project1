import { Box, Dialog, DialogContent, DialogTitle, Divider, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
function HotelImage(props:any) {
    const handleClose = () => {
        props.setImagePreView(false);
      };
    console.log(props.open);
    
  return (
    <Dialog
    //   fullScreen={fullScreen}
      open={props.imagePreView}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth={"md"}
    >
      <DialogTitle>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={'center'}  >
         <Typography variant="h6" >{props.previewIndex}</Typography> 
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <Divider/>
      <DialogContent>
        {props.open===false ? 
        <Box
          component={"img"}
          width={450}
          src={`http://localhost:8000/${props.previewIndex}`}
        /> :
         <Box
        component={"img"}
        width={450}
        src={`./props.previewIndex`}
      />}
        
      </DialogContent>
    </Dialog>
  )
}

export default HotelImage
