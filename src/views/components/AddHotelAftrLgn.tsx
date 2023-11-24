import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Form } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormHelperText, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth/useAuth";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AddHotelLocation from "./AddHotelLocation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HotelProfilePic from "./HotelProfilePic";
import { useSelector } from "react-redux";

export default function AddHotelAftrLgn() {
  const user = useSelector((state: any) => state.userReducer.user);
  const { request } = useAuth();
  const [location, setLocation] = useState({
    longitude: 76.779419,
    latitude: 30.733315,
  });
  const [pic, setPic] = useState();
  const [step, setStep] = React.useState(0);
  const handleStep = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      setStep(0);
    }
  };
  const handleStepBack = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      setStep(0);
    }
  };
  const formData = new FormData();
  const onSubmit = async (data: any) => {
    data.longitude = location.longitude;
    data.latitude = location.latitude;
    data.file = pic;
    // formData.append("files",pic[0)
    formData.append("file", data.file);
    formData.set("hotelName", data.hotelName);
    formData.set("phone", data.phone);
    formData.set("password", data.password);
    formData.set("city", data.city);
    formData.set("postalCode", data.postalCode);
    formData.set("country", data.country);
    formData.set("lng", data.longitude);
    formData.set("lat", data.latitude);
    formData.set("email", user.email);
    // formData.set("data", data);

    if (step === 2) {
      console.log(data);
      request.post("/addHotel", formData);
    }
    handleStep();
  };
  interface User {
    hotelName: string;
    phone: string;
    password: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }
  var FormSchema: any = "";
  if (step === 0) {
    FormSchema = Yup.object().shape({
      hotelName: Yup.string()
        .required("This field is required")
        .min(3)
        .matches(
          /(?=.*[a-z])(?=.*[A-Z])\w+/,
          "should be a string or should atleat have one upper case letter"
        ),
      //   email: Yup.string().email("invalid email !").required("Email is Required"),
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
  }
  if (step === 1) {
    FormSchema = Yup.object().shape({
      city: Yup.string()
        .required("This field is required")
        .min(3)
        .matches(
          /(?=.*[a-z])(?=.*[A-Z])\w+/,
          "should be a string or should atleat have one upper case letter"
        ),
      state: Yup.string()
        .required("This field is required")
        .min(3)
        .matches(
          /(?=.*[a-z])(?=.*[A-Z])\w+/,
          "should be a string or should atleat have one upper case letter"
        ),
      postalCode: Yup.string()
        .required("This field is required")
        .min(3)
        .matches(/(?=.*[0-9])\w+/, "Postal Code. must be a number"),
      country: Yup.string()
        .required("This field is required")
        .min(3)
        .matches(
          /(?=.*[a-z])(?=.*[A-Z])\w+/,
          "should be a string or should atleat have one upper case letter"
        ),
    });
  }
  if (step === 2) {
    FormSchema = Yup.object().shape({});
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(FormSchema),
  });

  return (
    <Box
      sx={{
        background: `
        linear-gradient(
          rgba(0, 0, 0, 1),
          rgba(0, 0, 0, 0.1)
        ),
        url("https://assets.oyoroomscdn.com/cmsMedia/b3c9905c-31d1-4349-8594-c07deae6b36d.jpg") no-repeat`,
        width: "100%",
        height: "100vh",
        // backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "block",
        opacity: "80%",
        position: "absolute",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          color: "white",
          m: "12%",
          width: "55%",
          fontWeight: "bolder",
          textAlign: "left",
        }}
      >
        {" "}
        <Typography variant="h2">
          There's a smarter way to OYO around
        </Typography>
        <Typography sx={{ width: "77%" }}>
          Sign up with phone number and get exclusive access to discounts and
          savings on OYO stays and with our many travel partners.
        </Typography>
      </Typography>
      <Box sx={{ width: "100%", position: "relative", ml: "70%" }}>
        {/* {display && <Loaders />} */}
        <Card
          className="oyo-cell loginCard"
          sx={{
            border: "1px solid black",
            width: 470,
            // height: "40vh",
            mt: 20,
            b: "1px solid black",
            background: "#E0E0E0",
          }}
        >
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
            Add hotel & Get ₹500 OYO Money
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
            Add Hotel
          </Typography>

          <CardContent>
            <Stack>
              {step === 0 ? (
                <>
                  <Form>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Hotel name
                    </Typography>
                    <TextField
                      sx={{ mb: 8, height: 2, border: "none", width: "95%" }}
                      id="demo-helper-text-aligned"
                      placeholder="Enter Hotel Name"
                      {...register("hotelName")}
                    />
                    <FormHelperText sx={{ color: "red" }}>
                      {errors.hotelName?.message}
                    </FormHelperText>
                    <Typography sx={{ fontWeight: "bold" }}>Phone</Typography>
                    <TextField
                      sx={{ mb: 8, height: 2, border: "none", width: "95%" }}
                      id="demo-helper-text-aligned"
                      placeholder="Enter Phone"
                      {...register("phone")}
                    />
                    <FormHelperText sx={{ color: "red" }}>
                      {errors.phone?.message}
                    </FormHelperText>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Password
                    </Typography>
                    <TextField
                      sx={{ mb: 8, height: 2, border: "none", width: "95%" }}
                      type="password"
                      id="demo-helper-text-aligned"
                      placeholder="Enter Password"
                      {...register("password")}
                    />
                    <FormHelperText sx={{ color: "red" }}>
                      {errors.password?.message}
                    </FormHelperText>
                    <HotelProfilePic setPic={setPic} formData={formData} />
                    {pic !== undefined ? (
                      <Button
                        size="small"
                        variant="contained"
                        type="submit"
                        sx={{ width: 150, mt: 3, fontSize: 15 }}
                        onClick={handleSubmit(onSubmit)}
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        size="small"
                        variant="contained"
                        disabled
                        type="submit"
                        sx={{ width: 150, mt: 3, fontSize: 15 }}
                        onClick={handleSubmit(onSubmit)}
                      >
                        Next
                      </Button>
                    )}
                  </Form>
                </>
              ) : step === 1 ? (
                <>
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          City
                        </Typography>
                        <TextField
                          sx={{ mb: 8, height: 2, border: "none" }}
                          id="demo-helper-text-aligned"
                          placeholder="Enter City"
                          {...register("city")}
                        />{" "}
                        <FormHelperText sx={{ color: "red" }}>
                          {errors.city?.message}
                        </FormHelperText>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          State
                        </Typography>
                        <TextField
                          sx={{ mb: 8, height: 2, border: "none" }}
                          id="demo-helper-text-aligned"
                          placeholder="Enter State"
                          {...register("state")}
                        />{" "}
                        <FormHelperText sx={{ color: "red" }}>
                          {errors.state?.message}
                        </FormHelperText>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Postal code
                        </Typography>
                        <TextField
                          sx={{ mb: 8, height: 2, border: "none" }}
                          id="demo-helper-text-aligned"
                          placeholder="Enter Postal code"
                          {...register("postalCode")}
                        />{" "}
                        <FormHelperText sx={{ color: "red" }}>
                          {errors.postalCode?.message}
                        </FormHelperText>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Country
                        </Typography>
                        <TextField
                          sx={{ mb: 8, height: 2, border: "none" }}
                          id="demo-helper-text-aligned"
                          placeholder="Enter Country"
                          {...register("country")}
                        />{" "}
                        <FormHelperText sx={{ color: "red" }}>
                          {errors.country?.message}
                        </FormHelperText>
                      </Grid>
                    </Grid>
                    {/* <Box sx={{ display: "flex" }}> */}
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        mt: 3,
                        ml: 0.5,
                        fontSize: 15,
                        background: "lightgray",
                        color: "black",
                      }}
                      onClick={handleStepBack}
                    >
                      <ArrowBackIcon />
                    </Button>

                    <Button
                      type="submit"
                      variant="contained"
                      onClick={handleSubmit(onSubmit)}
                      sx={{ width: 150, mt: 3, ml: 0.5, fontSize: 15 }}
                    >
                      Next
                    </Button>
                  </Form>
                </>
              ) : step === 2 ? (
                <>
                  <AddHotelLocation setLocation={setLocation} />
                  <Form>
                    <Box>
                      <Button
                        size="small"
                        variant="contained"
                        sx={{
                          mt: 3,
                          ml: 0.5,
                          fontSize: 15,
                          background: "lightgray",
                          color: "black",
                        }}
                        onClick={handleStepBack}
                      >
                        <ArrowBackIcon />
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        type="submit"
                        sx={{ width: 150, mt: 3, ml: 0.5, fontSize: 15 }}
                        // onClick={() => setStep(0)}
                        onClick={handleSubmit(onSubmit)}
                      >
                        Add Hotel
                      </Button>
                    </Box>
                  </Form>
                </>
              ) : null}
            </Stack>

            <Box sx={{ mt: 4 }}>
              To use Another Email for adding hotel{" "}
              <Button sx={{ textTransform: "none" }}>Click here...</Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
