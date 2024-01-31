import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../App.css";
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth/useAuth";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { enqueueSnackbar } from "notistack";
import Loaders from "./Loaders";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FormattedMessage } from "react-intl";

const SignUp = ({ setLogReg}: any) => {
  const { request } = useAuth();
  const [showPassword, setShowPassword] = React.useState(false);
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

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Box>
        {display && <Loaders />}
        <Card
          sx={{minWidth:400}}
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
           <FormattedMessage defaultMessage="  Sign up & Get ₹500 OYO Money"/>   
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Inter,sans-serif",
              fontSize: { xl: "30px", md: "25px", sm: "25px" },
              m: 2,
            }}
          >
           <FormattedMessage defaultMessage="  Sign Up"/>   
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
                  <FormattedMessage defaultMessage="  Name"/>   
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
                  <FormattedMessage defaultMessage="   Email"/>  
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
                 <FormattedMessage defaultMessage="  Phone No"/>  
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
                   <FormattedMessage defaultMessage="    Password"/>
                </Typography>
                <FormControl sx={{  width: '47ch' }} variant="outlined">
           
          <OutlinedInput

            id="outlined-adornment-password"
            {...register("password")}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  
                >
                  {showPassword ?<VisibilityOff /> : <Visibility /> }
                </IconButton>
              </InputAdornment>
             
            }
         
          />
        </FormControl>
                <FormHelperText>{errors.password?.message}</FormHelperText>
              </Stack>
              <Button size="small" variant="contained" type="submit" sx={{mt:2,textTransform:'none'}} >
              <FormattedMessage defaultMessage="   SignUp"/>  
              </Button>
            </form>
          </CardContent>
          <Stack direction={"row"} alignItems={"center"} margin={2} justifyContent={"space-between"} >
              <FormattedMessage defaultMessage=" Already have an account?"/>    
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
