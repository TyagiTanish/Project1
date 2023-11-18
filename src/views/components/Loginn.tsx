import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { mt } from "date-fns/locale";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function SignUpComp({ setVerify, setLogReg }: any) {
  const Onsubmit = (value: any) => {
    console.log(value.Number);
    setVerify(1);
  };
  const { register, handleSubmit } = useForm();
  const [state, setState] = useState(false);

  return (
    <Box
      sx={{
        height: "400px",
        Width: "500px",

        fontFamily: "sans-serif",
        alignSelf: "flex-start",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          background: "#D4164B",
          minHeight: "30px",
          paddingTop: 2,
          paddingLeft: 3,
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
          Please enter your Email to continue
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
            <p>Prefer to Proceed with email verification instead?</p>
          ) : (
            <p>Prefer to Sign in with password instead?</p>
          )}

          <Button
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
          </Button>
        </Box>
        <Box sx={{ display: "flex", width: 500, mt: 8 }}>
          <Typography sx={{ width: 200 }}> Don't have an account?</Typography>
          <Button
            sx={{ mt: -1 }}
            onClick={() => {
              setLogReg(false);
            }}
          >
            Register here
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUpComp;
