import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import PoolIcon from "@mui/icons-material/Pool";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import WineBarIcon from "@mui/icons-material/WineBar";
import GroupsIcon from "@mui/icons-material/Groups";
import ChangedImagePreview from "./changedImagePreview";
import {
  Autocomplete,
  Box,
  Chip,
  Divider,
  FormHelperText,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Editor from "./TextEditorForDescription";
import ImagePreview from "./ImagePreview";
import * as Yup from "yup";
import Dropzone from "react-dropzone";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "../../../../../Hooks/useAuth/useAuth";
import { enqueueSnackbar } from "notistack";
export default function EditRoomDetails({
  editBox,
  setEditBox,
  room,
 setRender
}: any) {
  const theme = useTheme();
  const [imagePreView, setImagePreView] = React.useState(false);
  const [previewIndex, setPreviewIndex] = React.useState(0);
  const [editRoom, setEditRoom] = React.useState(room);
  const [changedPhoto, setChangedPhoto] = React.useState<any>([]);
  const [updatedPhoto,setUpdatedPhoto] = React.useState([] as any)
  const [photos, setPhotos] = React.useState<any>(room?.photos);
  const [changedImagePreview, setChangedImagePreView] = React.useState(false);
  const [ChangedImageIndex, setChangedImageIndex] = React.useState<any>();
  const [description, setDescription] = React.useState(editRoom.discription);
  const [Amenities, setAmenities] = React.useState<any>(editRoom.amenities);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const {request}  = useAuth()


  React.useEffect(()=>{
    setPhotos(room?.photos);
    setEditRoom(room);
  },[room])

  const amenities = [
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

  const FormSchema = Yup.object().shape({
    type: Yup.string().required("type is required"),
    // description: Yup.string().required("description is required"),
    amenities: Yup.array().min(1, "minimum one amenity required"),
    price: Yup.string().required("price is required"),
  });

  interface User {
    type: string;
    price: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(FormSchema),
  });

  const handleClose = () => {
    setEditBox(false);
  };

  const handlePreviewImage = (index: any) => {
    setImagePreView(true);
    setPreviewIndex(index);
  };

  const handleDelete = (index: any) => {
    const images = photos?.filter((image: any, i: any) => {
      if (i !== index) {
        return image;
      }
    });
    setPhotos(images);
    // setRender((oldValue:any) =>oldValue+1)
  };

  const handleDeleteChangedPhoto = (index: any) => {
    const images = changedPhoto?.filter((image: any, i: any) => {
      if (i !== index) {
        return image;
      }
    });
    setChangedPhoto(images);
  };

  const previewImage = () => {
    setChangedImagePreView(true);
  };

  const submitDetails = (value: any) => {
    const formData = new FormData();
    formData.set("type", value?.type);
    formData.set("price", value?.price);
    formData.set("description",description);
    formData.set("amenities", JSON.stringify(Amenities));
    updatedPhoto.map((image: any) => formData.append("files", image));
    formData.set("photos", JSON.stringify(photos));
    formData.set("id",editRoom?._id)
    request.post('/editRoom',formData);
    enqueueSnackbar("Details updated Successfully",{variant:'success'})
    setRender((prev:any)=>prev+1)
    handleClose()
    setChangedPhoto([])
  };

  React.useEffect(() => {
    setPreviewIndex(previewIndex);
  }, [previewIndex, editRoom]);
  return (
    <Dialog
      fullScreen={fullScreen}
      open={editBox}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth={"xl"}
    >
      <DialogTitle>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5">Edit Room Details</Typography>
          <Tooltip title={"close"}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <form onSubmit={handleSubmit(submitDetails)}>
          <Stack direction={"row"} spacing={5} justifyContent={"space-between"}>
            <Stack spacing={5} maxWidth={500}>
              <Stack spacing={2}>
                <TextField
                  variant="outlined"
                  label={"Room Type"}
                  defaultValue={editRoom?.roomType}
                  {...register("type")}
                />
              </Stack>

              <Stack spacing={2}>
                <Stack spacing={1}>
                  <label style={{ fontSize: "22px " }}>Room Description:</label>
                  <Editor room={editRoom} setDescription={setDescription} />
                </Stack>
              </Stack>
            </Stack>
            <Stack
              width={500}
              flexWrap={"wrap"}
              spacing={4}
              justifyContent={"space-between"}
            >
              <Box
                border={"1px solid lightgray"}
                padding={2}
                borderRadius={"10px"}
              >
                <Typography variant="h5" color={"gray"}>
                  Room Images
                </Typography>
                <Stack m={2} direction={"row"} gap={2} flexWrap={"wrap"}>
                  {photos?.map((image: any, index: any) => (
                    <Tooltip title={"click to see preview"}>
                      <Box
                        component={"data"}
                        onClick={() => handlePreviewImage(index)}
                      >
                        <Chip
                          label={`${image?.path}`}
                          style={{ cursor: "pointer" }}
                          onDelete={() => handleDelete(index)}
                        />
                      </Box>
                    </Tooltip>
                  ))}
                  {changedPhoto?.map((photo: any, index: any) => (
                    <Tooltip title={"click to see preview"}>
                      <Box
                        component={"data"}
                        onClick={() => {
                          previewImage();
                          setChangedImageIndex(index);
                        }}
                      >
                        <Chip
                          label={`${photo?.path}`}
                          style={{ cursor: "pointer" }}
                          onDelete={() => handleDeleteChangedPhoto(index)}
                        />
                      </Box>
                    </Tooltip>
                  ))}
                </Stack>
                <Box>
                  <Dropzone
                    onDrop={(acceptedFiles) => {
                      setChangedPhoto(
                        acceptedFiles.map((file) => {
                          const previewURL = URL.createObjectURL(file);
                          return { ...file, preview: previewURL };
                        })
                      );
                      setUpdatedPhoto(acceptedFiles)
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <section>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          {
                            <Button
                              variant="contained"
                              size="small"
                              color={"error"}
                              sx={{
                                float: "right",
                                fontWeight: "bolder",
                                color: "white",
                              }}
                              disabled={photos?.length === 4 ? true : false}
                            >
                              Upload New Photo
                            </Button>
                          }
                        </div>
                      </section>
                    )}
                  </Dropzone>
                </Box>
              </Box>
              <Stack spacing={4}>
                <Autocomplete
                  multiple
                  options={amenities?.map((item: any) => item.label)}
                  onChange={(event, value) => setAmenities(value)}
                  defaultValue={editRoom?.amenities.map((item:any)=>item)}
                  freeSolo
                  renderTags={(value: readonly string[], getTagProps: any) =>
                    value.map((option: string, index: number) => (
                      <Chip
                        variant="outlined"
                        label={option}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      label="Room Amenities"
                      placeholder="Add Amenities"
                    />
                  )}
                />
                {/* <FormHelperText>{errors.amenities}</FormHelperText> */}
                <TextField
                  variant="outlined"
                  label={"Room Price"}
                  defaultValue={editRoom.price}
                  {...register("price")}
                />
                <Button variant="contained" color="success" type="submit">
                  Save Changes
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </form>
      </DialogContent>
      <ImagePreview
        imagePreView={imagePreView}
        setImagePreView={setImagePreView}
        room={editRoom}
        previewIndex={previewIndex}
      />
      <ChangedImagePreview
        changedImagePreview={changedImagePreview}
        setChangedImagePreView={setChangedImagePreView}
        changedPhoto={changedPhoto}
        ChangedImageIndex={ChangedImageIndex}
      />
    </Dialog>
  );
}
