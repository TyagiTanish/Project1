import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { IconParkingCircle } from "@tabler/icons-react";
import { IconWifi } from "@tabler/icons-react";
import { IconSwimming } from "@tabler/icons-react";
import { IconHotelService } from "@tabler/icons-react";
import { IconBarbell } from "@tabler/icons-react";
import { IconWashMachine } from "@tabler/icons-react";
import { IconGlassGin } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";
import ChangedImagePreview from "./changedImagePreview";
import {
  Autocomplete,
  Box,
  Chip,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
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
import { useParams } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

/**
 *   To Edit the Details of a particular Room
 */

export default function EditRoomDetails({
  editBox,
  setEditBox,
  room,
  setRender,
  showCategories,
}: any) {
  const theme = useTheme();
  const intl = useIntl();
  const [imagePreView, setImagePreView] = React.useState(false);
  const [previewIndex, setPreviewIndex] = React.useState(0);
  const [editRoom, setEditRoom] = React.useState(room);
  const [changedPhoto, setChangedPhoto] = React.useState<any>([]);
  const [updatedPhoto, setUpdatedPhoto] = React.useState([] as any);
  const [photos, setPhotos] = React.useState<any>(room?.photos);
  const [changedImagePreview, setChangedImagePreView] = React.useState(false);
  const [ChangedImageIndex, setChangedImageIndex] = React.useState<any>();
  const [description, setDescription] = React.useState(editRoom.discription);
  const [Amenities, setAmenities] = React.useState<any>(editRoom.amenities);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { request } = useAuth();
  const [type, setType] = React.useState(editRoom?.roomType);
  const [screenSize, setScreenSize] = React.useState<any>(window.outerWidth);

  React.useEffect(() => {
    setScreenSize(window.innerWidth);
    const handleWindowSize = () => {
      setScreenSize(window.outerWidth);
    };
    // console.log("screenSize", screenSize);

    window.addEventListener("resize", handleWindowSize);
  });

  React.useMemo(() => {
    setPhotos(room?.photos);
    setChangedPhoto([]);
    setUpdatedPhoto([]);
    setEditRoom(room);
  }, [editBox]);

  const amenities = [
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

  const FormSchema = Yup.object().shape({
    // type: Yup.string().required("type is required"),
    roomQuantity: Yup.string()
      .required(intl.formatMessage({ defaultMessage: "Type is required" }))
      .max(3)
      .min(1),
    // description: Yup.string().required("description is required"),
    amenities: Yup.array().min(
      1,
      intl.formatMessage({ defaultMessage: "Minimum one amenity required" })
    ),
    price: Yup.string().required(
      intl.formatMessage({ defaultMessage: "Price is required" })
    ),
  });

  interface User {
    // type: string;
    roomQuantity: string;
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
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
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

  const id = useParams();

  const submitDetails = async (value: any) => {
    const formData = new FormData();
    formData.set("type", type);
    formData.set("price", value?.price);
    formData.set("roomQuantity", value?.roomQuantity);
    formData.set("description", description);
    formData.set("amenities", JSON.stringify(Amenities));
    updatedPhoto.map((image: any) => formData.append("files", image));
    formData.set("photos", JSON.stringify(photos));
    formData.set("id", editRoom?._id);

    if (Object.keys(id).length === 0) {
      await request.post("/editRoom", formData);
    } else {
      // console.log("hello");

      await request.post(`/editRoom/${id.id}`, formData);
    }
    enqueueSnackbar("Details updated Successfully", { variant: "success" });
    setRender((prev: any) => prev + 1);
    handleClose();
    setChangedPhoto([]);
  };

  React.useEffect(() => {
    setPreviewIndex(previewIndex);
  }, [previewIndex, editRoom]);
  // console.log(editRoom?.roomType, "Type");

  // React.useMemo(() => {
  //   console.log(changedPhoto);
  // }, [changedPhoto]);

  return (
    <Dialog
      fullScreen={fullScreen}
      open={editBox}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth={screenSize <= 768 ? "sm" : "xl"}
    >
      <DialogTitle>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5">
            <FormattedMessage defaultMessage="Edit Room Details" />
          </Typography>
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
          <Stack
            direction={screenSize < 1024 ? "column" : "row"}
            spacing={5}
            justifyContent={"space-between"}
          >
            <Stack spacing={5} maxWidth={500}>
              <Box>
                <FormControl sx={{ width: 235 }}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    <FormattedMessage defaultMessage="Type of Room" />
                  </Typography>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    sx={{ width: 500, mb: 2 }}
                    onChange={handleChange}
                  >
                    {showCategories?.map((category: any) => (
                      <MenuItem value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Stack spacing={2}>
                <TextField
                  variant="outlined"
                  label={<FormattedMessage defaultMessage="Room Quantity" />}
                  defaultValue={editRoom?.roomQuantity}
                  {...register("roomQuantity")}
                />
              </Stack>
              <Stack spacing={2}>
                <Stack spacing={1}>
                  <label style={{ fontSize: "22px " }}>
                    <FormattedMessage defaultMessage="Room Description:" />
                  </label>
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
                  <FormattedMessage defaultMessage="Room Images" />
                </Typography>
                <Stack m={2} direction={"row"} gap={2} flexWrap={"wrap"}>
                  {photos?.map((image: any, index: any) => (
                    <>
                      <Box position={"relative"}>
                        <Box
                          component={"img"}
                          src={`http://localhost:8000/${image?.path}`}
                          width={100}
                        />
                        <IconButton
                          sx={{
                            position: "absolute",
                            top: -4,
                            bgcolor: "white",
                            width: 8,
                            height: 5,
                            boxShadow: 3,
                            color: "red",
                            right: -2,
                            ":hover": { bgcolor: "white" },
                          }}
                          onClick={() => handleDelete(index)}
                        >
                          <RemoveCircleOutlineIcon fontSize={"small"} />
                        </IconButton>
                      </Box>
                    </>
                  ))}
                  {photos?.length !== 4 &&
                    changedPhoto?.map((photo: any, index: any) => (
                      <>
                        <Box position={"relative"}>
                          <Box
                            component={"img"}
                            src={photo?.preview}
                            width={100}
                          />
                          <IconButton
                            sx={{
                              position: "absolute",
                              top: 0,
                              bgcolor: "white",
                              width: 8,
                              height: 5,

                              color: "red",
                              right: 0,
                            }}
                            onClick={() => handleDeleteChangedPhoto(index)}
                          >
                            <RemoveCircleOutlineIcon fontSize={"small"} />
                          </IconButton>
                        </Box>
                      </>
                    ))}
                </Stack>
                <Box>
                  <Dropzone
                    onDrop={(acceptedFiles) => {
                      if (photos?.length < 4) {
                        acceptedFiles.map((file) => {
                          const previewURL = URL.createObjectURL(file);
                          setChangedPhoto((prev: any) => [
                            ...prev,
                            { ...file, preview: previewURL },
                          ]);
                        });
                        setUpdatedPhoto(acceptedFiles);
                      }
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
                              disabled={
                                Number(photos?.length) +
                                  Number(changedPhoto?.length) ===
                                4
                                  ? true
                                  : false
                              }
                            >
                              <FormattedMessage defaultMessage="Upload New Photo" />
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
                  defaultValue={editRoom?.amenities.map((item: any) => item)}
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
                      label={
                        <FormattedMessage defaultMessage="Room Amenities" />
                      }
                      placeholder={intl.formatMessage({
                        defaultMessage: "Add Amenities",
                      })}
                    />
                  )}
                />
                {/* <FormHelperText>{errors.amenities}</FormHelperText> */}
                <TextField
                  variant="outlined"
                  label={<FormattedMessage defaultMessage="Room Price" />}
                  defaultValue={editRoom.price}
                  {...register("price")}
                />
                <Button variant="contained" color="success" type="submit">
                  <FormattedMessage defaultMessage="Save Changes" />
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </form>
      </DialogContent>
      {/* <ImagePreview
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
      /> */}
    </Dialog>
  );
}
