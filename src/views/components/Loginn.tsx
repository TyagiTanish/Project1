import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "../../Hooks/useAuth/useAuth";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { userLogin } from "./redux/user/userSlice";

import Loaders from "./Loaders";
import { FormattedMessage } from "react-intl";

import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Language from "./Language";

function SignUpComp({ setVerify, setLogReg, setDisplay }: any) {
  const { request } = useAuth();
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const [authentication, setAuthentication] = useState("");
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const location = useLocation();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const Onsubmit = async (value: any) => {
    try {
      if (!value.password) {
        const result = await request.post("/auth", value);

        if (result.data) {
          setState(true);
          setAuthentication("");
        } else {
          enqueueSnackbar("Authentication Failed", { variant: "error" });
          setAuthentication("email not Found");
          setState(false);
        }
      } else {
        const result = await request.post("/auth", value);

        // console.log();

        if (result.data) {
          setDisplay(true);
          setTimeout(() => {
            dispatch(userLogin(result.data.data));
            localStorage.setItem("authToken", result.data.token);
            setDisplay(false);
            if (result?.data?.data?.role === "customer") {
              const from = location?.state?.from;
              navigate(from || "/");
            } else {
              navigate("/member");
            }
          }, 2000);
        } else {
          setAuthentication("Invalid Credentials");
        }
      }
    } catch (error) {
      console.log(error);
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
      <Box width={{ sm: 350, md: 400, xl: 400 }}>
        <Typography
          sx={{
            // background: "#D4164B",
            backgroundImage: "linear-gradient(270deg,#d11450,#ee2a24)",
            // minHeight: {xl:"30px",md:"20px"},
            // paddingTop:{xl:1,md:0.5,sm:0.5},
            // paddingBottom:{md:0.5,sm:0.5},
            // paddingLeft:{xl:"95px",md:"65px",sm:'50px'},
            fontWeight: 700,
            color: "white",
            fontSize: { xl: "20px" },
            textAlign: "center",
          }}
        >
          <FormattedMessage defaultMessage="Sign up & Get ₹500 OYO Money" />
        </Typography>

        <Box
          sx={{
            // paddingLeft: 3,
            // paddingRight: 2,
            p: 2,
            background: "white",
          }}
        >
          <Box sx={{ float: "right", mt: -1 }}>
            <Language />
          </Box>
          <Typography
            sx={{
              fontSize: { xl: "32px", md: "25px", sm: "25px" },
              fontWeight: "700",
              // ml: { sm: -1, md: -1, xl: 0 },
            }}
          >
            <FormattedMessage defaultMessage="Login" />
          </Typography>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: { xl: "16px", md: "16px", sm: "18px" },
              mt: { sm: 1 },
              color: "InfoText",
            }}
          >
            <FormattedMessage defaultMessage=" Please enter your email to continue" />
          </Typography>
          <form onSubmit={handleSubmit(Onsubmit)}>
            <Stack>
              <b style={{ marginTop: 10, marginBottom: 0 }}>
                <FormattedMessage defaultMessage={"Email-"} />
              </b>
              <br />
              <TextField
                sx={{ fontWeight: "500", marginTop: -2 }}
                {...register("email")}
              ></TextField>

              <FormHelperText sx={{ color: "red", m: 2 }}>
                {errors.email?.message}
              </FormHelperText>

              {state && (
                <>
                  <b>
                    <FormattedMessage defaultMessage="Password " />
                  </b>
                  {/* <br /> */}
                  {/* <TextField
                    id="password"
                    type="password"
                    sx={{ fontWeight: "500", mt: -2 }}
                    {...register("password")}
                  ></TextField> */}
                  <FormControl sx={{ width: "41ch" }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-password"
                      sx={{ width: 368 }}
                      {...register("password")}
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </>
              )}
            </Stack>
            {authentication && (
              <Typography sx={{ fontSize: "small", m: 2, color: "red" }}>
                {authentication}
              </Typography>
            )}
            {state ? (
              <>
                <Button type="submit" variant="contained" sx={{ mt: "4%" }}>
                  <FormattedMessage defaultMessage="Log In " />
                </Button>
                <Stack
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: { sm: "14px" },
                  }}
                  direction={"row"}
                >
                  <FormattedMessage defaultMessage="Don't have an account? " />

                  <Button
                    onClick={() => {
                      setLogReg(true);
                    }}
                  >
                    <FormattedMessage defaultMessage="Register here" />
                  </Button>
                </Stack>
              </>
            ) : (
              <>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ fontWeight: "500" }}
                >
                  <FormattedMessage defaultMessage="  Verify email" />
                </Button>
                <Stack
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: { sm: "14px" },
                  }}
                  direction={"row"}
                >
                  <FormattedMessage defaultMessage="Don't have an account?" />
                  <Button
                    onClick={() => {
                      setLogReg(true);
                    }}
                    sx={{ fontSize: { sm: "14px" } }}
                  >
                    <FormattedMessage defaultMessage="Register here" />
                  </Button>
                </Stack>
              </>
            )}
          </form>
        </Box>
      </Box>
    </>
  );
}
export default SignUpComp;
