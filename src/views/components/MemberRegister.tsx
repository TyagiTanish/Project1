import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormHelperText, IconButton, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SimpleMap from "./Map";
import HotelLocationMap from "./HotelLocationMap";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function MemberRegister() {
  const [page, setPage] = React.useState(1);

  var FormSchema: any;
  page === 2 &&
    (FormSchema = Yup.object().shape({
      pinCode: Yup.string()
        .required("zipCode is required")
        .max(6, "Max length should be 6")
        .matches(/(?=.*[0-9])\w+/, "Zip Code must be a number"),
      country: Yup.string()
        .required("Country is required ")
        .min(3, "Minimum length should be 3")
        .matches(
          /(?=.*[a-z])(?=.*[A-Z])\w+/,
          "Country name should be a string"
        ),
      state: Yup.string()
        .required("State is required")
        .min(3, "Minimum length should be 3")
        .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "State name should be a string"),
      city: Yup.string()
        .required("City is required")
        .min(3, "minimum length should be 3 ")
        .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "City name should be a string"),
    }));

  page === 1 &&
    (FormSchema = Yup.object().shape({
      name: Yup.string()
        .required("First Name is required")
        .min(3)
        .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "should be a string"),
      email: Yup.string()
        .email("invalid email !")
        .required("Email is Required"),
      phone: Yup.string().required("Phone number is required"),
    }));

  page === 4 &&
    (FormSchema = Yup.object().shape({
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
    }));

  interface User {
    name: string;
    email: string;
    password: string;
    pinCode: string;
    country: string;
    state: string;
    city: string;
    phone: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<User>({
    resolver: yupResolver(FormSchema),
  });
  const { request } = useAuth();
  const [email, setEmail] = React.useState();

  const [location, setLocation] = React.useState({
    latitude: "",
    longitude: "",
  });
  const handleNextClick = async () => {
    if (page === 1) {
      const data = (await request.post(`/getMember`, { email })).data;
      if (!data) {
        setPage((prev) => prev + 1);
      } else {
        setPage(5);
      }
    } else {
      setPage((prev) => prev + 1);
    }
  };

  const Submit = async (detail: any) => {
    if (page === 4) {
      detail.latitude = location.latitude;
      detail.longitude = location.longitude;
      await request.post("/registerMember", detail);
    } else {
      handleNextClick();
    }
  };

  return (
    <>
    <Box sx={{width:'420px',m:20,border:'1px solid lightgrey',padding:'5px'}} >
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
          background: "white"
        }}
      >
        {/* <ThemeProvider theme={theme}> */}
          {/* <Container component="main" maxWidth="xs"> */}
            {/* <CssBaseline /> */}
            <Box
              sx={{
                marginTop: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              {page === 1 && (
                <Typography
                  sx={{
                    width: "50vw",
                    fontSize: 28,
                    fontWeight: "700",
                    ml: 68,
                    mb:2,
                    opacity:0.7
                  }}
                >
                  Enter Your Personal Details....
                </Typography>
              )}
              {page === 2 && (
                <Typography
                  sx={{
                    width: "50vw",
                    fontSize: 28,
                    fontWeight: "700",
                    ml: 68,
                    mb:2,
                    opacity:0.7
                  }}
                >
                  Enter Your Location Details....
                </Typography>
              )}
              {page === 3 && (
                <Typography
                  sx={{
                    width: "50vw",
                    fontSize: 28,
                    fontWeight: "700",
                    ml: 62,
                    mb:2,
                    opacity:0.7
                  }}
                >
                  Pin Your Location On Map....
                </Typography>
              )}
              {page === 4 && (
                <Typography
                  sx={{
                    width: "48vw",
                    fontSize: 28,
                    fontWeight: "700",
                    ml: 75,
                    mb:2,
                    opacity:0.7
                  }}
                >
                  Enter Your Password....
                </Typography>
              )}

              {page === 1 && (
                <>
                  <Form style={{ marginTop: 3,textAlign:"left",width:'400px'}} >
                    <Grid container spacing={2} sx={{ml:1}} >
                      <Grid item xs={12} sm={5}>
                        <Typography>Name</Typography>
                        <TextField
                          autoComplete="given-name"
                          required
                          fullWidth
                          id="firstName"
                          autoFocus
                          {...register("name")}
                        />
                        <FormHelperText>{errors?.name?.message}</FormHelperText>
                      </Grid>
                      <Grid item xs={12} sm={5}>
                        <Typography>Phone No.</Typography>
                        <TextField
                          variant="outlined"
                          {...register("phone")}
                        ></TextField>
                      </Grid>
                      <Grid item xs={12} sm={10} >
                        <Typography>Email Address</Typography>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          autoComplete="email"
                          {...register("email")}
                          onChange={(e: any) => setEmail(e.target.value)}
                        />
                        <FormHelperText>
                          {errors?.email?.message}
                        </FormHelperText>
                      </Grid>
                    </Grid>
                    <IconButton
                      sx={{ borderRadius: "50px", border: "1px solid", m: 5 }}
                      // onClick={() => setPage((prev) => prev - 1)}
                      disabled
                    >
                      <ArrowBackIcon />
                    </IconButton>
                    <Button
                      variant="contained"
                      sx={{ width: "7vw" }}
                      type="submit"
                      onClick={handleSubmit(Submit)}
                    >
                      Next
                    </Button>
                  </Form>
                </>
              )}
              {page === 2 && (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography>City</Typography>
                      <TextField
                        autoComplete="given-name"
                        required
                        fullWidth
                        autoFocus
                        {...register("city")}
                      />
                      <FormHelperText>{errors?.city?.message}</FormHelperText>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography>State</Typography>
                      <TextField
                        variant="outlined"
                        {...register("state")}
                      ></TextField>
                      <FormHelperText>{errors?.state?.message}</FormHelperText>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography>Pin Code </Typography>
                      <TextField required fullWidth {...register("pinCode")} />
                      <FormHelperText>
                        {errors?.pinCode?.message}
                      </FormHelperText>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography>Country</Typography>
                      <TextField required fullWidth {...register("country")} />
                      <FormHelperText>
                        {errors?.country?.message}
                      </FormHelperText>
                    </Grid>
                  </Grid>
                  <IconButton
                    sx={{ borderRadius: "50px", border: "1px solid", m: 5 }}
                    onClick={() => setPage((prev) => prev - 1)}
                  >
                    <ArrowBackIcon />
                  </IconButton>
                  <Button
                    variant="contained"
                    sx={{ width: "7vw" }}
                    type="submit"
                    onClick={handleSubmit(Submit)}
                  >
                    Next
                  </Button>
                </Form>
              )}
              {page === 3 && (
                <>
                  <Typography sx={{ mr:1 }}>
                    <HotelLocationMap setLocation={setLocation} />
                  </Typography>
                  <Stack direction={"row"} sx={{ mr: 2, alignItems: "center" }}>
                    <IconButton
                      sx={{ borderRadius: "50px", border: "1px solid", m: 5 }}
                      onClick={() => setPage((prev) => prev - 1)}
                    >
                      <ArrowBackIcon />
                    </IconButton>
                    <Button
                      variant="contained"
                      sx={{ height: "2vw", width: "7vw" }}
                      type="submit"
                      onClick={handleNextClick}
                    >
                      Next
                    </Button>
                  </Stack>
                </>
              )}

              {page === 4 && (
                <>
                  <Form>
                    <Grid item xs={12}>
                      <Typography>Password</Typography>
                      <TextField required fullWidth {...register("password")} />
                      <FormHelperText>
                        {errors?.password?.message}
                      </FormHelperText>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography>Confirm Password</Typography>
                      <TextField required fullWidth />
                    </Grid>
                    <IconButton
                      sx={{ borderRadius: "50px", border: "1px solid", m: 5 }}
                      onClick={() => setPage((prev) => prev - 1)}
                    >
                      <ArrowBackIcon />
                    </IconButton>
                    <Button
                      variant="contained"
                      sx={{ width: "7vw" }}
                      type="submit"
                      onClick={handleSubmit(Submit)}
                    >
                      Next
                    </Button>
                  </Form>
                </>
              )}
              {page === 5 && (
                <>
                  <Box sx={{ width: "20vw", padding: "10px" }}>
                    <Typography
                      sx={{
                        width: "100%",
                        padding: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Email Already Exist If You want to continue with this
                      email then press continue or press back to change email{" "}
                    </Typography>
                    <Stack direction={"row"} sx={{ padding: "10px" }}>
                      {" "}
                      <Button
                        variant="contained"
                        onClick={() => setPage(1)}
                        sx={{ mr: 5 }}
                      >
                        Back
                      </Button>
                      <Button variant="contained" onClick={() => setPage(2)}>
                        Continue
                      </Button>
                    </Stack>
                  </Box>
                </>
              )}
              {/* 
            {page !== 5 ? (
              <>
                {page === 1 ? (
                  <IconButton
                    disabled
                    sx={{ borderRadius: "50px", border: "1px solid", m: 5 }}
                    onClick={() => setPage((prev) => prev - 1)}
                  >
                    <ArrowBackIcon />
                  </IconButton>
                ) : (
               
                )}
                {page !== 4 ? (
               
                ) : (
              
                )}
              </>
            ) : (
              <>
                
               
              </>
            )} */}
            </Box>
          {/* </Container> */}
        {/* </ThemeProvider> */}
      </Box>
      </Box>
    </>
  );
}
