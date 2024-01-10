import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
import { userLogin } from "./redux/user/userSlice";
import { useIntl, FormattedMessage } from "react-intl";
function Password() {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.userReducer.user);
  console.log(user);

  const { request } = useAuth();
  const onSubmit2 = async (data: any) => {
    const result = await request.put(`/password/${user?._id}`, {
      password: data.oldpassword,
      newpassword: data.newpassword,
    });
    if (!result.data) {
      enqueueSnackbar("Wrong Password", {
        variant: "error",
        autoHideDuration: 1500,
      });
    } else {
      enqueueSnackbar("Updated Successfully", {
        variant: "success",
        autoHideDuration: 1000,
      });
      const data2 = await request.get("/getUserData");
      dispatch(userLogin(data2.data));
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit2)}>
      <Typography
        sx={{ fontWeight: "bold", mt: 2, fontSize: { xl: 15, md: 14, sm: 13 } }}
      >
        <FormattedMessage defaultMessage=" Old password:" />
      </Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{ width: { sm: 300, md: 500 }, mt: 1 }}
        {...register("oldpassword")}
        inputProps={{
          style: {
            height: 15,
          },
        }}
      />
      <Typography
        sx={{ fontWeight: "bold", mt: 2, fontSize: { xl: 15, md: 14, sm: 13 } }}
      >
        <FormattedMessage defaultMessage=" New password:" />
      </Typography>
      <TextField
        id="outlined-basic"
        sx={{ width: { sm: 300, md: 500 }, mt: 1 }}
        {...register("newpassword")}
        inputProps={{
          style: {
            height: 15,
          },
        }}
      />

      <Box>
        <Button
          variant="contained"
          sx={{
            width: { lg: 180, md: 150 },
            mt: 2,
            textTransform: "none",
            fontWeight: "bold",
            fontSize: { xl: 14, md: 12, sm: 11 },
            backgroundImage: "linear-gradient(270deg,#D11450,#EE2A24)",
          }}
          type="submit"
        >
          <FormattedMessage defaultMessage="  Change Password" />
        </Button>
      </Box>
    </form>
  );
}

export default Password;
