import React, { useEffect, useMemo, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import QuillEditor from "react-quill";
import AddPhotoAlternateSharpIcon from "@mui/icons-material/AddPhotoAlternateSharp";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import HotelImage from "../../Register/MemberRegister/HotelImage";
import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { render } from "react-dom";
import { useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
import { FormattedMessage } from "react-intl";

function EditHotel(props: any) {
  const [value, setValue] = useState(props.data?.discription);
  const [category, setcategory] = useState<any>(props?.data?.categories);
  const [imagePreView, setImagePreView] = React.useState(false);
  const [previewIndex, setPreviewIndex] = React.useState<any>("");
  const [photoValue, setPhotoValue] = useState(props.data?.photo.slice(7));
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<any>([]);
  const url = "http://localhost:8000/";
  const { request } = useAuth();
  const user = useSelector((state: any) => state.userReducer.user);
  const handleDelete = () => {
    setOpen(true);
    setPhotoValue("");
  };
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone();
  const imagePreview: any = useMemo(() => {
    var imageUrl = "";
    if (acceptedFiles?.length) {
      const urls = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      imageUrl = urls?.[0]?.preview;
    } else {
      imageUrl = url + props.data?.photo;
    }
    return imageUrl;
  }, [acceptedFiles, props.data]);
  const handlePreviewImage = () => {
    setImagePreView(true);
    setPreviewIndex(imagePreview);
  };
  React.useEffect(() => {
    if (open === false) {
      setPhotoValue(props.data?.photo.slice(7));
    } else {
      setFile(acceptedFiles);
      setPhotoValue("");
    }
  }, [open]);
  useEffect(() => {
    if (acceptedFiles.length !== 0) {
      setPhotoValue(acceptedFiles[0]?.name);
      setFile(acceptedFiles);
    }
  }, [acceptedFiles]);
  const { register, handleSubmit } = useForm();
  const formData = new FormData();
  const onSubmit = (data: any) => {
    const get = async () => {
      if (file.length === 1) {
        formData.append("files", file[0]);
      }
      formData.set("_id", props.data?._id);
      formData.set("hotelName", data?.hotelName);
      formData.set("city", data?.city);
      formData.set("state", data?.state);
      formData.set("pinCode", data?.pinCode);
      formData.set("country", data?.country);
      formData.set("discription", value);
      formData.set("name", user.name);
      formData.set("categories", JSON.stringify(category));
      const result = await request.put("/updateHotel", formData);
      props.setData(result?.data[0]);
      // localStorage.setItem("name",data.ownerName);
      if (result) {
        enqueueSnackbar("Hotel details updated successfully", {
          variant: "success",
        });
        props.handleClose();
      }
    };
    get();
  };
  const handleClick = () => {
    props.setRender((prev: any) => prev + 1);
  };

  const handleCategoryChange = (value: any) => {
    setcategory(value);
  };

  return (
    <Dialog
      //   fullScreen={fullScreen}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth={"lg"}
    >
      <DialogTitle>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5">
            <FormattedMessage defaultMessage="Edit Hotel Details" />
          </Typography>
          <Tooltip title={"close"}>
            <IconButton onClick={props.handleClose}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Stack
          direction={"row"}
          spacing={5}
          justifyContent={"space-between"}
          component={"form"}
          //   onSubmit={handleSubmit(submitDetails)}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack spacing={4} maxWidth={500}>
            <Stack spacing={5}>
              <TextField
                variant="outlined"
                label={"Hotel Name"}
                defaultValue={props.data?.hotelName}
                {...register("hotelName")}
              />
              <Stack direction={"row"} spacing={2}>
                <TextField
                  variant="outlined"
                  label={"City"}
                  defaultValue={props.data?.city}
                  {...register("city")}
                />
                <TextField
                  variant="outlined"
                  label={"Pin Code"}
                  defaultValue={props.data?.pinCode}
                  {...register("pinCode")}
                />
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <TextField
                  variant="outlined"
                  label={"State"}
                  defaultValue={props.data?.state}
                  {...register("state")}
                />
                <TextField
                  variant="outlined"
                  label={"country"}
                  defaultValue={props.data?.country}
                  {...register("country")}
                />
              </Stack>
              <TextField
                disabled
                variant="outlined"
                label={"Owner Name"}
                defaultValue={user.name}
                {...register("ownerName")}
              />
              <TextField
                variant="outlined"
                label={"Owner's Email"}
                defaultValue={user.email}
                {...register("email")}
                disabled
              />
            </Stack>
          </Stack>
          <Stack
            width={500}
            flexWrap={"wrap"}
            spacing={2}
            justifyContent={"space-between"}
          >
            <Box
              border={"1px solid lightgray"}
              padding={2}
              borderRadius={"10px"}
            >
              <Typography variant="h5" color={"gray"}>
                <FormattedMessage defaultMessage="Hotel Image" />
              </Typography>
              <Stack m={2} direction={"row"} gap={2} flexWrap={"wrap"}>
                {!(photoValue === "") ? (
                  <>
                    <Tooltip title={"click to see preview"}>
                      <Box
                        component={"data"}
                        onClick={() => handlePreviewImage()}
                      >
                        <Chip
                          label={photoValue}
                          style={{ cursor: "pointer", width: 300 }}
                          onDelete={() => handleDelete()}
                        />
                      </Box>
                    </Tooltip>
                  </>
                ) : (
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
                )}
              </Stack>
              <Box></Box>
            </Box>
            <Stack spacing={2}>
              <Stack>
                <Autocomplete //Adding or deleting Category
                  multiple
                  id="tags-filled"
                  options={category?.map((option: any) => option)}
                  defaultValue={props?.data?.categories}
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
                  onChange={(event, value) => handleCategoryChange(value)}
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      variant="filled"
                      placeholder="Add Category"
                    />
                  )}
                />
              </Stack>
              <Stack spacing={1}>
                <label style={{ fontSize: "18px " }}>
                  <FormattedMessage defaultMessage="Room Description:" />
                </label>
                <Box width={500}>
                  <QuillEditor
                    theme="snow"
                    value={value}
                    onChange={(value) => setValue(value)}
                  />
                </Box>
              </Stack>
            </Stack>
            {!(photoValue === "") ? (
              <Button
                type="submit"
                sx={{
                  textTransform: "capitalize",
                  backgroundImage: "linear-gradient(270deg,#D11450,#EE2A24)",
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={handleClick}
              >
                <FormattedMessage defaultMessage="Update Data" />
              </Button>
            ) : (
              <Button
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "lightgray",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "lightgray",
                  },
                }}
                onClick={handleClick}
              >
                <FormattedMessage defaultMessage="Update Data" />
              </Button>
            )}
          </Stack>
        </Stack>
      </DialogContent>
      {imagePreView && (
        <HotelImage
          imagePreView={imagePreView}
          setImagePreView={setImagePreView}
          previewIndex={imagePreview}
          open={open}
          photoValue={photoValue}
        />
      )}
    </Dialog>
  );
}
export default EditHotel;
