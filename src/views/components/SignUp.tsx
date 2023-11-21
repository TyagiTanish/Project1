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
import { useNavigate } from "react-router-dom";
import { log } from "console";
import { enqueueSnackbar } from "notistack";
import Loaders from "./Loaders";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";




const SignUp = ({ setLogReg }: any) => {
  const { request } = useAuth();

  const [display, setDisplay] = React.useState(false);

  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    // console.log(data);
    const result = await request.post("/Register", {
      name: data.name,
      phone: data.phone,
      email: data.email,
      password: data.password,
    });

    if (result.data) {
      enqueueSnackbar("Registered Successfully", {
        variant: "success",
        autoHideDuration: 1000,
      });
    } else {
      setDisplay(true);
      enqueueSnackbar("Email Already Registered", {
        variant: "error",
        autoHideDuration: 1000,
      });
      setTimeout(() => {
        setDisplay(false);
        setLogReg(false);
      }, 2000);
    }
  };

interface User{
  name:string,
  email:string,
  phone:string,
  password:string,

}
const FormSchema = Yup.object().shape({
  name: Yup.string().required('First Name is required').min(3).matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "should be a string"),
  email: Yup.string().email('invalid email !').required("Email is Required"),
  phone:Yup.string().required("This field is required").max(10,"Max length should be 10").matches(/(?=.*[0-9])\w+/, "Phone No. must be a number"),
  password: Yup.string()
  .required("This field is required")
  .min(8, "Pasword must be 8 or more characters")
  .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
  .matches(/\d/, "Password should contain at least one number")
  .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),
})

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(FormSchema),
  });

  return (
    <Card
      className="oyo-cell loginCard"
      sx={{
        border: "1px solid black",
        width: 470,
        // height: "40vh",
        b: "1px solid black",
      }}
    >
      {display && <Loaders />}
      <Typography
        sx={{
          backgroundImage: "linear-gradient(270deg,#d11450,#ee2a24)",
          margin: "0",
          paddingLeft: "50px",
          paddingTop: "5px",
          paddingBottom: "5px",
          color: "white",
          fontWeight: "bold",
          width: "100%",
        }}
        color="text.secondary"
        gutterBottom
      >
        Sign up & Get ₹500 OYO Money
      </Typography>
      <Typography
        sx={{
          margin: 2,
          fontWeight: "bold",
          fontFamily: "Inter,sans-serif",
          fontSize: "30px",
          marginBottom: 1,
        }}
      >
        Sign Up
      </Typography>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <Typography sx={{ fontWeight: "bold" }}>Name</Typography>
            <TextField
              // sx={{width:"400px"}}
              id="demo-helper-text-aligned"
              // label="name"
              sx={{ mb: 8, height: 2 }}
              {...register("name")}
            />
              <FormHelperText>{errors.name?.message}</FormHelperText>
            <Typography sx={{ fontWeight: "bold" }}>email</Typography>
            <TextField
              sx={{ mb: 8, height: 2, border: "none" }}
              id="demo-helper-text-aligned"
              {...register("email")}
            />
            <FormHelperText>{errors.email?.message}</FormHelperText>
            <Typography sx={{ fontWeight: "bold" }}>Phone No</Typography>
            <TextField
              // sx={{width:"400px"}}
              id="demo-helper-text-aligned"
              // label="name"
              sx={{ mb: 8, height: 2 }}
              {...register("phone")}
            />
              <FormHelperText>{errors.phone?.message}</FormHelperText>
            <Typography sx={{ fontWeight: "bold" }}>Password</Typography>
            <TextField
              // sx={{width:"400px"}}
              id="demo-helper-text-aligned"
              // label="name"
              sx={{ mb: 8, height: 2 }}
              {...register("password")}
            />
              <FormHelperText>{errors.password?.message}</FormHelperText>
            {/* <Typography sx={{ fontWeight: "bold" }}>
              Enter four-digit passcode
            </Typography> */}
            {/* <TextField sx={{ mb: 8, height: 2 }} id="demo-helper-text-aligned"     {...register("otp")}/> */}
          </Stack>
          <Button
            size="small"
            variant="contained"
            type="submit"
            sx={{ width: 150, mt: 3, ml: 0.5, fontSize: 15 }}
          >
            SignUp
          </Button>
        </form>
      </CardContent>
      <Box sx={{ display: "flex", width: 500, mt: 3, ml: 9, mb: 2 }}>
        <Typography sx={{ width: 200 }}> Already have an account?</Typography>
        <Button
          sx={{ mt: -1 }}
          onClick={() => {
            setLogReg(false);
          }}
        >
          Login here
        </Button>
      </Box>
    </Card>
  );
};
export default SignUp;
