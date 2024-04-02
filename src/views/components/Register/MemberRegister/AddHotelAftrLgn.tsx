import React, { useEffect, useMemo, useState } from "react";
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
import useAuth from "../../../../Hooks/useAuth/useAuth";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AddHotelLocation from "./AddHotelLocation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Language from "../../../components/Language";
import { useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";
import { Chip, IconButton } from "@mui/material";
import AddPhotoAlternateSharpIcon from "@mui/icons-material/AddPhotoAlternateSharp";
import { IconParkingCircle } from "@tabler/icons-react";
import { IconWifi } from "@tabler/icons-react";
import { IconSwimming } from "@tabler/icons-react";
import { IconHotelService } from "@tabler/icons-react";
import { IconBarbell } from "@tabler/icons-react";
import { IconWashMachine } from "@tabler/icons-react";
import { IconGlassGin } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";

import AddDiscription from "../../HotelOwner/Rooms/RoomDetails/AddDiscription";
import { FormattedMessage, useIntl } from "react-intl";
import Logo from "../../Logo/Logo";
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
  const lang = useSelector((state: any) => state?.userReducer?.locale);
  const [files, setfile] = React.useState<any>([]);
  const [error, setError] = React.useState("");
  const [maxPhoto, setMaxPhoto] = React.useState(false);

  const [arr, setArr]: any = React.useState([]);
  const intl = useIntl();
  const amenitie = [
    {
      id: "parking",
      label: "Parking",
      icon: <IconParkingCircle stroke={2} />,
      index: 0,
    },
    { id: "wifi", label: "Wifi", icon: <IconWifi stroke={2} />, index: 1 },
    { id: "pool", label: "Pool", icon: <IconSwimming stroke={2} />, index: 2 },
    {
      id: "roomService",
      label: "Room Service",
      icon: <IconHotelService stroke={2} />,
      index: 3,
    },
    { id: "gym", label: "Gym", icon: <IconBarbell stroke={2} />, index: 4 },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <IconWashMachine stroke={2} />,
      index: 5,
    },
    { id: "bar", label: "Bar", icon: <IconGlassGin stroke={2} />, index: 6 },
    {
      id: "meeting",
      label: "Meeting",
      icon: <IconUsersGroup stroke={2} />,
      index: "7",
    },
    {
      id: "parking",
      label: "Parking",
      icon: <IconParkingCircle stroke={2} />,
      index: 8,
    },
    { id: "wifi", label: "Wifi", icon: <IconWifi stroke={2} />, index: 9 },
    { id: "pool", label: "Pool", icon: <IconSwimming stroke={2} />, index: 10 },
    {
      id: "roomService",
      label: "Room Service",
      icon: <IconHotelService stroke={2} />,
      index: 11,
    },
    { id: "gym", label: "Gym", icon: <IconBarbell stroke={2} />, index: 12 },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <IconWashMachine stroke={2} />,
      index: 13,
    },
    { id: "bar", label: "Bar", icon: <IconGlassGin stroke={2} />, index: 14 },
    {
      id: "meeting",
      label: "Meeting",
      icon: <IconUsersGroup stroke={2} />,
      index: 15,
    },
  ];

  const [content, setContent] = useState("");

  const [screenSize, setScreenSize] = React.useState(window.outerWidth);
  React.useEffect(() => {
    setScreenSize(window.innerWidth);
    const handleWindowSize = () => {
      setScreenSize(window.outerWidth);
    };
    // console.log("screenSize", screenSize);

    window.addEventListener("resize", handleWindowSize);
  });

  const change = (e: any) => {
    const value = e.target.value;

    if (arr.find((item: any) => item === value)) {
      // arr.delete(value);
      setArr(arr.filter((i: any) => i !== value));
    } else {
      // arr.push(value);
      // setArr(arr);
      setArr([...arr, value]);
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
    // console.log(data);
    // if (step === 3) {
    //   setArr(arr);
    //   data.amenities = arr;
    // }
    data.amenities = arr;
    if (step === 2) {
      data.discription = content;
    }
    data.longitude = location.longitude;
    data.latitude = location.latitude;
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
    formData.set("amenities", JSON.stringify(data.amenities));
    formData.set("discription", data.discription);
    // console.log(data);
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
          /^[a-zA-Z]+(?: [a-zA-Z]+)?$/,
          "should be a string or should atleat have one upper case letter"
        ),
    });
  }
  if (step === 1) {
    FormSchema = Yup.object().shape({
      city: Yup.string()
        .required("This field is required")
        .min(3)
        .matches(
          /^[a-zA-Z]+(?: [a-zA-Z]+)?$/,
          "should be a string or should atleat have one upper case letter"
        ),
      state: Yup.string()
        .required("This field is required")
        .min(3)
        .matches(
          /^[a-zA-Z]+(?: [a-zA-Z]+)?$/,
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
      discription: Yup.string(),
    });
  }
  // if (step === 3) {
  //   FormSchema = Yup.object().shape({
  //     amenities: Yup.array().min(1, "Select at least one amenity"),
  //   });
  // }
  if (step === 3) {
    FormSchema = Yup.object().shape({});
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
    <Stack direction={"row"} spacing={3} alignItems={"center"}>
      <Box
        component={"img"}
        src={require("../../../../assets/Group 13.jpg")}
        width={"55%"}
        height={"100vh"}
      />
      <Stack justifyContent={"space-between"} height={"50vh"}>
        <Box sx={{ ml: 60 }}>
          <Language />
        </Box>
        <Box ml={30}>
          <Logo />
        </Box>
        <Box>
          {/* {display && <Loaders />} */}

          {step === 0 && (
            <Typography
              sx={{
                m: "1%",
                fontWeight: "bold",
                fontFamily: "Inter,sans-serif",
                fontSize: { xl: "25px", md: "20px", sm: 15 },
                textAlign: "center",
              }}
            >
              <FormattedMessage defaultMessage="Add Hotel Details.." />
            </Typography>
          )}

          {step === 1 && (
            <Typography
              sx={{
                m: "1%",
                fontWeight: "bold",
                fontFamily: "Inter,sans-serif",
                fontSize: { xl: "25px", md: "20px", sm: 15 },
                textAlign: "center",
              }}
            >
              <FormattedMessage defaultMessage="Add Hotel Location" />
            </Typography>
          )}
          {step === 4 && (
            <Typography
              sx={{
                m: "1%",
                fontWeight: "bold",
                fontFamily: "Inter,sans-serif",
                fontSize: { xl: "25px", md: "20px", sm: 15 },
                textAlign: "center",
              }}
            >
              <FormattedMessage defaultMessage="Point location" />
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
              <FormattedMessage defaultMessage="Enter Hotel Amenities...." />
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
              <FormattedMessage defaultMessage="Enter Hotel Discription...." />
            </Typography>
          )}

          <Stack ml={20}>
            {step === 0 ? (
              <>
                <form>
                  <Stack
                    direction={"column"}
                    spacing={3}
                    // margin={"2%"}
                    sx={{ width: { xl: 350, md: 280, sm: 280 } }}
                  >
                    <Stack>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xl: 16, md: 15, sm: 12 },
                        }}
                      >
                        <FormattedMessage defaultMessage="Hotel name" />
                      </Typography>
                      <TextField
                        // sx={{ mb: 8, height: 2, border: "none", width: "95%" }}

                        placeholder={intl.formatMessage({
                          defaultMessage: "Enter Hotel Name",
                        })}
                        {...register("hotelName")}
                      />
                      <FormHelperText sx={{ color: "red" }}>
                        {errors.hotelName?.message}
                      </FormHelperText>
                    </Stack>

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
                              <FormattedMessage defaultMessage="Drop a Photo Here" />
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
                          <FormattedMessage defaultMessage="Next" />
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
                          <FormattedMessage defaultMessage="Next" />
                        </Button>
                      )}
                    </Stack>
                  </Stack>
                </form>
              </>
            ) : step === 1 ? (
              <>
                <Stack width={{ sm: 300, md: 400, xl: 450 }}>
                  <form>
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
                          <FormattedMessage defaultMessage="City" />
                        </Typography>
                        <TextField
                          sx={{ width: "80%" }}
                          placeholder={intl.formatMessage({
                            defaultMessage: "Enter City",
                          })}
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
                          <FormattedMessage defaultMessage="State" />
                        </Typography>
                        <TextField
                          sx={{ width: "80%" }}
                          id="demo-helper-text-aligned"
                          placeholder={intl.formatMessage({
                            defaultMessage: "Enter State",
                          })}
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
                          <FormattedMessage defaultMessage="Postal code" />
                        </Typography>
                        <TextField
                          sx={{ width: "80%" }}
                          id="demo-helper-text-aligned"
                          placeholder={intl.formatMessage({
                            defaultMessage: "Enter Postal code",
                          })}
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
                          <FormattedMessage defaultMessage="Country" />
                        </Typography>
                        <TextField
                          sx={{ width: "80%" }}
                          id="demo-helper-text-aligned"
                          placeholder={intl.formatMessage({
                            defaultMessage: "Enter Country",
                          })}
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
                        <FormattedMessage defaultMessage="Next" />
                      </Button>
                    </Stack>
                  </form>
                </Stack>
              </>
            ) : step === 4 ? (
              <>
                <AddHotelLocation setLocation={setLocation} />
                <form>
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
                      <FormattedMessage defaultMessage="Add Hotel" />
                    </Button>
                  </Stack>
                </form>
              </>
            ) : step === 3 ? (
              <form>
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
                  {/* <FormHelperText sx={{ color: "red" }}>
                        {errors.amenities?.message}
                      </FormHelperText> */}
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

                  {arr.length === 0 ? (
                    <Button
                      type="submit"
                      variant="contained"
                      disabled
                      onClick={handleSubmit(onSubmit)}
                      sx={{
                        fontSize: { xl: 15, md: 13, sm: 11 },
                      }}
                    >
                      <FormattedMessage defaultMessage="Next" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      onClick={handleSubmit(onSubmit)}
                      sx={{
                        fontSize: { xl: 15, md: 13, sm: 11 },
                      }}
                    >
                      <FormattedMessage defaultMessage="Next" />
                    </Button>
                  )}
                </Stack>
              </form>
            ) : step === 2 ? (
              <>
                {/* {console.log(content)} */}
                <Stack minWidth={{ sm: 300, md: 400, xl: 420 }}>
                  <form>
                    {/* <ReactQuill
                            theme="snow"
                            value={content}
                            onChange={setContent}
                          /> */}
                    <AddDiscription setContent={setContent} content={content} />

                    <FormHelperText sx={{ color: "red" }}>
                      {errors.discription?.message}
                    </FormHelperText>

                    {/* <Box sx={{ display: "flex" }}> */}
                    <Stack direction={"row"} spacing={1} mt={3}>
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
                        <FormattedMessage defaultMessage="Next" />
                      </Button>
                    </Stack>
                  </form>
                </Stack>
              </>
            ) : null}
          </Stack>

          {/* <Box sx={{ mt: 4, fontSize: { xl: 15, md: 13, sm: 10 } }}>
                <FormattedMessage defaultMessage="To use Another Email for adding hotel" />
                <Button
                  sx={{
                    textTransform: "none",
                    fontSize: { xl: 15, md: 13, sm: 10 },
                  }}
                  onClick={() => navigate("/memberRegister")}
                >
                  <FormattedMessage defaultMessage="Click here..." />
                </Button>
              </Box> */}
        </Box>
      </Stack>
    </Stack>
  );
}
