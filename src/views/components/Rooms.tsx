import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  FormControl,
  FormHelperText,
  IconButton,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import Chip from "@mui/material/Chip";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Autocomplete from "@mui/material/Autocomplete";
import AddDiscription from "./HotelOwner/Rooms/RoomDetails/AddDiscription";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid lightgray",
  boxShadow: 24,
  p: 4,
  pl: 10,
  pr: 10,
  borderRadius: 1,
};

const highlights = [
  { Highlight: "A/C" },
  { Highlight: "42' LED Smart TV" },
  { Highlight: "Coffee and tea maker" },
  { Highlight: "Hair dryer" },
  { Highlight: "bath amenities" },
  { Highlight: "bath robes and slippers" },
  { Highlight: "Minibar upon request" },
  { Highlight: "24-hour room service" },
  { Highlight: "Complimentry water bottles" },
  { Highlight: "In-room safe " },
  { Highlight: "Iron and ironing board" },
  { Highlight: "Complimentry high speed Wi-Fi" },
  { Highlight: "Daily newspaper upon request" },
  { Highlight: "Extra bed upon request" },
];
function Rooms() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { request } = useAuth();
  const [type, setType] = React.useState("");
  const [display, setDisplay] = useState(0);
  const [file, setFile] = useState([] as any);
  const [photos, setphotos] = useState(false);
  const [roomHighlight, setRoomHighlight] = useState([""]);
  const [content, setContent] = useState<any>("");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };
  const [files1, setFiles1] = useState<any>([]);
  // const onDrop = React.useCallback(

  //   (acceptedFiles: any) => {
  //     setFile(acceptedFiles);
  //   },
  //   []
  // );
  const handleDelete = (photo: any) => {
    // if(file.length===1){
    //   setNext(true)
    // }

    var acceptedFiles = file.filter((pic: any) => {
      return pic !== photo;
    });
    // console.log(acceptedFiles);

    if (acceptedFiles.length === 0) {
      setphotos(false);
    }
    setFile(acceptedFiles);
    setDisplay(acceptedFiles.length);
  };
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    maxFiles: 3,
  });

  useEffect(() => {
    // setFile(acceptedFiles);
    setDisplay(acceptedFiles.length);
    if (acceptedFiles.length === 0) {
      setphotos(false);
    } else {
      setphotos(true);
    }

    setFile(
      acceptedFiles.map((file) => {
        const previewURL = URL.createObjectURL(file);
        console.log("Preview URL:", previewURL);
        return { ...file, preview: previewURL };
      })
    );
  }, [acceptedFiles]);
  console.log(acceptedFiles);
  interface User {
    roomNo: string;
    price: string;
    roomHighlight?: any[];
  }
  const FormSchema = Yup.object().shape({
    roomNo: Yup.string().required("Room Number is required").min(3),
    price: Yup.string()
      .required("Price is required!")
      .min(3, "Should be above 1k"),
    roomHighlight: Yup.array(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(FormSchema),
  });

  const onSubmit = async (data: any) => {
    // const formData = new FormData();
    // data.roomHighlight = roomHighlight;
    const formData = {
      files: file,
      roomNo: data.roomNo,
      type: type,
      price: data.price,
      roomHighlight: roomHighlight,
      discription: content,
    };

    console.log(formData);
    await request.post("/uploadRooms", formData);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Box>
            <Box sx={style}>
              <Box
                sx={{
                  color: "#EE2A24",
                  fontWeight: "bold",
                  fontSize: 30,
                  mb: 4,
                }}
              >
                Add Rooms
              </Box>
              <center></center>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography sx={{ fontWeight: "bold" }}>Room No:</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{ width: 400, mb: 2 }}
                  {...register("roomNo")}
                />
                <FormHelperText sx={{ mt: -2, color: "#EE2A24" }}>
                  {errors.roomNo?.message}
                </FormHelperText>

                <Box>
                  <FormControl sx={{ width: 235 }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Type of Room
                    </Typography>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={type}
                      // label="type"

                      sx={{ width: 400, mb: 2 }}
                      onChange={handleChange}
                    >
                      <MenuItem selected value={"Delux"}>
                        Delux
                      </MenuItem>
                      <MenuItem value={"Super Delux"}>Super Delux</MenuItem>
                      <MenuItem value={"Sweet"}>Sweet</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Typography sx={{ fontWeight: "bold" }}>Price</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{ width: 400, mb: 2 }}
                  {...register("price")}
                />
                {/* <input
                        id="fileUpload"
                        type="file"
                        accept=".gif, .jpg , .jpeg , .jfif , .pjpeg , .pjp, .png, .svg, .webp,
                        .doc,.docx, .xls, .pdf,.csv"
                        multiple
                        onChange={(e)=>updateData(e)}
                        // disabled={uploadedFiles.length >= MAX_COUNT}
                      "  // onInputCapture={handleloading}
                      /> */}

                <FormHelperText sx={{ mt: -2, color: "#EE2A24" }}>
                  {errors.price?.message}
                </FormHelperText>
                <Typography sx={{ fontWeight: "bold", mt: 2 }}>
                  Room Highlights
                </Typography>
                <Autocomplete
                  sx={{ mb: 2 }}
                  multiple
                  id="tags-filled"
                  options={highlights.map((item) => item.Highlight)}
                  // defaultValue={[highlights[0].Highlight]}
                  freeSolo
                  onChange={(event, value) => setRoomHighlight(value)}
                  renderTags={(value: readonly string[], getTagProps) =>
                    value.map((option: string, index: number) => (
                      <Chip
                        variant="outlined"
                        label={option}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="Room's Highlight"
                    />
                  )}
                />
                <FormHelperText sx={{ mt: -2, color: "#EE2A24" }}>
                  {errors.roomHighlight?.message}
                </FormHelperText>
                <Typography sx={{ fontWeight: "bold", mt: 3 }}>
                  Add Room Discription
                </Typography>
                <Stack width={"125%"}>
                  <AddDiscription setContent={setContent} content={content} />
                </Stack>
                <Typography sx={{ fontWeight: "bold", mt: 1 }}>
                  Add Room Photos
                </Typography>
                <Typography sx={{ fontSize: "10px" }}>
                  Upload 3 photos
                </Typography>
                <div
                  style={{
                    display: "flex",
                    padding: 10,
                    width: "20vw",
                    height: "5vw",
                    justifyTracks: "center",
                  }}
                >
                  {photos ? (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "20vw",
                      }}
                    >
                      <Typography {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                          <IconButton sx={{ ml: -4, mt: 2 }}>
                            <Typography sx={{}}>
                              <AddAPhotoIcon fontSize="small" />
                              <Typography sx={{ fontSize: "10px" }}>
                                Add Room photos
                              </Typography>
                            </Typography>
                          </IconButton>
                          // <Button>Add photos</Button>
                        }
                      </Typography>

                      <Box sx={{ width: "14vw", ml: 0.3 }}>
                        {" "}
                        <Stack direction={"row"}>
                          {file?.map((photo: any, index: any) => (
                            // <Chip
                            //   style={Object.assign({}, avatarImageStyle, {
                            //     color: "grey",
                            //   })}
                            //   label={photo.name}
                            //   avatar={
                            //     <Avatar
                            //       alt="Photo"
                            //       src={photo.preview}
                            //       sx={{ height: 200 }}
                            //     />
                            //   }
                            //   onDelete={() => handleDelete(photo)}
                            //   sx={{ mb: 0.5 }}
                            // ></Chip>
                            <Stack direction={"row"}>
                              {/* <Box
                                component="img"
                                sx={{
                                  height: 70,
                                  width: 70,
                                  p: 0.5,
                                }}
                                // borderRadius={"50%"}
                                alt="Preview image"
                                src={photo.preview}
                                
                              />
                              <Box
                                onClick={() => {
                                  handleDelete(photo);
                                }}
                              >
                                <ClearIcon fontSize="small" />
                              </Box> */}

                              <Box
                                // component="div"
                                sx={{
                                  position: "relative",
                                  height: 70,
                                  width: 70,
                                  p: 0.5,
                                }}
                              >
                                <img
                                  alt="Preview image"
                                  src={photo.preview}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                  }}
                                />
                                <span
                                  style={{
                                    position: "absolute",
                                    // top: "90%",
                                    left: "70%",
                                    borderRadius: "50%",
                                    height: 20,
                                    // transform: "translate(-50%, -50%)",
                                    color: "red", // Change color as needed
                                    cursor: "pointer",
                                    background: "white",
                                  }}
                                  onClick={() => handleDelete(photo)} // Add your click event handler
                                >
                                  <ClearIcon fontSize="small" />
                                </span>
                              </Box>
                            </Stack>
                          ))}
                        </Stack>
                      </Box>
                    </Box>
                  ) : (
                    <Typography {...getRootProps()}>
                      <input {...getInputProps()} />
                      {
                        <IconButton
                          sx={{
                            alignItems: "center",
                            border: "2px dashed lightgrey",
                            borderRadius: 0,
                            width: "6vw",
                            height: "5vw",
                            ml: 15,
                          }}
                        >
                          <Typography>
                            <AddAPhotoIcon fontSize="small" />
                            <Typography sx={{ fontSize: "10px" }}>
                              Add Room photos
                            </Typography>
                          </Typography>
                        </IconButton>
                        // <Button>Add photos</Button>
                      }
                    </Typography>
                  )}
                </div>

                {/* <Button onClick={upload}>Upload</Button>   */}

                {display === 3 ? (
                  <Button
                    variant="contained"
                    sx={{
                      backgroundImage:
                        "linear-gradient(270deg,#D11450,#EE2A24)",
                      width: "100%",
                      mt: 5,
                      fontWeight: "bold",
                    }}
                    type="submit"
                  >
                    Submit
                  </Button>
                ) : (
                  <>
                    <Button
                      disabled
                      sx={{
                        mt: 1,
                        width: "100%",
                        border: "1px solid lightgray",
                        fontWeight: "bold",
                      }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </>
                )}
              </form>
            </Box>
          </Box>
        </>
      </Modal>
    </>
  );
}

export default Rooms;
