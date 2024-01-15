import React, { useEffect, useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";

import CloseIcon from "@mui/icons-material/Close";
import QuillEditor from "react-quill";
import AddPhotoAlternateSharpIcon from "@mui/icons-material/AddPhotoAlternateSharp";
import {
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
import HotelImage from "./HotelImage";
import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";

function EditHotel(props: any) {
  const [value, setValue] = useState(props.data[0]?.discription);
  const [imagePreView, setImagePreView] = React.useState(false);
  const [previewIndex, setPreviewIndex] = React.useState("");
  const [photoValue, setPhotoValue] = useState(props.data[0]?.photo.slice(7));
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<any>([]);
  
  const handlePreviewImage = () => {
    setImagePreView(true);
    // setPreviewIndex(photoValue);
    {open===false ? setPreviewIndex(props?.data[0]?.photo) : setPreviewIndex(photoValue)}
  };
  const handleDelete = () => {
    setOpen(true);
    setPhotoValue("");
  };
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone();
  React.useEffect(() => {
    if (open === false) {
      setPhotoValue(props.data[0]?.photo.slice(7));
    } else {
      setFile(acceptedFiles);
      // setPhotoValue(acceptedFiles[0]?.name);
      setPhotoValue("");
    }
  
    
  }, [open]);

  useEffect(() => {
    if (acceptedFiles.length !== 0) {
      setPhotoValue(acceptedFiles[0]?.name);
    }
  }, [acceptedFiles]);

  const {
    register,
    handleSubmit,
 
  } = useForm();

  // const onSubmit=(data:any)=>{
  //     console.log('form Data is -',data);
      
  // }
  return (
    <Dialog
      //   fullScreen={fullScreen}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth={"xl"}
    >
      <DialogTitle>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h5">Edit Hotel Details</Typography>
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
        >
        
          <Stack spacing={4} maxWidth={500}>
          <form onSubmit={handleSubmit((data) => {console.log(data)})}>
            <Stack spacing={5}>
             <TextField
                variant="outlined"
                label={"Hotel Name"}
                defaultValue={props.data[0]?.hotelName}
                {...register("hotelName")}
              />

              <Stack direction={"row"} spacing={2}>
                <TextField
                  variant="outlined"
                  label={"City"}
                  defaultValue={props.data[0]?.city}
                  // {...register("name")}
                />
                <TextField
                  variant="outlined"
                  label={"Pin Code"}
                  defaultValue={props.data[0]?.pinCode}
                  {...register("pinCode")}
                />
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <TextField
                  variant="outlined"
                  label={"State"}
                  defaultValue={props.data[0]?.state}
                  {...register("state")}
                />
                <TextField
                  variant="outlined"
                  label={"country"}
                  defaultValue={props.data[0]?.country}
                  {...register("country")}
                />
              </Stack>
              <TextField
                variant="outlined"
                label={"Owner  Name"}
                defaultValue={props.ownerData?.user?.name}
                {...register("ownerName")}
              />
            <TextField
                variant="outlined"
                label={"Owner's Email"}
              
                defaultValue={props.ownerData?.user?.email}
                {...register("email")}
              />
              
            </Stack>
            {/* <Button type="submit" value="submit">submit</Button> */}
</form>
        
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
                Hotel Image
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
                          style={{ cursor: "pointer" }}
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
                            Drop a Photo Here
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
              <Stack spacing={1}>
                <label style={{ fontSize: "18px " }}>Room Description:</label>
                <Box>
                  <QuillEditor
                    theme="snow"
                    value={value}
                    onChange={(value) => setValue(value)}
                  />
                </Box>
              </Stack>
            </Stack>
            <Button sx={{textTransform:'capitalize' ,  backgroundImage: "linear-gradient(270deg,#d11450,#ee2a24)",color:'white',fontWeight:'bold'}} type='submit'>Update Data</Button>
          </Stack>
        </Stack>
      </DialogContent>
      {imagePreView && (
        <HotelImage
          imagePreView={imagePreView}
          setImagePreView={setImagePreView}
          previewIndex={previewIndex}
          open={open}
        />
      )}
    </Dialog>
  );
}

export default EditHotel;
