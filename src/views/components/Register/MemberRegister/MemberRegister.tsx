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
  Card,
  CardContent,
  Chip,
  FormGroup,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import { Country, State, City } from "country-state-city";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SimpleMap from "../../Customer/Map/Map";
import HotelLocationMap from "./HotelLocationMap";
import { useForm } from "react-hook-form";
import { Form, useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDropzone } from "react-dropzone";
import AddPhotoAlternateSharpIcon from "@mui/icons-material/AddPhotoAlternateSharp";
import AddDiscription from "../../HotelOwner/Rooms/RoomDetails/AddDiscription";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Language from "../../Language";
import { FormattedMessage, useIntl } from "react-intl";
import { IconParkingCircle } from "@tabler/icons-react";
import { IconWifi } from "@tabler/icons-react";
import { IconSwimming } from "@tabler/icons-react";
import { IconHotelService } from "@tabler/icons-react";
import { IconBarbell } from "@tabler/icons-react";
import { IconWashMachine } from "@tabler/icons-react";
import { IconGlassGin } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";

export default function MemberRegister() {
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [cityCoordinates, setCityCoordinates] = React.useState<any>("");
  const [page, setPage] = React.useState(1);
  const [files, setfile] = React.useState<any>([]);
  const navigate = useNavigate();
  const [error, setError] = React.useState("");
  const [maxPhoto, setMaxPhoto] = React.useState(false);
  const [amenities, setAmenities] = React.useState([]);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone();
  const intl = useIntl();
  const allStates = State.getStatesOfCountry("IN");
  const allCities = City.getCitiesOfState("IN", state);
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
  const [content, setContent] = React.useState("");
  const [arr, setArr]: any = React.useState([]);
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
    // {
    //   id: "parking",
    //   label: "Parking",
    //   icon: <IconParkingCircle stroke={2} />,
    //   index: 8,
    // },
    // { id: "wifi", label: "Wifi", icon: <IconWifi stroke={2} />, index: 9 },
    // { id: "pool", label: "Pool", icon: <IconSwimming stroke={2} />, index: 10 },
    // {
    //   id: "roomService",
    //   label: "Room Service",
    //   icon: <IconHotelService stroke={2} />,
    //   index: 11,
    // },
    // { id: "gym", label: "Gym", icon: <IconBarbell stroke={2} />, index: 12 },
    // {
    //   id: "dryClean",
    //   label: "DryClean",
    //   icon: <IconWashMachine stroke={2} />,
    //   index: 13,
    // },
    // { id: "bar", label: "Bar", icon: <IconGlassGin stroke={2} />, index: 14 },
    // {
    //   id: "meeting",
    //   label: "Meeting",
    //   icon: <IconUsersGroup stroke={2} />,
    //   index: 15,
    // },
  ];
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword2 = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [screenSize, setScreenSize] = React.useState(window.outerWidth);
  React.useEffect(() => {
    setScreenSize(window.innerWidth);
    const handleWindowSize = () => {
      setScreenSize(window.outerWidth);
    };

    window.addEventListener("resize", handleWindowSize);
  });

  const change = (e: any) => {
    const value = e.target.value;

    if (arr.find((item: any) => item === value)) {
      // arr.delete(value);
      setArr(arr.filter((i: any) => i !== value));
    } else {
      // arr.push(value);
      setArr([...arr, value]);
    }
  };
  const handleChangeState = (event: any) => {
    setState(event.target.value);
  };
  const handleChangeCity = (event: any) => {
    setCity(event.target.value);
  };

  var FormSchema: any;
  page === 2 &&
    (FormSchema = Yup.object().shape({
      pinCode: Yup.string()
        .required(
          intl.formatMessage({ defaultMessage: "Pin Code is required" })
        )
        .max(
          6,
          intl.formatMessage({ defaultMessage: "Max length should be 6" })
        )
        .matches(
          /^[1-9][0-9]{5}$/,
          intl.formatMessage({ defaultMessage: "Pin Code must be a number" })
        ),
      country: Yup.string().required(
        intl.formatMessage({ defaultMessage: "Country name is required " })
      ),
      //   .min(
      //     3,
      //     intl.formatMessage({ defaultMessage: "Minimum length should be 3" })
      //   )
      //   .matches(
      //     /^[a-zA-Z]+(?: [a-zA-Z]+)?$/,
      //     intl.formatMessage({
      //       defaultMessage:
      //         "First Letter of Country name should be capital and name should be string",
      //     })
      //   ),
      state: Yup.string().required(
        intl.formatMessage({ defaultMessage: "State name is required" })
      ),
      //   .min(
      //     3,
      //     intl.formatMessage({ defaultMessage: "Minimum length should be 3" })
      //   )
      //   .matches(
      //     /^[a-zA-Z]+(?: [a-zA-Z]+)?$/,
      //     intl.formatMessage({
      //       defaultMessage:
      //         "First Letter of State name should be capital and name should be string",
      //     })
      //   ),
      city: Yup.string().required(
        intl.formatMessage({ defaultMessage: "City name is required" })
      ),
      //   .min(
      //     3,
      //     intl.formatMessage({ defaultMessage: "minimum length should be 3 " })
      //   )
      //   .matches(
      //     /^[a-zA-Z]+(?: [a-zA-Z]+)?$/,
      //     intl.formatMessage({
      //       defaultMessage:
      //         "First Letter of City name should be capital and name should be string",
      //     })
      //   ),
    }));

  page === 1 &&
    (FormSchema = Yup.object().shape({
      name: Yup.string()
        .required(
          intl.formatMessage({ defaultMessage: "First Name is required" })
        )
        .min(
          3,
          intl.formatMessage({
            defaultMessage: "Name should contain at least 3 letters",
          })
        ),
      // .matches(
      //   /^[a-zA-Z]+(?: [a-zA-Z]+)?$/,
      //   intl.formatMessage({
      //     defaultMessage:
      //       "First Letter of name should be capital and name should be string",
      //   })
      // ),
      email: Yup.string()
        .email(intl.formatMessage({ defaultMessage: "Invalid email !" }))
        .required(intl.formatMessage({ defaultMessage: "Email is Required" })),
      phone: Yup.string()
        .required(
          intl.formatMessage({ defaultMessage: "Phone no. is required" })
        )
        .max(
          10,
          intl.formatMessage({ defaultMessage: "Max length should be 10" })
        )
        .matches(
          /^[789]\d{9}$/,
          intl.formatMessage({
            defaultMessage:
              "Phone No. must not contain any special character and should start with 9 , 7 or 8",
          })
        ),
      hotelName: Yup.string()
        .min(
          5,
          intl.formatMessage({
            defaultMessage: "Hotel name should contain at least 5 letters",
          })
        )
        // .matches(
        //   /^[a-zA-Z]+(?: [a-zA-Z]+)?$/,
        //   intl.formatMessage({
        //     defaultMessage:
        //       "First Letter of name should be capital and name should be string",
        //   })
        // )
        .required(
          intl.formatMessage({ defaultMessage: "Hotel Name is Required" })
        ),
    }));

  page === 6 &&
    (FormSchema = Yup.object().shape({
      password: Yup.string()
        .required(
          intl.formatMessage({ defaultMessage: "This field is required" })
        )
        .min(
          8,
          intl.formatMessage({
            defaultMessage: "Pasword must be 8 or more characters",
          })
        )
        .matches(
          /(?=.*[a-z])(?=.*[A-Z])\w+/,
          intl.formatMessage({
            defaultMessage:
              "Password ahould contain at least one uppercase and lowercase character",
          })
        )
        .matches(
          /\d/,
          intl.formatMessage({
            defaultMessage: "Password should contain at least one number",
          })
        )
        .matches(
          /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
          intl.formatMessage({
            defaultMessage:
              "Password should contain at least one special character",
          })
        ),
    }));
  if (page === 5) {
    FormSchema = Yup.object().shape({
      discription: Yup.string(),
    });
  }
  page === 4 && (FormSchema = Yup.object().shape({}));
  // amenities: Yup.array().min(1, "Check at list one amenity"),
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
    discription: string;
    confirmPassword: string;
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<User>({
    resolver: yupResolver(FormSchema),
  });
  const { request } = useAuth();
  const [email, setEmail] = React.useState();

  const confirmPassword = watch("confirmPassword");
  const findCityByName = (cityName: any) => {
    return allCities.find((city) => city.name === cityName);
  };
  React.useMemo(() => {
    setCityCoordinates(findCityByName(city));
  }, [city, cityCoordinates]);
  // console.log(password);
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
        setPage(8);
      }
    } else {
      setPage((prev) => prev + 1);
    }
  };
  const Submit = async (detail: any) => {
    detail.amenities = arr;
    detail.country = "India";
    detail.state = State.getStateByCodeAndCountry(state, "IN")?.name;
    // if (page === 6) {
    detail.discription = content;
    // }
    // console.log(detail);
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
      formdata.set("amenities", JSON.stringify(detail.amenities));
      formdata.set("discription", detail.discription);
      const result = await request.post("/registerMember", formdata);
     

      navigate("/login");
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
  State.getStateByCodeAndCountry(state, "IN");
  return (
    <>
      <Stack
        direction={"column"}
        sx={{
          background: "white",
          width: { sm: "40vw", xl: "25vw" },
        }}
      >
        <Box
          sx={{
            background: "white",
          }}
        >
          <Box
            sx={{
              // marginTop: { sm: 1, md: 5 },
              textAlign: "center",
              justifyContent: "space-between",
              p: 2,
              pb: 0,
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
                <FormattedMessage
                  defaultMessage={"Enter Your Personal Details...."}
                />
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
                <FormattedMessage
                  defaultMessage={"Enter Your Location Details...."}
                />
              </Typography>
            )}
            {/* {page === 3 && (
              <Typography
                sx={{
                  fontSize: { xl: 28, md: 20 },
                  fontWeight: "700",
                  justifyContent: "center",
                  opacity: 0.7,
                }}
              >
                <FormattedMessage
                  defaultMessage={" Pin Your Location On Map...."}
                />
              </Typography>
            )} */}
            {page === 3 && (
              <Typography
                sx={{
                  fontSize: { xl: 28, md: 20 },
                  fontWeight: "700",
                  justifyContent: "center",
                  opacity: 0.7,
                }}
              >
                <FormattedMessage defaultMessage={"Choose a Photo...."} />
              </Typography>
            )}
            {page === 5 && (
              <Typography
                sx={{
                  fontSize: { xl: 28, md: 20 },
                  fontWeight: "700",
                  alignContent: "center",
                  opacity: 0.7,
                }}
              >
                <FormattedMessage
                  defaultMessage={"Enter hotel discription...."}
                />
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
                <FormattedMessage defaultMessage={"Enter Your Password...."} />
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
                <FormattedMessage
                  defaultMessage={"Enter Hotel Amenities...."}
                />
              </Typography>
            )}
          </Box>

          {page === 1 && (
            <>
              <form>
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
                      <FormattedMessage defaultMessage={"Owner Name"} />
                    </Typography>
                    <TextField
                      autoComplete="given-name"
                      required
                      fullWidth
                      id="firstName"
                      autoFocus
                      {...register("name")}
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: "12px",
                        },
                      }}
                    />
                    <FormHelperText sx={{ color: "red" }}>
                      {errors?.name?.message}
                    </FormHelperText>
                  </Stack>
                  <Stack>
                    <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 13 } }}>
                      <FormattedMessage defaultMessage={"Phone No."} />
                    </Typography>
                    <TextField
                      variant="outlined"
                      {...register("phone")}
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: "12px",
                        },
                      }}
                    ></TextField>
                    <FormHelperText sx={{ color: "red" }}>
                      {errors?.phone?.message}
                    </FormHelperText>
                  </Stack>
                  <Stack>
                    <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 13 } }}>
                      <FormattedMessage defaultMessage={"Email Address"} />
                    </Typography>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: "12px",
                        },
                      }}
                      autoComplete="email"
                      {...register("email")}
                      onChange={(e: any) => setEmail(e.target.value)}
                    />
                    <FormHelperText sx={{ color: "red" }}>
                      {errors?.email?.message}
                    </FormHelperText>
                  </Stack>
                  <Stack>
                    <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 13 } }}>
                      <FormattedMessage defaultMessage={"Hotel Name"} />
                    </Typography>
                    <TextField
                      required
                      fullWidth
                      {...register("hotelName")}
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: "12px",
                        },
                      }}
                      // onChange={(e: any) => setEmail(e.target.value)}
                    />
                    <FormHelperText sx={{ color: "red" }}>
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
                  <FormattedMessage defaultMessage={"Next"} />
                </Button>
              </form>
            </>
          )}
          {page === 2 && (
            <form>
              <Stack
                spacing={2}
                justifyContent={"center"}
                direction={"column"}
                sx={{ m: "6%" }}
              >
                <Stack>
                  <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 13 } }}>
                    <FormattedMessage defaultMessage={"Country"} />
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    {...register("country")}
                    value={"India"}
                    disabled
                    sx={{
                      [`& fieldset`]: {
                        borderRadius: "12px",
                      },
                    }}
                  />
                  <FormHelperText sx={{ color: "red" }}>
                    {errors?.country?.message}
                  </FormHelperText>
                </Stack>
                <Stack>
                  <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 13 } }}>
                    <FormattedMessage defaultMessage={"State"} />
                  </Typography>
                  <Select
                    sx={{
                      [`& fieldset`]: {
                        borderRadius: "12px",
                      },
                      
                    }}
                    value={state}
                    {...register("state")}
                    onChange={handleChangeState}
                    MenuProps={{ PaperProps: { style: { maxHeight: '200px' } } }}
                  >
                    {allStates.map((option) => (
                      <MenuItem key={option.isoCode} value={option.isoCode}  >
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText sx={{ color: "red" }}>
                    {errors?.state?.message}
                  </FormHelperText>
                </Stack>
                <Stack>
                  <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 13 } }}>
                    <FormattedMessage defaultMessage={"City"} />
                  </Typography>
                  <Select
                    sx={{
                      [`& fieldset`]: {
                        borderRadius: "12px",
                      },
                    }}
                    value={city}
                    {...register("city")}
                    onChange={handleChangeCity}
                    MenuProps={{ PaperProps: { style: { maxHeight: '200px' } } }}
                  >
                    {allCities.map((option: any) => (
                      <MenuItem key={option.name} value={option.name}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText sx={{ color: "red" }}>
                    {errors?.city?.message}
                  </FormHelperText>
                </Stack>

                <Stack>
                  <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 13 } }}>
                    <FormattedMessage defaultMessage={"Pin Code"} />{" "}
                  </Typography>
                  <TextField
                    required
                    fullWidth
                    {...register("pinCode")}
                    sx={{
                      [`& fieldset`]: {
                        borderRadius: "12px",
                      },
                    }}
                  />
                  <FormHelperText sx={{ color: "red" }}>
                    {errors?.pinCode?.message}
                  </FormHelperText>
                </Stack>
                <Stack>
                  <HotelLocationMap
                    setLocation={setLocation}
                    cityCoordinates={cityCoordinates}
                    setCityCoordinates={setCityCoordinates}
                  />
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
                <FormattedMessage defaultMessage={"Next"} />
              </Button>
            </form>
          )}
          {/* {page === 3 && (
            <>
              <Stack direction={"row"} sx={{ mr: 2, alignItems: "center" }}>
                <IconButton
                  sx={{
                    borderRadius: "50px",
                    border: "1px solid gray ",
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
                  <FormattedMessage defaultMessage={"Next"} />
                </Button>
              </Stack>
            </>
          )} */}

          {page === 6 && (
            <>
              <form>
                <Stack
                  spacing={2}
                  justifyContent={"center"}
                  direction={"column"}
                  sx={{ m: "6%" }}
                >
                  <Stack>
                    <Typography sx={{ fontSize: { xl: 17, md: 14, sm: 12 } }}>
                      <FormattedMessage defaultMessage={"Password"} />
                    </Typography>

                    <OutlinedInput
                      id="outlined-adornment-password"
                      {...register("password")}
                      name="password"
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
                    <FormHelperText sx={{ color: "red" }}>
                      {errors?.password?.message}
                    </FormHelperText>
                  </Stack>
                  {/* <Stack>
                  <OutlinedInput
                      id="outlined-adornment-password"
                     name="confirmPassword"
                      type={showPassword2 ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword2}
                            onMouseDown={handleMouseDownPassword2}
                            edge="end"
                          >
                            {showPassword2 ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                 />
                  </Stack> */}
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
                  <FormattedMessage defaultMessage={"Submit"} />
                </Button>
              </form>
            </>
          )}
          {page === 4 && (
            <>
              <form>
                <Stack direction={"column"} mt={2}>
                  {screenSize > 768 ? (
                    <Grid
                      container
                      rowSpacing={2}
                      columnSpacing={{ xs: 1, sm: 2, md: 5 }}
                      xs={12}
                    >
                      {amenitie.map((item, index) => (
                        <Grid item xs={3} key={index}>
                          <FormGroup>
                            <Button
                              sx={{
                                alignItems: "center",
                                justifyContent: "center",
                                textDecoration: "none",
                                ":hover": { bgcolor: "white" },
                              }}
                              onClick={() => {
                                if (arr.find((item: any) => item === index)) {
                                  // arr.delete(value);
                                  setArr(arr.filter((i: any) => i !== index));
                                } else {
                                  // arr.push(value);
                                  setArr([...arr, index]);
                                }
                              }}
                            >
                              <Card
                                variant="outlined"
                                sx={{
                                  width: 100,
                                  height: "10vh",
                                  border: arr?.includes(index)
                                    ? "3px solid skyblue "
                                    : "",
                                  ":hover": { bgcolor: "transparent" },
                                  borderRadius: 2,
                                }}
                              >
                                <CardContent sx={{ justifyContent: "center" }}>
                                  <Stack direction={"column"}>
                                    {/* <Stack mt={-3} mr={-5}>
                                      {arr.includes(index.toString()) ? (
                                        <FormControlLabel
                                          control={
                                            <Checkbox
                                              value={index}
                                              defaultChecked
                                            />
                                          }
                                          label=""
                                          sx={{
                                            display: "flex",
                                            flexDirection: "row-reverse",
                                          }} // Reverse the order of elements
                                        />
                                      ) : (
                                        <FormControlLabel
                                          control={<Checkbox value={index} />}
                                          label=""
                                          sx={{
                                            display: "flex",
                                            flexDirection: "row-reverse",
                                          }} // Reverse the order of elements
                                        />
                                      )}
                                    </Stack> */}
                                    <Box>
                                      <Box>{item.icon}</Box>
                                      <Typography sx={{ fontSize: "12px" }}>
                                        {item.label}
                                      </Typography>
                                    </Box>
                                  </Stack>
                                </CardContent>
                              </Card>
                            </Button>
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
                {/* <Button
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
                </Button> */}
                {arr.length === 0 ? (
                  <Button
                    type="submit"
                    variant="contained"
                    disabled
                    onClick={handleSubmit(Submit)}
                    sx={{
                      // width: { xl: 150, md: 100, sm: 50 },
                      fontSize: { xl: 15, md: 13, sm: 12 },
                      mt: 0,
                    }}
                  >
                    <FormattedMessage defaultMessage={"Next"} />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={handleSubmit(Submit)}
                    sx={{
                      // width: { xl: 150, md: 100, sm: 50 },
                      fontSize: { xl: 15, md: 13, sm: 12 },
                      mt: 0,
                    }}
                  >
                    <FormattedMessage defaultMessage={"Next"} />
                  </Button>
                )}
              </form>
            </>
          )}
          {page === 5 && (
            <>
              <form>
                <Stack gap={5}>
                  {" "}
                  <Stack justifyItems={"center"}>
                    <AddDiscription
                      setContent={setContent}
                      content={content}
                      placeHolder="Enter a hotel discription"
                    />

                    <FormHelperText sx={{ color: "red" }}>
                      {errors.discription?.message}
                    </FormHelperText>
                  </Stack>
                  <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    spacing={5}
                  >
                    <IconButton
                      sx={{
                        borderRadius: "50px",
                        border: "1px solid",
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
                      }}
                      onClick={handleSubmit(Submit)}
                    >
                      <FormattedMessage defaultMessage={"Next"} />
                    </Button>
                  </Stack>
                </Stack>
              </form>
            </>
          )}
          {page === 8 && (
            <>
              <Box mt={10}>
                <Stack alignItems={"flex-start"} spacing={3}>
                  <Typography
                    sx={{
                      width: "100%",
                      // m: "5%",
                      fontWeight: "bold",
                    }}
                  >
                    <FormattedMessage
                      defaultMessage={
                        " Email Already Exist If You want to continue with this email then press continue or press back to change email"
                      }
                    />{" "}
                  </Typography>
                  <Stack direction={"row"} gap={3}>
                    <Button
                      variant="outlined"
                      onClick={() => setPage(1)}
                      sx={{
                        // mr: { md: 5, sm: 2 },
                        fontSize: { md: 13, sm: 11 },
                      }}
                    >
                      <FormattedMessage defaultMessage={"Back"} />
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ fontSize: { md: 13, sm: 11 } }}
                      onClick={() => navigate("/login")}
                    >
                      <FormattedMessage defaultMessage={"Continue"} />
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </>
          )}
          {page === 3 && (
            <>
              <Stack gap={1}>
                {" "}
                <Stack spacing={5} direction={"column"} sx={{ m: 2 }}>
                  <Typography {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                      <IconButton
                        sx={{
                          border: "2px dashed lightgrey",
                          borderRadius: 0,
                          width: { xl: "20vw", md: "12vw" },
                          height: { xl: "10vw", md: "10vw" },
                          ml: { sm: 2, md: 5, lg: 10 },
                        }}
                      >
                        <Typography sx={{ mt: 1 }}>
                          <AddPhotoAlternateSharpIcon fontSize="large" />
                          <Typography sx={{ fontSize: "10px" }}>
                            <FormattedMessage
                              defaultMessage={"Drop a Photo Here"}
                            />
                          </Typography>
                        </Typography>
                      </IconButton>
                    }
                  </Typography>
                </Stack>
                <Stack>
                  {files.map((photo: any) => (
                    <Chip
                      sx={{
                        fontSize: { xl: "13px", md: "12px" },
                        mt: 1,
                        alignContent: "center",
                        width: 200,
                        ml: 20,
                      }}
                      label={photo.name}
                      onDelete={() => handleDelete(photo)}
                    ></Chip>
                  ))}
                </Stack>
                {error && (
                  <FormHelperText sx={{ color: "red" }}>{error}</FormHelperText>
                )}
                <Stack
                  direction={"row"}
                  sx={{
                    alignContent: "center",
                    justifyContent: "center",
                    m: 2,
                  }}
                  spacing={7}
                >
                  <IconButton
                    sx={{ borderRadius: "50px", border: "1px solid gray " }}
                    onClick={() => setPage((prev) => prev - 1)}
                  >
                    <ArrowBackIcon
                      sx={{ fontSize: { sm: 10, md: 13, xl: 15 } }}
                    />
                  </IconButton>

                  {/* {maxPhoto && ( */}
                  <Button
                    size="small"
                    variant="contained"
                    type="submit"
                    sx={{
                      fontSize: { xl: 15, md: 13 },
                    }}
                    onClick={handleNextClick}
                    disabled={!maxPhoto}
                  >
                    <FormattedMessage defaultMessage={"Next"} />
                  </Button>
                  {/* )}
                {!maxPhoto && (
                  <Button
                    variant="contained"
                    sx={{
                      width: { xl: 150, md: 100, sm: 50 },
                      fontSize: { xl: 15, md: 13, sm: 12 },
                    }}
                  
                  >
                    <FormattedMessage defaultMessage={"Next"} />
                  </Button>
                )} */}
                </Stack>
              </Stack>
            </>
          )}
        </Box>
      </Stack>
    </>
  );
}
