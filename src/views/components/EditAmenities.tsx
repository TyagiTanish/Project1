import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import React, { useMemo } from "react";
import { FreeMode, Pagination } from "swiper/modules";
import AddPhotoAlternateSharpIcon from "@mui/icons-material/AddPhotoAlternateSharp";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import PoolIcon from "@mui/icons-material/Pool";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import WineBarIcon from "@mui/icons-material/WineBar";
import GroupsIcon from "@mui/icons-material/Groups";
import { Stack } from "@mui/system";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth/useAuth";

// to edit the amenities
function EditAmenities({ open, onClose, amenities ,id,setRender}: any) {
  const [arr, setArr]: any = React.useState([]);
  const amenitie = [
    { id: "parking", label: "Parking", icon: <LocalParkingIcon />, index: 0 },
    { id: "wifi", label: "Wifi", icon: <NetworkWifiIcon />, index: 1 },
    { id: "pool", label: "Pool", icon: <PoolIcon />, index: 2 },
    {
      id: "roomService",
      label: "Room Service",
      icon: <RoomServiceIcon />,
      index: 3,
    },
    { id: "gym", label: "Gym", icon: <FitnessCenterIcon />, index: 4 },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <DryCleaningIcon />,
      index: 5,
    },
    { id: "bar", label: "Bar", icon: <WineBarIcon />, index: 6 },
    { id: "meeting", label: "Meeting", icon: <GroupsIcon />, index: "7" },
    { id: "parking", label: "Parking", icon: <LocalParkingIcon />, index: 8 },
    { id: "wifi", label: "Wifi", icon: <NetworkWifiIcon />, index: 9 },
    { id: "pool", label: "Pool", icon: <PoolIcon />, index: 10 },
    {
      id: "roomService",
      label: "Room Service",
      icon: <RoomServiceIcon />,
      index: 11,
    },
    { id: "gym", label: "Gym", icon: <FitnessCenterIcon />, index: 12 },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <DryCleaningIcon />,
      index: 13,
    },
    { id: "bar", label: "Bar", icon: <WineBarIcon />, index: 14 },
    { id: "meeting", label: "Meeting", icon: <GroupsIcon />, index: 15 },
  ];
  const ShowAmenities = amenitie.filter((item: any, index: any) =>
    amenities?.includes(String(item.index))
  );

  const { request } = useAuth();
  useMemo(()=>{
      amenities?.map((item:any)=>(
        arr.push(item)
      ))
  },[])
  const {
    register,
    handleSubmit,
  
  } = useForm();

  const change = (e: any) => {
    const value = e.target.value;

    if (arr.find((item: any) => item === value)) {
    
      setArr(arr.filter((i: any) => i !== value));
    } else {
      // arr.push(value);
      setArr([...arr,value])
    }
   
  };
  const onSubmit=async(data:any)=>{
   
    await request.post(`updateAmeneties/${id}`,arr);
    setRender((prev:any)=>prev+1);
    onClose()
  }



  return (
    <Dialog onClose={onClose} open={open}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {" "}
        <DialogTitle maxWidth={"lg"}>Edit Amenities</DialogTitle>
        <Stack
          sx={{ mr: 2, cursor: "pointer" }}
          onClick={onClose}
        >
          <CloseIcon fontSize="small" />
        </Stack>
      </Stack>

      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* form to collect the data  */}
        <Stack ml={2} direction={"column"} maxWidth={{ lg: 500, md: 400 }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {amenitie.map((item, index) => (
              <Grid item xs={5}>
                <FormGroup>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    {amenities.includes(index.toString()) ? (
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
        </Stack>

        {/* submit button contains an onclick property that will submit the data automatically */}
        <Stack
          direction={"row"}
          spacing={1}
          mt={2}
          justifyContent={"end"}
          mr={2}
          mb={2}
        >
          {arr.length==0 ?  <Button
            type="submit"
            variant="contained"
            disabled
           
            sx={{
              fontSize: { xl: 15, md: 13, sm: 11 },
            }}
          >
            Submit
          </Button> :  
          <Button
            type="submit"
            variant="contained"
        
            sx={{
              fontSize: { xl: 15, md: 13, sm: 11 },
            }}
          >
            Submit
          </Button>}
         
        </Stack>
      </form>
    </Dialog>
  );
}

export default EditAmenities;
