import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../App.css";
import { FormHelperText, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth/useAuth";

import { enqueueSnackbar } from "notistack";
import Loaders from "./Loaders";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const SignUp = ({ setLogReg }: any) => {
  const { request } = useAuth();

  const [display, setDisplay] = React.useState(false);
  const onSubmit = async (data: any) => {
    // console.log(data);
    const result = await request.post("/Register", {
      name: data.name,
      phone: data.phone,
      email: data.email,
      password: data.password,
    });

    if (result.data) {
      setDisplay(true);
      enqueueSnackbar("Registered Successfully", {
        variant: "success",
        // autoHideDuration: 1000,
      });

      setTimeout(() => {
        setDisplay(false);
        setLogReg(false);
      }, 2000);
    } else {
      setDisplay(true);
      enqueueSnackbar("Email Already Registered", {
        variant: "error",
        // autoHideDuration: 1000,
      });
      setTimeout(() => {
        setDisplay(false);
        setLogReg(false);
      }, 2000);
    }
  };

  interface User {
    name: string;
    email: string;
    phone: string;
    password: string;
  }
  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .required("First Name is required")
      .min(3)
      .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "should be a string"),
    email: Yup.string().email("invalid email !").required("Email is Required"),
    phone: Yup.string()
      .required("This field is required")
      .max(10, "Max length should be 10")
      .matches(/(?=.*[0-9])\w+/, "Phone No. must be a number"),
    password: Yup.string()
      .required("This field is required")
      .min(8, "Pasword must be 8 or more characters")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])\w+/,
        "Password ahould contain at least one uppercase and lowercase character"
      )
      .matches(/\d/, "Password should contain at least one number")
      .matches(
        /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
        "Password should contain at least one special character"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(FormSchema),
  });

  return (
    <>
      <Box sx={{ width: "100%", position: "relative" }}>
        {display && <Loaders />}
        <Card
          className="oyo-cell loginCard"
          sx={{
            border: "1px solid black",
            mt: { sm: 10, md: 0, xl: 0 },
            ml: { sm: 46, md: 0, xl: 0 },
            width: { sm: 380 },
            b: "1px solid black",
          }}
        >
          <Typography
            sx={{
              backgroundImage: "linear-gradient(270deg,#d11450,#ee2a24)",
              textAlign: "center",
              fontWeight: 700,
              color: "white",
              fontSize: { xl: "20px" },
            }}
            color="text.secondary"
            gutterBottom
          >
            Sign up & Get ₹500 OYO Money
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Inter,sans-serif",
              fontSize: { xl: "30px", md: "25px", sm: "25px" },
              m: 2,
            }}
          >
            Sign Up
          </Typography>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xl: 18, md: 16, sm: 16 },
                  }}
                >
                  Name
                </Typography>
                <TextField
                  id="demo-helper-text-aligned"
                  {...register("name")}
                />
                <FormHelperText>{errors.name?.message}</FormHelperText>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xl: 18, md: 16, sm: 16 },
                  }}
                >
                  Email
                </Typography>
                <TextField
                  sx={{ border: "none" }}
                  id="demo-helper-text-aligned"
                  {...register("email")}
                />
                <FormHelperText>{errors.email?.message}</FormHelperText>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xl: 18, md: 16, sm: 16 },
                  }}
                >
                  Phone No
                </Typography>
                <TextField
                  id="demo-helper-text-aligned"
                  {...register("phone")}
                />
                <FormHelperText>{errors.phone?.message}</FormHelperText>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xl: 18, md: 16, sm: 16 },
                  }}
                >
                  Password
                </Typography>
                <TextField
                  id="demo-helper-text-aligned"
                  type="password"
                  {...register("password")}
                />
                <FormHelperText>{errors.password?.message}</FormHelperText>
              </Stack>
              <Button size="small" variant="contained" type="submit">
                SignUp
              </Button>
            </form>
          </CardContent>
          <Stack direction={"row"} alignItems={"center"} margin={2}>
            <Typography sx={{ width: 200 }}>
              {" "}
              Already have an account?
            </Typography>
            <Button
              onClick={() => {
                setLogReg(false);
              }}
            >
              Login here
            </Button>
          </Stack>
        </Card>
      </Box>
    </>
  );
};
export default SignUp;
