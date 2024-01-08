import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import Chip from "@mui/material/Chip";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Autocomplete from "@mui/material/Autocomplete";
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
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  // const onDrop = React.useCallback(

  //   (acceptedFiles: any) => {
  //     setFile(acceptedFiles);
  //   },
  //   []
  // );
  console.log(file);
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
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

  useEffect(() => {
    setFile(acceptedFiles);
    setDisplay(acceptedFiles.length);
    if (acceptedFiles.length === 0) {
      setphotos(false);
    } else {
      setphotos(true);
    }
  }, [acceptedFiles]);

  interface User {
    roomNo: string;
    price: string;
  }
  const FormSchema = Yup.object().shape({
    roomNo: Yup.string().required("Room Number is required").min(3),
    price: Yup.string()
      .required("Price is required!")
      .min(3, "Should be above 1k"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(FormSchema),
  });

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append("files", file[i]);
    }
    formData.set("roomNo", data.roomNo);
    formData.set("type", type);
    formData.set("price", data.price);

    await request.post("/upload", formData);
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
                    {/* <InputLabel
         id="demo-simple-select-label"></InputLabel> */}
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
                  defaultValue={[highlights[0].Highlight]}
                  freeSolo
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
                      // label="Room's Highlight"
                      placeholder="Favorites"
                    />
                  )}
                />
                <Typography sx={{ fontWeight: "bold" }}>
                  Add Room Photos
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
                      {/* {next && <Typography sx={{color:"#EE2A24",width:"10vw",mt:2.5,fontWeight:"bold",ml:-1}}>Upload Your Picture</Typography>}   */}
                      <Typography {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                          <IconButton
                            // sx={{
                            // alignItems: "left",
                            // border: "2px dashed lightgrey",
                            // borderRadius: 0,
                            // width: "6vw",
                            // height: "5vw",
                            // ml: -1,

                            // }}
                            sx={{ ml: -4, mt: 2 }}
                          >
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
                        {file?.map((photo: any, index: any) => (
                          <Chip
                            label={photo.name}
                            onDelete={() => handleDelete(photo)}
                            sx={{ mb: 0.5 }}
                          ></Chip>
                        ))}
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
                      mt: 2,
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
