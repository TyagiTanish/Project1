import { Box, Button, FormHelperText, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { useSelector } from "react-redux";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/user/userSlice";
import { enqueueSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
function Update() {
  const dispatch = useDispatch();
  const intl = useIntl();
  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .required(
        intl.formatMessage({ defaultMessage: "Name is required" })
      )
      .min(3)
      .matches(
        /^[A-Z][a-zA-Z]*( [a-zA-Z]*)*$/,
        intl.formatMessage({
          defaultMessage:
            "First Letter of name should be capital and name should be string",
        })
      ),
  
    phone: Yup.string()
      .required(intl.formatMessage({defaultMessage:'Phone Number is a required'}))
      .min(
        10,
        intl.formatMessage({ defaultMessage: "Min length should be 10" })
      )
      .max(
        10,
        intl.formatMessage({ defaultMessage: "Max length should be 10" })
      )
      .matches(
        /^[789]\d{9}$/,
        intl.formatMessage({
          defaultMessage:
            "Phone No. must not contain any special character and should start with 9 , 7 or 8",
        })
      ),
     
     
 
   
   
  });
  interface User {
    name  : any;
    phone: any;
    
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any, User>({
    resolver: yupResolver(FormSchema),
  })

  const user = useSelector((state: any) => state.userReducer.user);
  // console.log(user);

  const { request } = useAuth();
  const onSubmit1 = async (data: any) => {
    const result = await request.put(`/username/${user?._id}`, {
      name: data.name,
      phone: data.phone,
    });

    if (result.data) {
      enqueueSnackbar(intl.formatMessage({defaultMessage:"Username updated successfully"}), {
        variant: "success",
        autoHideDuration: 1000,
      });
    }

    const data2 = await request.get("/getUserData");
    dispatch(userLogin(data2.data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit1)}>
      <Typography
        sx={{ fontWeight: "bold", mt: 2, fontSize: { xl: 15, md: 14, sm: 13 } }}
      >
        <FormattedMessage defaultMessage="Name:" />
      </Typography>

      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{ width: { sm: 300, md: 500 }, mt: 1, fontSize: { xl: 15, md: 2 } }}
        {...register("name")}
        defaultValue={user?.name}
        inputProps={{
          style: {
            height: 15,
          },
        }}
      />
          {errors.name?.message && (
                      <FormHelperText sx={{ color: "red" }}>
                        {errors.name?.message.toString()}
                      </FormHelperText>
                    )}
      <Typography
        sx={{ fontWeight: "bold", mt: 2, fontSize: { xl: 15, md: 14, sm: 13 } }}
      >
        <FormattedMessage defaultMessage="Phone No:" />
      </Typography>

      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{ width: { sm: 300, md: 500 }, mt: 1, fontSize: { xl: 15, md: 2 } }}
        {...register("phone")}
        defaultValue={user?.phone}
        inputProps={{
          style: {
            height: 15,
          },
        }}
      />
    {errors.phone?.message && (
                      <FormHelperText sx={{ color: "red" }}>
                        {errors.phone?.message.toString()}
                      </FormHelperText>
                    )}
      <Box>
        <Button
          variant="contained"
          sx={{
            width: { lg: 250, md: 220 },
            mt: 2,
            textTransform: "none",
            fontWeight: "bold",
            fontSize: { xl: 14, md: 12, sm: 10 },
            backgroundImage: "linear-gradient(270deg,#D11450,#EE2A24)",
          }}
          type="submit"
        >
          <FormattedMessage defaultMessage="Update Personal Information" />
        </Button>
      </Box>
    </form>
  );
}

export default Update;
