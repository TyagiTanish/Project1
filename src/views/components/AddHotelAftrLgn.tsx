import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Form, useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Stack,
  TextField,
} from "@mui/material";

import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth/useAuth";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AddHotelLocation from "./AddHotelLocation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import HotelProfilePic from "./HotelProfilePic";
import { useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";
import { Chip, IconButton } from "@mui/material";
import AddPhotoAlternateSharpIcon from "@mui/icons-material/AddPhotoAlternateSharp";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import PoolIcon from "@mui/icons-material/Pool";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import WineBarIcon from "@mui/icons-material/WineBar";
import GroupsIcon from "@mui/icons-material/Groups";

import AddDiscription from "./HotelOwner/Rooms/RoomDetails/AddDiscription";
export default function AddHotelAftrLgn() {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.userReducer.user);
  const { request } = useAuth();
  const [location, setLocation] = useState({
    longitude: 76.779419,
    latitude: 30.733315,
  });

  const [step, setStep] = React.useState(0);
  const handleStep = () => {
    if (step < 4) {
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

  const [files, setfile] = React.useState<any>([]);
  const [error, setError] = React.useState("");
  const [maxPhoto, setMaxPhoto] = React.useState(false);

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

  const [content, setContent] = useState("");

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
  const handleDelete = (photo: any) => {
    setfile((oldvalue: any) => {
      if (oldvalue.length === 1) {
        return [];
      }
      return oldvalue.filter((e: any) => e.name !== photo.name);
    });
  };

  const formData = new FormData();
  const onSubmit = async (data: any) => {
    console.log(data);
    if (step === 3) {
      setArr(arr);
      data.amenities = arr;
    }
    data.amenities = arr;
    if (step === 2) {
      data.discription = content;
    }
    data.longitude = location.longitude;
    data.latitude = location.latitude;
    // console.log(files[0]);
    formData.append("files", files[0]);
    formData.set("hotelName", data.hotelName);
    formData.set("phone", data.phone);
    formData.set("password", data.password);
    formData.set("city", data.city);
    formData.set("state", data.state);
    formData.set("postalCode", data.postalCode);
    formData.set("country", data.country);
    formData.set("lng", data.longitude);
    formData.set("lat", data.latitude);
    formData.set("email", user.email);
    formData.set("amenities", data.amenities);
    formData.set("discription", data.discription);
    console.log(data);
    if (step === 4) {
      // console.log(formData);
      request.post("/addHotel", formData);
      navigate("/");
    }

    handleStep();
  };
  interface User {
    hotelName: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    amenities: [];
    discription: string;
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
    FormSchema = Yup.object().shape({
      // discription: Yup.string().min(1, "This field is required"),
      discription: Yup.string(),
    });
  }
  if (step === 3) {
    FormSchema = Yup.object().shape({
      amenities: Yup.array().min(1, "Select at least one amenity"),
    });
  }
  if (step === 4) {
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
        display: "flex",
        justifyContent: "center",
        opacity: "80%",
        position: "fixed",
        minWidth: 500,
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={3}
        justifyContent={"space-evenly"}
        width={"100%"}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bolder",
            textAlign: "left",
            alignContent: "end",
            width: { sm: "40%", xl: "50%" },
          }}
        >
          {" "}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xl: 45, md: 28, sm: 25 },
            }}
          >
            There's a smarter way to OYO around
          </Typography>
          <Typography
            sx={{
              fontSize: { xl: 16, md: 11, sm: 9 },
              mt: 1,
              letterSpacing: 1,
            }}
          >
            Sign up with phone number and get exclusive access to discounts and
            savings on OYO stays and with our many travel partners.
          </Typography>
        </Typography>
        <Box sx={{ position: "relative" }}>
          {/* {display && <Loaders />} */}
          <Card
            className="oyo-cell loginCard"
            sx={{
              border: "1px solid black",
              width: { sm: "80%" },
              float: "right",
              b: "1px solid black",
              background: "white",
              m: "2%",
            }}
          >
            <Typography
              sx={{
                backgroundImage: "linear-gradient(270deg,#d11450,#ee2a24)",
                margin: "0",
                // paddingLeft: { xl: "93px", md: "30px", sm: 5 },
                // paddingTop: "5px",
                // paddingBottom: "5px",
                color: "white",
                fontWeight: "bold",
                // width: "100%",
                fontSize: { xl: 17, md: 16, sm: 13 },
                textAlign: "center",
                p: "1%",
              }}
              color="text.secondary"
              gutterBottom
            >
              Add hotel & Get ₹500 OYO Money
            </Typography>
            {step === 0 && (
              <Typography
                sx={{
                  m: "1%",
                  fontWeight: "bold",
                  fontFamily: "Inter,sans-serif",
                  fontSize: { xl: "30px", md: "25px", sm: 15 },
                  textAlign: "center",
                }}
              >
                Add Hotel Details...
              </Typography>
            )}
            {step === 1 && (
              <Typography
                sx={{
                  m: "1%",
                  fontWeight: "bold",
                  fontFamily: "Inter,sans-serif",
                  fontSize: { xl: "30px", md: "25px", sm: 15 },
                  textAlign: "center",
                }}
              >
                Add Hotel Location
              </Typography>
            )}
            {step == 4 && (
              <Typography
                sx={{
                  m: "1%",
                  fontWeight: "bold",
                  fontFamily: "Inter,sans-serif",
                  fontSize: { xl: "30px", md: "25px", sm: 15 },
                  textAlign: "center",
                }}
              >
                Point location
              </Typography>
            )}
            {step === 3 && (
              <Typography
                sx={{
                  fontSize: { xl: 28, md: 20 },
                  fontWeight: "700",
                  textAlign: "center",
                  opacity: 0.7,
                }}
              >
                Enter Hotel Amenities....
              </Typography>
            )}
            {step === 2 && (
              <Typography
                sx={{
                  fontSize: { xl: 28, md: 20 },
                  fontWeight: "700",
                  textAlign: "center",
                  opacity: 0.7,
                }}
              >
                Enter Hotel Discription....
              </Typography>
            )}

            <CardContent>
              <Stack>
                {step === 0 ? (
                  <>
                    <Form>
                      <Stack
                        direction={"column"}
                        spacing={3}
                        // margin={"2%"}
                        justifyContent={"center"}
                      >
                        <Stack>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: { xl: 16, md: 15, sm: 12 },
                            }}
                          >
                            Hotel name
                          </Typography>
                          <TextField
                            // sx={{ mb: 8, height: 2, border: "none", width: "95%" }}

                            placeholder="Enter Hotel Name"
                            {...register("hotelName")}
                          />
                          <FormHelperText sx={{ color: "red" }}>
                            {errors.hotelName?.message}
                          </FormHelperText>
                        </Stack>
                        {/* <HotelProfilePic setPic={setPic} formData={formData} /> */}
                        {/* <Stack spacing={5} direction={"column"} sx={{m:2}}> */}
                        <Typography {...getRootProps()}>
                          <input {...getInputProps()} />
                          {
                            <IconButton
                              sx={{
                                border: "2px dashed lightgrey",
                                borderRadius: 0,
                                width: { xl: "10vw", md: "12vw" },
                                height: { xl: "5vw", md: "10vw" },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
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
                        {/* </Stack> */}
                        <Stack direction={"column"} spacing={2}>
                          {files.map((photo: any) => (
                            <Chip
                              sx={{
                                fontSize: { xl: "13px", md: "12px", sm: 10 },
                                mt: 1,
                              }}
                              label={photo.name}
                              onDelete={() => handleDelete(photo)}
                            ></Chip>
                          ))}
                          {error && (
                            <FormHelperText sx={{ color: "red", ml: 2 }}>
                              {error}
                            </FormHelperText>
                          )}
                          {maxPhoto ? (
                            <Button
                              size="small"
                              variant="contained"
                              type="submit"
                              sx={{
                                fontSize: { xl: 15, md: 13 },
                              }}
                              onClick={handleSubmit(onSubmit)}
                            >
                              Next
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              sx={{
                                fontSize: { xl: 15, md: 13, sm: 12 },
                              }}
                              disabled
                              onClick={handleSubmit(onSubmit)}
                            >
                              Next
                            </Button>
                          )}
                        </Stack>
                      </Stack>
                    </Form>
                  </>
                ) : step === 1 ? (
                  <>
                    <Stack maxWidth={{ sm: 300, md: 400, lg: 500 }}>
                      <Form>
                        <Stack
                          spacing={2}
                          // justifyContent={"center"}
                          direction={"row"}
                          sx={{ m: "2%" }}
                        >
                          <Stack>
                            <Typography
                              sx={{
                                fontWeight: "bold",
                                fontSize: { xl: 16, md: 15, sm: 13 },
                              }}
                            >
                              City
                            </Typography>
                            <TextField
                              sx={{ width: "80%" }}
                              placeholder="Enter City"
                              {...register("city")}
                            />
                            <FormHelperText sx={{ color: "red" }}>
                              {errors.city?.message}
                            </FormHelperText>
                          </Stack>
                          <Stack>
                            <Typography
                              sx={{
                                fontWeight: "bold",
                                fontSize: { xl: 16, md: 15, sm: 13 },
                              }}
                            >
                              State
                            </Typography>
                            <TextField
                              sx={{ width: "80%" }}
                              id="demo-helper-text-aligned"
                              placeholder="Enter State"
                              {...register("state")}
                            />{" "}
                            <FormHelperText sx={{ color: "red" }}>
                              {errors.state?.message}
                            </FormHelperText>
                          </Stack>
                        </Stack>
                        <Stack
                          spacing={1}
                          justifyContent={"center"}
                          direction={"row"}
                          p={1}
                        >
                          <Stack>
                            <Typography
                              sx={{
                                fontWeight: "bold",
                                fontSize: { xl: 16, md: 15, sm: 13 },
                              }}
                            >
                              Postal code
                            </Typography>
                            <TextField
                              sx={{ width: "80%" }}
                              id="demo-helper-text-aligned"
                              placeholder="Enter Postal code"
                              {...register("postalCode")}
                            />{" "}
                            <FormHelperText sx={{ color: "red" }}>
                              {errors.postalCode?.message}
                            </FormHelperText>
                          </Stack>
                          <Stack>
                            <Typography
                              sx={{
                                fontWeight: "bold",
                                fontSize: { xl: 16, md: 15, sm: 13 },
                              }}
                            >
                              Country
                            </Typography>
                            <TextField
                              sx={{ width: "80%" }}
                              id="demo-helper-text-aligned"
                              placeholder="Enter Country"
                              {...register("country")}
                            />{" "}
                            <FormHelperText sx={{ color: "red" }}>
                              {errors.country?.message}
                            </FormHelperText>
                          </Stack>
                        </Stack>
                        {/* <Box sx={{ display: "flex" }}> */}
                        <Stack direction={"row"} spacing={1}>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{
                              fontSize: 15,
                              background: "lightgray",
                              color: "black",
                            }}
                            id="stepBackButton"
                            onClick={handleStepBack}
                          >
                            <ArrowBackIcon
                              sx={{ fontSize: { sm: 18, md: 20, xl: 22 } }}
                            />
                          </Button>

                          <Button
                            type="submit"
                            variant="contained"
                            onClick={handleSubmit(onSubmit)}
                            sx={{
                              fontSize: { xl: 15, md: 13, sm: 11 },
                            }}
                          >
                            Next
                          </Button>
                        </Stack>
                      </Form>
                    </Stack>
                  </>
                ) : step === 4 ? (
                  <>
                    <AddHotelLocation setLocation={setLocation} />
                    <Form>
                      <Stack
                        direction={"row"}
                        spacing={1}
                        mt={2}
                        minWidth={{ lg: 500, md: 400, sm: 350 }}
                      >
                        <Button
                          size="small"
                          variant="contained"
                          sx={{
                            fontSize: 15,
                            background: "lightgray",
                            color: "black",
                          }}
                          id="stepBackButton"
                          onClick={handleStepBack}
                        >
                          <ArrowBackIcon
                            sx={{ fontSize: { sm: 18, md: 20, xl: 22 } }}
                          />
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          type="submit"
                          sx={{
                            fontSize: { xl: 15, md: 13, sm: 11 },
                          }}
                          // onClick={() => setStep(0)}
                          onClick={handleSubmit(onSubmit)}
                        >
                          Add Hotel
                        </Button>
                      </Stack>
                    </Form>
                  </>
                ) : step === 3 ? (
                  <Form>
                    <Stack
                      ml={2}
                      direction={"column"}
                      maxWidth={{ lg: 500, md: 400 }}
                    >
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
                        <Box sx={{ maxHeight: "200px", overflowY: "auto" }}>
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
                      <FormHelperText sx={{ color: "red" }}>
                        {errors.amenities?.message}
                      </FormHelperText>
                    </Stack>

                    <Stack direction={"row"} spacing={1} mt={2}>
                      <Button
                        size="small"
                        variant="contained"
                        sx={{
                          fontSize: 15,
                          background: "lightgray",
                          color: "black",
                        }}
                        id="stepBackButton"
                        onClick={handleStepBack}
                      >
                        <ArrowBackIcon
                          sx={{ fontSize: { sm: 18, md: 20, xl: 22 } }}
                        />
                      </Button>

                      <Button
                        type="submit"
                        variant="contained"
                        onClick={handleSubmit(onSubmit)}
                        sx={{
                          fontSize: { xl: 15, md: 13, sm: 11 },
                        }}
                      >
                        Next
                      </Button>
                    </Stack>
                  </Form>
                ) : step === 2 ? (
                  <>
                    {/* {console.log(content)} */}
                    <Stack minWidth={{ sm: 300, md: 400, lg: 500 }}>
                      <Form>
                        <Stack>
                          {/* <ReactQuill
                            theme="snow"
                            value={content}
                            onChange={setContent}
                          /> */}
                          <AddDiscription
                            setContent={setContent}
                            content={content}
                          />

                          {/* <FormHelperText sx={{ color: "red" }}>
                            {errors.discription?.message}
                          </FormHelperText> */}
                        </Stack>

                        {/* <Box sx={{ display: "flex" }}> */}
                        <Stack direction={"row"} spacing={1}>
                          <Button
                            size="small"
                            variant="contained"
                            sx={{
                              fontSize: 15,
                              background: "lightgray",
                              color: "black",
                            }}
                            id="stepBackButton"
                            onClick={handleStepBack}
                          >
                            <ArrowBackIcon
                              sx={{ fontSize: { sm: 18, md: 20, xl: 22 } }}
                            />
                          </Button>

                          <Button
                            type="submit"
                            variant="contained"
                            onClick={handleSubmit(onSubmit)}
                            sx={{
                              fontSize: { xl: 15, md: 13, sm: 11 },
                            }}
                          >
                            Next
                          </Button>
                        </Stack>
                      </Form>
                    </Stack>
                  </>
                ) : null}
              </Stack>

              <Box sx={{ mt: 4, fontSize: { xl: 15, md: 13, sm: 10 } }}>
                To use Another Email for adding hotel{" "}
                <Button
                  sx={{
                    textTransform: "none",
                    fontSize: { xl: 15, md: 13, sm: 10 },
                  }}
                  onClick={() => navigate("/memberRegister")}
                >
                  Click here...
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
}
