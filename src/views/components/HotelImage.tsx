import { Box, Dialog, DialogContent, DialogTitle, Divider, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from "@mui/icons-material/Close";




  /**
*  To display Image Preview. Markdown is *HotelImage*.
*/
function HotelImage(props:any) {
    const handleClose = () => {
        props.setImagePreView(false);
      };
    console.log(props.previewIndex);
    
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

         <Typography variant="h6" >{props.photoValue}</Typography> 

          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <Divider/>
      <DialogContent>
      
        <Box
          component={"img"}
          width={450}
          src={props.previewIndex}

        /> 

        
      </DialogContent>
    </Dialog>
  )
}

export default HotelImage
