import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function SignUpComp() {
  const Onsubmit = (value: any) => {
    console.log(value.Number);
  };
  const { register, handleSubmit } = useForm();
  const [state, setState] = useState(false);
  return (
    <Box
      sx={{
        // float: "right",
        // marginLeft: "70%",
        // border: "1px solid black",
        height: "400px",
        marginTop: "10%",
        maxWidth: 400,
        paddingLeft: 4,
        fontFamily: "sans-serif",
        alignSelf: "flex-start",
        backgroundColor:'white'
      }}
    >
      <Box
        sx={{
          background: "#D4164B",
          // backgroundImage: "lineargradient(270deg,#d11450,#ee2a24)",
          minHeight: "30px",
          // textAlign: "center",
          paddingTop: 1,
          paddingLeft: 4,
          color: "white",
          width:"100%"
        }}
      >
        Sign up & Get ₹500 OYO Money
      </Box>
      <Box sx={{ paddingLeft: 2, paddingRight: 1, background: "white" }}>
        <Typography sx={{ fontSize: "32px", fontWeight: "700" }}>
          Login/Signup
        </Typography>
        <Typography sx={{ fontWeight: "700" }}>
          Please enter your phone number to continue
        </Typography>
        <form onSubmit={handleSubmit(Onsubmit)}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ fontWeight: "700", marginTop: 1 }}>Email</Box>

            <TextField
              sx={{ fontWeight: "500", marginTop: 1 }}
              {...register("Email")}
            ></TextField>
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
          <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
            Verify Email
          </Button>
        </form>
        <Box sx={{ display: "flex", fontWeight: " 600 ", marginTop: 1 }}>
          {state ? (
            <p> Prefer to Proceed with OTP instead? </p>
          ) : (
            <p>Prefer to Sign in with password instead?</p>
          )}

          <Button
            sx={{ color: "red" }}
            onClick={() => {
              if (state) {
                setState(false);
              } else {
                setState(true);
              }
            }}
          >
            Click here
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUpComp;
