import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import useAuth from '../../Hooks/useAuth/useAuth';
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function AlertDialogSlide({handleCloseDelete,open2,_id}:any) {
  const { request } = useAuth();
  const handleDelete=async()=>{
    const result = await request.delete(`/deleteHotel/${_id}`);
    console.log(result);
  }
  return (
    <React.Fragment>
      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDelete}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Warning</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Do You Want to Delete This Hotel ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{handleCloseDelete();
              handleDelete()
          }}>Yes</Button>
          <Button onClick={handleCloseDelete}>No</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}