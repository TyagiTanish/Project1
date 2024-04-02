import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/user/userSlice";

import Loaders from "../../loader/Loader";
import { FormattedMessage } from "react-intl";

import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Language from "../../Language/Language";

function LoginForm({ setVerify, setLogReg, setDisplay }: any) {
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
            localStorage.setItem("authToken", result?.data?.token);
            setDisplay(false);
            if (result?.data?.data?.role === "customer") {
              console.log(state);
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
      // console.log(error);
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
    watch,
    setValue,
  } = useForm<User>({
    resolver: yupResolver(FormSchema),
  });
  const email = watch("email");
  useMemo(() => {
    if (email === "") {
      setState(false);
      setValue("password", "");
      setShowPassword(false);
    }
  }, [email]);

  return (
    <>
      <Box width={{ sm: 350, md: 400, xl: 550 }}>
        {/* <Typography
          sx={{
            backgroundImage: "linear-gradient(270deg,#d11450,#ee2a24)",
            fontWeight: 700,
            color: "white",
            textAlign: "center",
          }}
        >
          <FormattedMessage defaultMessage="Sign up & Get ₹500 OYO Money" />
        </Typography> */}
        <Stack ml={2} spacing={1}>
          {" "}
          <Typography
            sx={{
              fontSize: { xl: "20px", md: "25px", sm: "25px" },
              fontWeight: "700",
            }}
          >
            <FormattedMessage defaultMessage="Log in" />
          </Typography>
          <Typography
            sx={{
              // fontSize: { xl: "25px", md: "25px", sm: "25px" },
              fontWeight: "400",
              color: "rgb(158,158,158)",
              fontSize: "16px",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            <FormattedMessage defaultMessage="Enter your credentials to access your account" />
          </Typography>
        </Stack>

        <Box
          sx={{
            p: 2,
            background: "white",
            pt: 8,
          }}
        >
          {/* <Typography
            sx={{
              fontWeight: "700",
              fontSize: { xl: "16px", md: "16px", sm: "18px" },
              mt: { sm: 1 },
              color: "InfoText",
            }}
          >
            <FormattedMessage defaultMessage=" Please enter your email to continue" />
          </Typography> */}
          <form onSubmit={handleSubmit(Onsubmit)}>
            <Stack>
              {/* <b style={{ marginTop: 10, marginBottom: 0, color: "gray" }}> */}
              <Typography sx={{ fontWeight: 900, color: "gray" }}>
                <FormattedMessage defaultMessage={"Email"} />
              </Typography>

              <br />
              <TextField
                sx={{
                  fontWeight: "500",
                  marginTop: -2,
                  [`& fieldset`]: {
                    borderRadius: "12px",
                  },
                }}
                {...register("email")}
              ></TextField>

              <FormHelperText sx={{ color: "red", m: 2 }}>
                {errors.email?.message}
              </FormHelperText>

              {state &&
                (email !== "" ? (
                  <>
                    <Typography
                      sx={{
                        fontWeight: 900,
                        color: "gray",
                      }}
                    >
                      {" "}
                      <FormattedMessage defaultMessage="Password " />
                    </Typography>

                    <FormControl sx={{ width: "41ch" }} variant="outlined">
                      <OutlinedInput
                        id="outlined-adornment-password"
                        sx={{
                          width: { xl: 520, lg: 370 },
                          [`& fieldset`]: {
                            borderRadius: "12px",
                          },
                        }}
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </>
                ) : (
                  <></>
                ))}
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
                    justifyContent: "center",
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
                  sx={{
                    textTransform: "none",
                    fontWeight: "500",
                    fontSize: "0.9375rem",
                    transition:
                      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
                  }}
                >
                  <FormattedMessage defaultMessage="  Verify email" />
                </Button>
                <Stack
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: { sm: "14px" },
                    mt: 3,
                    fontWeight: "bolder",
                  }}
                  direction={"row"}
                  gap={2}
                >
                  <FormattedMessage defaultMessage="Don't have an account?" />
                  <Link
                    onClick={() => {
                      setLogReg(true);
                    }}
                    sx={{
                      fontSize: {
                        sm: "14px",
                        fontWeight: 100,
                        cursor: "pointer",
                      },
                    }}
                  >
                    <FormattedMessage defaultMessage="Register here" />
                  </Link>
                </Stack>
              </>
            )}
          </form>
        </Box>
      </Box>
    </>
  );
}
export default LoginForm;
