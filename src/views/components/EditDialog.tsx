import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Divider,
  FormControl,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import useAuth from "../../Hooks/useAuth/useAuth";

import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";

export default function EditDialog({ open, setOpen, item, setItem ,setRender}: any) {
  const { request } = useAuth();
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setItem(item);
    // console.log(item);
  };
  const [age, setAge] = React.useState("Admin");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleDelete =async () => {
 await  request.put(`/memberDelete/${item?._id}`);
   
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    values: {
      firstName: item?.name,
      phone: item?.phone,
      email: item?.email,
      role: item?.role,
    },
  });
  const onSubmit = async(data: any) => {
   await request.put(`/memberUpdate/${item?._id}`, data);
    setRender((prev:any)=> prev+1)
    handleClose();
  };
  React.useMemo(() => {
    setTimeout(() => {
      reset();
    }, 1000);
  }, [open]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}> <DialogTitle id="responsive-dialog-title">{item?.name}</DialogTitle><Box sx={{mr:1,cursor:'pointer'}} onClick={handleClose}><CloseIcon fontSize="small"/></Box></Stack>
       
        <Divider />
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction={"column"} spacing={2}>
              <Stack direction={"row"} spacing={3}>
                {" "}
                <TextField
                  label="First Name*"
                  {...register("firstName")}
                  sx={{ width: 250, borderRadius: 90 }}
                />
                <TextField
                  label="Phone*"
                  sx={{ width: 250 }}
                  {...register("phone")}
                />
              </Stack>
              <Stack direction={"row"} spacing={3}>
                {" "}
                <TextField
                  label="Email*"
                  sx={{ width: 250 }}
                  {...register("email")}
                />
                {/* <TextField label="Role*" sx={{ width: 250 }} /> */}
                <FormControl sx={{ width: 250 }}>
                  <InputLabel id="demo-simple-select-label">Role*</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Role*"
                    {...register("role")}
                    onChange={handleChange}
                  >
                    <MenuItem value={"Customer"}>Customer</MenuItem>
                    <MenuItem value={"Admin"}>Admin</MenuItem>
                    <MenuItem value={"Super Admin"}>Super Admin</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Stack>

            <Divider />

            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              spacing={0}
              padding={1}
            >
              {" "}
              <Box>
                <Button variant="outlined" size="small" onClick={handleClose}>
                <FormattedMessage defaultMessage="Cancel" />  
                </Button>
              </Box>{" "}
              <Stack direction={"row"} spacing={2}>
                {" "}
                <Button
                  autoFocus
                  onClick={() => {
                    {
                      handleClose();
                      handleDelete();
                    }
                  }}
                  variant="outlined"
                  size="small"
                >
                <FormattedMessage defaultMessage=" Delete" />  
                </Button>
                <Button
                  autoFocus
                  variant="contained"
                  size="small"
                  type="submit"
                >
                <FormattedMessage defaultMessage="Save"  />
                </Button>
              </Stack>
            </Stack>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
