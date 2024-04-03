import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
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
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import useAuth from "../../../Hooks/useAuth/useAuth";
import Chip from "@mui/material/Chip";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Autocomplete from "@mui/material/Autocomplete";
import AddDiscription from "../HotelOwner/Rooms/RoomDetails/AddDiscription";
import { useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { FormattedMessage, useIntl } from "react-intl";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid lightgray",
  boxShadow: 24,
  p: 4,
  pl: 10,
  pr: 10,
  borderRadius: 1,
  height: 900,
  overflow: "auto",
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
function AddRooms({ setRender, showCategories }: any) {
  const intl = useIntl();
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

  const handleDelete = (photo: any) => {
    var acceptedFile = file.filter((pic: any) => {
      return pic !== photo;
    });

    if (acceptedFile.length === 0) {
      setphotos(false);
      console.log(acceptedFile);
    }
    setFile(acceptedFile);
    setDisplay(acceptedFile.length);
  };
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    maxFiles: 4,
  });

  useMemo(() => {
    setDisplay(file.length);
    if (acceptedFiles.length === 0) {
      setphotos(false);
    } else {
      setphotos(true);
    }
    // setFile(
    //   acceptedFiles.map((file) => {
    //     const previewURL = URL.createObjectURL(file);
    //     return { ...file, preview: previewURL };
    //   })
    // );

    if (acceptedFiles.length !== 0 && file.length < 4) {
      acceptedFiles.map((file: any) => {
        // console.log("file", { ...file });
        const previewURL = URL.createObjectURL(file);
        setFile((prev: any) => [...prev, { file, preview: previewURL }]);
      });
    }
  }, [acceptedFiles]);

  interface User {
    roomQuantity: string;
    price: string;
    roomHighlight?: any[];
    type: string;
  }
  const FormSchema = Yup.object().shape({
    roomQuantity: Yup.string().required(
      intl.formatMessage({ defaultMessage: "Room Number is required" })
    ),
    price: Yup.string()
      .required(intl.formatMessage({ defaultMessage: "Price is required!" }))
      .min(3, intl.formatMessage({ defaultMessage: "Should be above 1k" })),
    // roomHighlight: Yup.array()
    //   .required(
    //     intl.formatMessage({ defaultMessage: "Room highlight is required" })
    //   )
    //   .min(
    //     1,
    //     intl.formatMessage({
    //       defaultMessage: "Room highlight must have at least 1 item",
    //     })
    //   ),
    type: Yup.string().required(
      intl.formatMessage({ defaultMessage: "Room type is required" })
    ),
    // discription: Yup.string().required(
    //   intl.formatMessage({ defaultMessage: "Discription is required" })
    // ),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(FormSchema),
    defaultValues: { roomQuantity: "", price: "", roomHighlight: [] },
  });
  const id = useParams();
  const onSubmit = async (data: any) => {
    // const formData = new FormData();
    // data.roomHighlight = roomHighlight;
    const formData: any = new FormData();
    for (const photo of file) {
      formData.append("files", photo?.file);
    }
    formData.set("roomQuantity", data.roomQuantity);
    formData.set("type", type);
    formData.set("price", data.price);
    formData.append("roomHighlight", JSON.stringify(roomHighlight));
    formData.set("discription", content);
    if (Object.keys(id).length === 0) {
      await request.post("/uploadRooms", formData);
      enqueueSnackbar("room added successfully", { variant: "success" });
      setRender((prev: any) => prev + 1);
      handleClose();
      reset();
      setRoomHighlight([""]);
      setType("");
      setFile([]);
      setContent("");
    } else {
      await request.post(`/uploadRooms/${id.id}`, formData);
      enqueueSnackbar("room added successfully", { variant: "success" });
      setRender((prev: any) => prev + 1);
      handleClose();
      reset();
      setRoomHighlight([""]);
      setType("");
      setFile([]);
      setContent("");
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="error"
        sx={{ float: "right", width: 150 }}
      >
        <FormattedMessage defaultMessage={"Add Room +"} />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth={"xl"}
        // sx={{
        //   maxHeight: { md: "100vh", xl: "90vh", sm: "95vh" },
        //   mt: { md: 1, xl: 6, sm: 5 },
        //   overflow: "auto",
        // }}
      >
        <>
          <DialogTitle>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box
                sx={{
                  color: "#EE2A24",
                  fontWeight: "bold",
                  fontSize: 30,
                  // mb: 4,
                }}
              >
                <FormattedMessage defaultMessage={"Add Rooms"} />
              </Box>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Stack>{" "}
          </DialogTitle>
          <Divider />
          <DialogContent>
            {" "}
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack direction={"row"} spacing={5}>
                {" "}
                <Stack spacing={2}>
                  {" "}
                  <Box>
                    <FormControl sx={{ width: 235 }}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        <FormattedMessage defaultMessage={"Type of Room"} />
                      </Typography>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        // label="type"
                        {...register("type")}
                        sx={{ width: 400, mb: 2 }}
                        onChange={handleChange}
                      >
                        {showCategories?.map((category: any) => (
                          <MenuItem value={category}>{category}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormHelperText sx={{ mt: -2, color: "#EE2A24" }}>
                      {errors?.type?.message}
                    </FormHelperText>
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: "bold" }}>
                      <FormattedMessage defaultMessage={"Room Quantity"} />
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      sx={{ width: 400, mb: 2 }}
                      {...register("roomQuantity")}
                    />
                    <FormHelperText sx={{ mt: -2, color: "#EE2A24" }}>
                      {errors.roomQuantity?.message}
                    </FormHelperText>
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: "bold" }}>
                      <FormattedMessage defaultMessage={"Price"} />
                    </Typography>
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
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: "bold", mt: 2 }}>
                      <FormattedMessage defaultMessage={"Room Highlights"} />
                    </Typography>
                    <Autocomplete
                      sx={{ mb: 2 }}
                      multiple
                      id="tags-filled"
                      options={highlights.map((item) => item.Highlight)}
                      // {...register("roomHighlight")}
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
                          placeholder={intl.formatMessage({
                            defaultMessage: "Room's Highlight",
                          })}
                          sx={{ width: 400 }}
                        />
                      )}
                    />
                  </Box>
                </Stack>
                <Stack spacing={2}>
                  {" "}
                  {/* <FormHelperText sx={{ mt: -2, color: "#EE2A24" }}>
                  {errors.roomHighlight?.message}
                </FormHelperText> */}
                  <Stack width={"100%"}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      <FormattedMessage
                        defaultMessage={"Add Room Discription"}
                      />
                    </Typography>
                    <AddDiscription
                      setContent={setContent}
                      content={content}
                      placeHolder="Enter a room discription "
                      // {...register("discription")}
                    />
                  </Stack>
                  {/* <FormHelperText sx={{ color: "#EE2A24" }}>
                  {errors.discription?.message}
                </FormHelperText> */}
                  <Box>
                    {" "}
                    <Typography sx={{ fontWeight: "bold", mt: 5 }}>
                      <FormattedMessage defaultMessage={"Add Room Photos"} />
                    </Typography>
                    <Typography sx={{ fontSize: "10px" }}>
                      <FormattedMessage defaultMessage={"Upload 4 photos"} />
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
                          {file.length !== 4 && (
                            <Typography {...getRootProps()}>
                              <input {...getInputProps()} />
                              {
                                <IconButton sx={{ ml: -4, mt: 2 }}>
                                  <Typography sx={{}}>
                                    <AddAPhotoIcon fontSize="small" />
                                    <Typography sx={{ fontSize: "10px" }}>
                                      <FormattedMessage
                                        defaultMessage={"Add Room photos"}
                                      />
                                    </Typography>
                                  </Typography>
                                </IconButton>
                                // <Button>Add photos</Button>
                              }
                            </Typography>
                          )}

                          <Box sx={{ width: "14vw", ml: 0.3 }}>
                            {" "}
                            <Stack direction={"row"}>
                              {file?.map((photo: any, index: any) => (
                                <Stack direction={"row"}>
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
                                      src={photo?.preview}
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
                                width: "10vw",
                                ml: 15,
                              }}
                            >
                              <Typography>
                                <AddAPhotoIcon fontSize="small" />
                                <Typography sx={{ fontSize: "10px" }}>
                                  <FormattedMessage
                                    defaultMessage={"Add Room photos"}
                                  />
                                </Typography>
                              </Typography>
                            </IconButton>
                            // <Button>Add photos</Button>
                          }
                        </Typography>
                      )}
                    </div>
                  </Box>
                  {/* <Button onClick={upload}>Upload</Button>   */}
                  {/* {file.length === 4 ? (
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
                      <FormattedMessage defaultMessage={"Submit"} />
                    </Button>
                  ) : (
                    <> */}
                  {/* </>
                  )} */}
                </Stack>
              </Stack>
              <Divider sx={{ mt: 2 }} />
              <DialogActions sx={{ mt: 1 }}>
                <Button
                  disabled={file.length !== 4}
                  sx={{
                    border: "1px solid lightgray",
                    fontWeight: "bold",
                  }}
                  type="submit"
                >
                  <FormattedMessage defaultMessage={"Submit"} />
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </>
      </Dialog>
    </>
  );
}

export default AddRooms;
