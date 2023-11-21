import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../App.css";
import { Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useNavigate } from "react-router-dom";
import { log } from "console";
import { enqueueSnackbar } from "notistack";
import Loaders from "./Loaders";
const  SignUp = ({ setLogReg }: any) =>{
  const { request } = useAuth();

const [display,setDisplay]=React.useState(false);

  const navigate = useNavigate()
  const onSubmit = async (data: any) => {
    // console.log(data);
   const result= await request.post("/Register", {
      name: data.name,
      phone: data.phone,
      email: data.email,
      password: data.password,
    });

    if(result.data){
      enqueueSnackbar("Registered Successfully", {
        variant: "success",
        autoHideDuration: 1000,
       
        
     })
    }
    else{
      setDisplay(true);
      enqueueSnackbar("Email Already Registered", {
        variant: "error",
        autoHideDuration: 1000,
       
        
     })
     setTimeout(()=>{
      setDisplay(false);
      setLogReg(false);
     },2000)
    }
      
      
      

    
  }
  const { register, handleSubmit } = useForm();
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
       {display && <Loaders/>}
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
            <Typography sx={{ fontWeight: "bold" }}>email</Typography>
            <TextField
              sx={{ mb: 8, height: 2, border: "none" }}
              id="demo-helper-text-aligned"
              {...register("email")}
            />
            <Typography sx={{ fontWeight: "bold" }}>Phone No</Typography>
            <TextField
              // sx={{width:"400px"}}
              id="demo-helper-text-aligned"
              // label="name"
              sx={{ mb: 8, height: 2 }}
              {...register("phone")}
            />
            <Typography sx={{ fontWeight: "bold" }}>Password</Typography>
            <TextField
              // sx={{width:"400px"}}
              id="demo-helper-text-aligned"
              // label="name"
              sx={{ mb: 8, height: 2 }}
              {...register("password")}
            />
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
}
export default SignUp;
