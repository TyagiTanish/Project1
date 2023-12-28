import {
  Box,
  Button,

  FormHelperText,

  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "../../Hooks/useAuth/useAuth";
import { enqueueSnackbar } from "notistack";
import {useDispatch} from "react-redux";
import { userLogin } from "./redux/user/userSlice";

import Loaders from "./Loaders";


function SignUpComp({ setVerify, setLogReg }: any) {
  const { request } = useAuth();
  const [state, setState] = useState(false);
  const [display,setDisplay]=useState(false);
  const [authentication, setAuthentication] = useState("");
const dispatch = useDispatch();



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
          width:{xl:"500px",md:"380px"},
          ml:{sm:50,xl:0,md:0},
          mt:{sm:25,xl:0,md:0},
          fontFamily: "sans-serif",
          alignSelf: "flex-start",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            // background: "#D4164B",
            backgroundImage: "linear-gradient(270deg,#d11450,#ee2a24)",
            minHeight: {xl:"30px",md:"20px"},
            paddingTop:{xl:1,md:0.5,sm:0.5},
            paddingBottom:{md:0.5,sm:0.5},
            paddingLeft:{xl:"95px",md:"65px",sm:'50px'},
            fontWeight: 700,
            color: "white",
            fontSize:{xl:"20px"}
          }}
        >
          Sign up & Get ₹500 OYO Money
        </Box>
        <Box
          sx={{
            paddingLeft: 3,
            paddingRight: 2,
            background: "white",
            width: {xl:"450px",md:"330px",height:'200px'},
          }}
        >
          <Typography sx={{ fontSize: {xl:"32px",md:"25px",sm:'25px'}, fontWeight: "700",ml:{sm:-1,md:-1,xl:0} }}>
            Login
          </Typography>
          <Typography sx={{ fontWeight: "700" ,fontSize:{xl:"16px",md:"16px",sm:'16px'},mt:{sm:2}}}>
            Please enter your email to continue
          </Typography>
          <form onSubmit={handleSubmit(Onsubmit)}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ fontWeight: "700", marginTop:3 ,fontSize:{xl:"16px",md:"16px"}}}>Email-</Box>

              <TextField
                sx={{ fontWeight: "500", marginTop: 0}}
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
              <Button type="submit" variant="contained" sx={{ marginTop: {xl:1,md:-2},fontSize:{xl:13,md:11},fontWeight:"500" }}>
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
        <Box sx={{ display: "flex", width: {xl:500,md:400}, mt: 8 }}>
          <Typography sx={{ width: 200, ml: {xl:5,md:2,sm:2}, mb: 2,mt:2 }}>
            {" "}
            Don't have an account?
          </Typography>
          <Button
            sx={{ mt: -.5,ml:{md:2,xl:10}}}
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
