import {
  Box,
  Button,
  Card,
  FormHelperText,

  TextField,
  Typography,
} from "@mui/material";
import { mt } from "date-fns/locale";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "../../Hooks/useAuth/useAuth";
import { enqueueSnackbar } from "notistack";
import {useDispatch} from "react-redux";
import { userLogin } from "./redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import Loaders from "./Loaders";


function SignUpComp({ setVerify, setLogReg }: any) {
  const { request } = useAuth();
  const [state, setState] = useState(false);
  const [display,setDisplay]=useState(false);
  const [authentication, setAuthentication] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate()


  const Onsubmit = async (value: any) => {
    if (!value.password) {
      const result = await request.post("/auth", value);
      console.log(result.data);

      if (result.data) {
        setState(true);
        setAuthentication("");
      } else {
        enqueueSnackbar("Authentication Failed", { variant: "error" });
        setAuthentication("email not Found");
        setState(false);
      }
    }else{
      const result = await request.post("/auth", value);
      console.log(result.data);
      
      if(result.data){
        setDisplay(true);
        setTimeout(()=>{

           dispatch(userLogin(result.data.data))
        localStorage.setItem("authToken",result.data.token);

        },2000)
        
       
        
        console.log("hello,0000000000000");
        
       
      }else{
        setAuthentication("Invalid Credentials")
      }
    
    }
  };
  const FormSchema = Yup.object().shape({
    email: Yup.string().email("invalid email !").required("email is Required"),
  });

  interface User {
    email: string;
    password?: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(FormSchema),
  });
  return (
    <>

<Box sx={{width:"100%", position:"relative"}}>
    {display && <Loaders/>}
      <Box
        sx={{
          // height: "400px",
          maxHeight: "800px",
          Width: "500px",

          fontFamily: "sans-serif",
          alignSelf: "flex-start",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            // background: "#D4164B",
            backgroundImage: "linear-gradient(270deg,#d11450,#ee2a24)",
            minHeight: "30px",
            paddingTop: 1,
            paddingLeft: 6,
            fontWeight: 700,
            color: "white",
          }}
        >
          Sign up & Get ₹500 OYO Money
        </Box>
        <Box
          sx={{
            paddingLeft: 3,
            paddingRight: 2,
            background: "white",
            width: "450px",
          }}
        >
          <Typography sx={{ fontSize: "32px", fontWeight: "700" }}>
            Login
          </Typography>
          <Typography sx={{ fontWeight: "700" }}>
            Please enter your email to continue
          </Typography>
          <form onSubmit={handleSubmit(Onsubmit)}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ fontWeight: "700", marginTop: 1 }}>email</Box>

              <TextField
                sx={{ fontWeight: "500", marginTop: 1 }}
                {...register("email")}
              ></TextField>
              <FormHelperText sx={{ color: "red", m: 2 }}>
                {errors.email?.message}
              </FormHelperText>
              
            </Box>
            {state && (
              <Box sx={{ fontWeight: "700", marginTop: 1 }}>
                <label htmlFor="password">Password</label>
                <br />
                <TextField
                  id="password"
                  type="password"
                  sx={{ fontWeight: "500", minWidth: "100%" }}
                  {...register("password")}
                ></TextField>
              </Box>
            )}
            {authentication && (
                <Typography sx={{ fontSize: "small", m: 2, color: "red" }}>
                  {authentication}
                </Typography>
              )}
            {state ? (
              <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
                Log In
              </Button>
            ) : (
              <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
                Verify email
              </Button>
            )}
          </form>
          {/* <Box sx={{ display: "flex", fontWeight: " 600 ", marginTop: 1 }}>
          {state ? (
            <p>Prefer to Proceed with email verification instead?</p>
          ) : (
            <p>Prefer to Sign in with password instead?</p>
          )} */}

          {/* <Button
            sx={{ color: "red", marginTop: -1 }}
            onClick={() => {
              if (state) {
                setState(false);
              } else {
                setState(true);
              }
            }}
          >
            Click here
          </Button> */}
          {/* </Box> */}
        </Box>
        <Box sx={{ display: "flex", width: 500, mt: 8 }}>
          <Typography sx={{ width: 200, ml: 9, mb: 2 }}>
            {" "}
            Don't have an account?
          </Typography>
          <Button
            sx={{ mt: -2 }}
            onClick={() => {
              setLogReg(true);
            }}
          >
            Register here
          </Button>
        </Box>
      </Box>
      </Box>
    </>
  );
}
export default SignUpComp;
