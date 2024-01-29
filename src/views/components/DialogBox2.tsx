import React from 'react'
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
function DialogBox2({open,handleClose}:any) {
  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="md">
    <DialogTitle textAlign={"center"}></DialogTitle>
    <hr />
   
  </Dialog>
  )
}

export default DialogBox2
