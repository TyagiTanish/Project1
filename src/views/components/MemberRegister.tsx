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
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import PoolIcon from "@mui/icons-material/Pool";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import WineBarIcon from "@mui/icons-material/WineBar";
import GroupsIcon from "@mui/icons-material/Groups";
import {
  Chip,
  FormGroup,
  FormHelperText,
  FormLabel,
  IconButton,
  Stack,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SimpleMap from "./Map";
import HotelLocationMap from "./HotelLocationMap";
import { useForm } from "react-hook-form";
import { Form, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDropzone } from "react-dropzone";
import AddPhotoAlternateSharpIcon from "@mui/icons-material/AddPhotoAlternateSharp";

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
  const [files, setfile] = React.useState<any>([]);
  const navigate = useNavigate();
  const [error, setError] = React.useState("");
  const [maxPhoto, setMaxPhoto] = React.useState(false);
  const [amenities, setAmenities] = React.useState([]);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone();
  React.useEffect(() => {
    if (acceptedFiles.length > 1) {
      setError("Only One file can be selected");
    } else {
      setfile(acceptedFiles);

      setError("");
    }
  }, [acceptedFiles]);
  React.useEffect(() => {
    if (files.length > 0) {
      setMaxPhoto(true);
    } else {
      setMaxPhoto(false);
    }
  }, [files]);

  const [arr, setArr]: any = React.useState([]);
  const amenitie = [
    { id: "parking", label: "Parking", icon: <LocalParkingIcon /> },
    { id: "wifi", label: "Wifi", icon: <NetworkWifiIcon /> },
    { id: "pool", label: "Pool", icon: <PoolIcon /> },
    { id: "roomService", label: "Room Service", icon: <RoomServiceIcon /> },
    { id: "gym", label: "Gym", icon: <FitnessCenterIcon /> },
    { id: "dryClean", label: "DryClean", icon: <DryCleaningIcon /> },
    { id: "bar", label: "Bar", icon: <WineBarIcon /> },
    { id: "meeting", label: "Meeting", icon: <GroupsIcon /> },
    { id: "parking", label: "Parking", icon: <LocalParkingIcon /> },
    { id: "wifi", label: "Wifi", icon: <NetworkWifiIcon /> },
    { id: "pool", label: "Pool", icon: <PoolIcon /> },
    { id: "roomService", label: "Room Service", icon: <RoomServiceIcon /> },
    { id: "gym", label: "Gym", icon: <FitnessCenterIcon /> },
    { id: "dryClean", label: "DryClean", icon: <DryCleaningIcon /> },
    { id: "bar", label: "Bar", icon: <WineBarIcon /> },
    { id: "meeting", label: "Meeting", icon: <GroupsIcon /> },
  ];

  const [screenSize, setScreenSize] = React.useState(window.outerWidth);
  React.useEffect(() => {
    setScreenSize(window.innerWidth);
    const handleWindowSize = () => {
      setScreenSize(window.outerWidth);
    };
    console.log("screenSize", screenSize);

    window.addEventListener("resize", handleWindowSize);
  });

  const change = (e: any) => {
    const value = e.target.value;

    if (arr.find((item: any) => item === value)) {
      // arr.delete(value);
      setArr(arr.filter((i: any) => i !== value));
    } else {
      arr.push(value);
    }
  };

  React.useEffect(() => {
    // console.log(amenities);s
  }, [amenities]);
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
      hotelName: Yup.string().required("Hotel Name is Required"),
    }));

  page === 6 &&
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
  page === 5 &&
    (FormSchema = Yup.object().shape({
      amenities: Yup.array().min(1, "Check at list one amenity"),
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
    hotelName: string;
    amenities: [];
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
        setPage(7);
      }
    } else {
      setPage((prev) => prev + 1);
    }
  };

  const Submit = async (detail: any) => {
    // if (page === 5) {
    detail.amenities = arr;
    // }

    if (page === 6) {
      detail.latitude = location.latitude;
      detail.longitude = location.longitude;
      const formdata = new FormData();
      formdata.append("files", files[0]);
      formdata.set("name", detail.name);
      formdata.set("phone", detail.phone);
      formdata.set("email", detail.email);
      formdata.set("latitude", detail.latitude);
      formdata.set("longitude", detail.longitude);
      formdata.set("pinCode", detail.pinCode);
      formdata.set("state", detail.state);
      formdata.set("password", detail.password);
      formdata.set("country", detail.country);
      formdata.set("city", detail.city);
      formdata.set("hotelName", detail.hotelName);
      formdata.set("amenities", detail.amenities);
      await request.post("/registerMember", formdata);
    } else {
      handleNextClick();
    }
  };

  // console.log(page);

  const handleDelete = (photo: any) => {
    setfile((oldvalue: any) => {
      if (oldvalue.length === 1) {
        return [];
      }
      return oldvalue.filter((e: any) => e.name !== photo.name);
    });
  };

  return (
    <>
      {/* <Box
        sx={{
          // width: { xl: "420px", md: 400, sm: 300 },
        
          mb: 20,
          border: "1px solid lightgrey",
          padding: "5px",
          background: "white",
        }}
      > */}
      <Stack
        direction={"column"}
        sx={{
          border: "1px solid lightgrey",

          background: "white",
          width: { sm: "40vw", xl: "25vw" },
        }}
      >
        <Box
          sx={{
            // background: "#D4164B",
            backgroundImage: "linear-gradient(270deg,#d11450,#ee2a24)",
            // minHeight: "30px",
            // paddingTop: { xl: 1, md: 1.2, sm: 1 },
            // paddingLeft: { sm: 6, md: 10 },
            textAlign: "center",
            p: "1%",
            fontWeight: 700,
            color: "white",
            fontSize: { xl: 17, md: 14, sm: 13 },
          }}
        >
          Sign up & Get ₹500 OYO Money
        </Box>
        <Box
          sx={{
            background: "white",
          }}
        >
          <Box
            sx={{
              // marginTop: { sm: 1, md: 5 },
              textAlign: "center",
            }}
          >
            {page === 1 && (
              <Typography
                sx={{
                  fontSize: { xl: 28, md: 20 },
                  fontWeight: "700",
                  alignContent: "center",
                  opacity: 0.7,
                }}
              >
                Enter Your Personal Details....
              </Typography>
            )}
            {page === 2 && (
              <Typography
                sx={{
                  fontSize: { xl: 28, md: 20 },
                  fontWeight: "700",
                  justifyContent: "center",
                  opacity: 0.7,
                }}
              >
                Enter Your Location Details....
              </Typography>
            )}
            {page === 3 && (
              <Typography
                sx={{
                  fontSize: { xl: 28, md: 20 },
                  fontWeight: "700",
                  justifyContent: "center",
                  opacity: 0.7,
                }}
              >
                Pin Your Location On Map....
              </Typography>
            )}
            {page === 4 && (
              <Typography
                sx={{
                  fontSize: { xl: 28, md: 20 },
                  fontWeight: "700",
                  justifyContent: "center",
                  opacity: 0.7,
                }}
              >
                Choose a Photo....
              </Typography>
            )}
            {page === 6 && (
              <Typography
                sx={{
                  fontSize: { xl: 28, md: 20 },
                  fontWeight: "700",
                  justifyContent: "center",
                  opacity: 0.7,
                }}
              >
                Enter Your Password....
              </Typography>
            )}
            {page === 5 && (
              <Typography
                sx={{
                  fontSize: { xl: 28, md: 20 },
                  fontWeight: "700",
                  justifyContent: "center",
                  opacity: 0.7,
                }}
              >
                Enter Hotel Amenities....
              </Typography>
            )}
          </Box>
          {page === 1 && (
            <>
              <Form>
                {/* <Grid container spacing={2} justifyContent={"center"} direction={"column"}> */}
                <Stack
                  spacing={2}
                  justifyContent={"center"}
                  direction={"column"}
                  sx={{ m: "6%" }}
                >
                  <Stack>
                    <Typography
                      sx={{
                        fontSize: { xl: 17, md: 14, sm: 13 },
                      }}
                    >
                      Name
                    </Typography>
                    <TextField
                      autoComplete="given-name"
                      required
                      fullWidth
                      id="firstName"
                      autoFocus
                      {...register("name")}
                    />
                    <FormHelperText>{errors?.name?.message}</FormHelperText>
                  </Stack>
                  <Stack>
                    <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 13 } }}>
                      Phone No.
                    </Typography>
                    <TextField
                      variant="outlined"
                      {...register("phone")}
                    ></TextField>
                  </Stack>
                  <Stack>
                    <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 13 } }}>
                      Email Address
                    </Typography>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      autoComplete="email"
                      {...register("email")}
                      onChange={(e: any) => setEmail(e.target.value)}
                    />
                    <FormHelperText>{errors?.email?.message}</FormHelperText>
                  </Stack>
                  <Stack>
                    <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 13 } }}>
                      Hotel Name
                    </Typography>
                    <TextField
                      required
                      fullWidth
                      {...register("hotelName")}
                      // onChange={(e: any) => setEmail(e.target.value)}
                    />
                    <FormHelperText>
                      {errors?.hotelName?.message}
                    </FormHelperText>
                  </Stack>
                </Stack>
                <IconButton
                  sx={{
                    borderRadius: "50px",
                    border: "1px solid",
                    m: { md: 5, sm: 2 },
                  }}
                  // onClick={() => setPage((prev) => prev - 1)}
                  disabled
                >
                  <ArrowBackIcon
                    sx={{ fontSize: { sm: 10, md: 13, xl: 15 } }}
                  />
                </IconButton>
                <Button
                  size="small"
                  variant="contained"
                  type="submit"
                  sx={{
                    // width: { xl: 150, md: 100, sm: 50 },
                    fontSize: { xl: 15, md: 13, sm: 12 },
                    mt: 0,
                  }}
                  onClick={handleSubmit(Submit)}
                >
                  Next
                </Button>
              </Form>
            </>
          )}
          {page === 2 && (
            <Form>
              <Stack
                spacing={2}
                justifyContent={"center"}
                direction={"column"}
                sx={{ m: "6%" }}
              >
                <Stack>
                  <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 13 } }}>
                    City
                  </Typography>
                  <TextField
                    autoComplete="given-name"
                    required
                    fullWidth
                    autoFocus
                    {...register("city")}
                  />
                  <FormHelperText>{errors?.city?.message}</FormHelperText>
                </Stack>
                <Stack>
                  <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 13 } }}>
                    State
                  </Typography>
                  <TextField
                    variant="outlined"
                    {...register("state")}
                  ></TextField>
                  <FormHelperText>{errors?.state?.message}</FormHelperText>
                </Stack>
                <Stack>
                  <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 13 } }}>
                    Pin Code{" "}
                  </Typography>
                  <TextField required fullWidth {...register("pinCode")} />
                  <FormHelperText>{errors?.pinCode?.message}</FormHelperText>
                </Stack>
                <Stack>
                  <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 13 } }}>
                    Country
                  </Typography>
                  <TextField required fullWidth {...register("country")} />
                  <FormHelperText>{errors?.country?.message}</FormHelperText>
                </Stack>
              </Stack>
              <IconButton
                sx={{
                  borderRadius: "50px",
                  border: "1px solid",
                  m: { md: 5, sm: 2 },
                }}
                onClick={() => setPage((prev) => prev - 1)}
              >
                <ArrowBackIcon sx={{ fontSize: { sm: 10, md: 13, xl: 15 } }} />
              </IconButton>
              <Button
                // variant="contained"

                size="small"
                variant="contained"
                type="submit"
                sx={{
                  // width: { xl: 150, md: 100, sm: 50 },
                  fontSize: { xl: 15, md: 13, sm: 12 },
                  mt: 0,
                }}
                onClick={handleSubmit(Submit)}
              >
                Next
              </Button>
            </Form>
          )}
          {page === 3 && (
            <>
              <Typography sx={{ mr: 1 }}>
                <HotelLocationMap setLocation={setLocation} />
              </Typography>
              <Stack direction={"row"} sx={{ mr: 2, alignItems: "center" }}>
                <IconButton
                  sx={{
                    borderRadius: "50px",
                    border: "1px solid",
                    m: { md: 5, sm: 2 },
                  }}
                  onClick={() => setPage((prev) => prev - 1)}
                >
                  <ArrowBackIcon
                    sx={{ fontSize: { sm: 10, md: 13, xl: 15 } }}
                  />
                </IconButton>
                <Button
                  size="small"
                  variant="contained"
                  type="submit"
                  sx={{
                    // width: { xl: 150, md: 100, sm: 50 },
                    fontSize: { xl: 15, md: 13, sm: 12 },
                    mt: 0,
                  }}
                  onClick={handleNextClick}
                >
                  Next
                </Button>
              </Stack>
            </>
          )}

          {page === 6 && (
            <>
              <Form>
                <Stack
                  spacing={2}
                  justifyContent={"center"}
                  direction={"column"}
                  sx={{ m: "6%" }}
                >
                  <Stack>
                    <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 12 } }}>
                      Password
                    </Typography>
                    <TextField required fullWidth {...register("password")} />
                    <FormHelperText>{errors?.password?.message}</FormHelperText>
                  </Stack>
                  <Stack>
                    <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 12 } }}>
                      Confirm Password
                    </Typography>
                    <TextField required fullWidth />
                  </Stack>
                </Stack>
                <IconButton
                  sx={{
                    borderRadius: "50px",
                    border: "1px solid",
                    m: { md: 5, sm: 2 },
                  }}
                  onClick={() => setPage((prev) => prev - 1)}
                >
                  <ArrowBackIcon
                    sx={{ fontSize: { sm: 10, md: 13, xl: 15 } }}
                  />
                </IconButton>
                <Button
                  size="small"
                  variant="contained"
                  type="submit"
                  sx={{
                    // width: { xl: 150, md: 100, sm: 50 },
                    fontSize: { xl: 15, md: 13, sm: 12 },
                    mt: 0,
                  }}
                  onClick={handleSubmit(Submit)}
                >
                  Submit
                </Button>
              </Form>
            </>
          )}
          {page === 5 && (
            <>
              <Form>
                <Stack ml={4} direction={"column"}>
                  {screenSize > 768 ? (
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      {amenitie.map((item, index) => (
                        <Grid item xs={5}>
                          <FormGroup>
                            <Stack
                              direction={"row"}
                              alignItems={"center"}
                              spacing={1}
                            >
                              {item.icon}
                              {arr.includes(index.toString()) ? (
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      value={index}
                                      defaultChecked
                                      onChange={(e) => {
                                        change(e);
                                      }}
                                    />
                                  }
                                  label={item.label}
                                />
                              ) : (
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      value={index}
                                      onChange={(e) => {
                                        change(e);
                                      }}
                                    />
                                  }
                                  label={item.label}
                                />
                              )}
                            </Stack>
                          </FormGroup>
                        </Grid>
                      ))}
                    </Grid>
                  ) : (
                    <Box sx={{ maxHeight: "400px", overflowY: "auto" }}>
                      {amenitie.map((item, index) => (
                        <FormGroup>
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={1}
                          >
                            {item.icon}
                            {arr.includes(index.toString()) ? (
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    value={index}
                                    defaultChecked
                                    onChange={(e) => {
                                      change(e);
                                    }}
                                  />
                                }
                                label={item.label}
                              />
                            ) : (
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    value={index}
                                    onChange={(e) => {
                                      change(e);
                                    }}
                                  />
                                }
                                label={item.label}
                              />
                            )}
                          </Stack>
                        </FormGroup>
                      ))}
                    </Box>
                  )}
                  <FormHelperText sx={{ mt: 2, color: "red" }}>
                    {errors?.amenities?.message}
                  </FormHelperText>
                </Stack>

                <IconButton
                  sx={{
                    borderRadius: "50px",
                    border: "1px solid",
                    m: { md: 5, sm: 2 },
                  }}
                  onClick={() => setPage((prev) => prev - 1)}
                >
                  <ArrowBackIcon
                    sx={{ fontSize: { sm: 10, md: 13, xl: 15 } }}
                  />
                </IconButton>
                <Button
                  size="small"
                  variant="contained"
                  type="submit"
                  sx={{
                    // width: { xl: 150, md: 100, sm: 50 },
                    fontSize: { xl: 15, md: 13, sm: 12 },
                    mt: 0,
                  }}
                  // onClick={handleSubmit(Submit)}
                  onClick={handleSubmit(Submit)}
                >
                  Next
                </Button>
              </Form>
            </>
          )}
          {page === 7 && (
            <>
              <Box>
                <Typography
                  sx={{
                    width: "90%",
                    m: "5%",
                  }}
                >
                  Email Already Exist If You want to continue with this email
                  then press continue or press back to change email{" "}
                </Typography>
                <Stack direction={"row"} sx={{ padding: "10px" }}>
                  {" "}
                  <Button
                    variant="contained"
                    onClick={() => setPage(1)}
                    sx={{
                      mr: { md: 5, sm: 2 },
                      fontSize: { md: 13, sm: 11 },
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ fontSize: { md: 13, sm: 11 } }}
                    onClick={() => navigate("/login")}
                  >
                    Continue
                  </Button>
                </Stack>
              </Box>
            </>
          )}
          {page === 4 && (
            <>
              <Stack spacing={5} direction={"column"} sx={{ m: 2 }}>
                <Typography {...getRootProps()}>
                  <input {...getInputProps()} />
                  {
                    <IconButton
                      sx={{
                        border: "2px dashed lightgrey",
                        borderRadius: 0,
                        width: { xl: "10vw", md: "12vw" },
                        height: { xl: "5vw", md: "10vw" },
                        // ml: { sm: 2, md: 5, lg: 10 },
                      }}
                    >
                      <Typography sx={{ mt: 1 }}>
                        <AddPhotoAlternateSharpIcon fontSize="large" />
                        <Typography sx={{ fontSize: "10px" }}>
                          Drop a Photo Here
                        </Typography>
                      </Typography>
                    </IconButton>
                  }
                </Typography>
              </Stack>
              {files.map((photo: any) => (
                <Chip
                  sx={{
                    fontSize: { xl: "13px", md: "12px" },
                    mt: 1,
                    alignContent: "center",
                  }}
                  label={photo.name}
                  onDelete={() => handleDelete(photo)}
                ></Chip>
              ))}

              {error && <FormHelperText>{error}</FormHelperText>}
              <Stack
                direction={"row"}
                sx={{ alignContent: "center", justifyContent: "center", m: 2 }}
                spacing={7}
              >
                <IconButton sx={{}} onClick={() => setPage((prev) => prev - 1)}>
                  <ArrowBackIcon
                    sx={{ fontSize: { sm: 10, md: 13, xl: 15 } }}
                  />
                </IconButton>

                {maxPhoto && (
                  <Button
                    size="small"
                    variant="contained"
                    type="submit"
                    sx={{
                      fontSize: { xl: 15, md: 13 },
                    }}
                    onClick={handleNextClick}
                  >
                    Next
                  </Button>
                )}
                {!maxPhoto && (
                  <Button
                    variant="contained"
                    sx={{
                      width: { xl: 150, md: 100, sm: 50 },
                      fontSize: { xl: 15, md: 13, sm: 12 },
                    }}
                    disabled
                  >
                    Next
                  </Button>
                )}
              </Stack>
            </>
          )}
        </Box>
      </Stack>
    </>
  );
}
