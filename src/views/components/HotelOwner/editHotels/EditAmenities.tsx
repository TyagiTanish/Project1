import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
} from "@mui/material";
import React, { useMemo } from "react";
import { IconParkingCircle } from '@tabler/icons-react';
import { IconWifi } from '@tabler/icons-react';
import { IconSwimming } from '@tabler/icons-react';
import { IconHotelService } from '@tabler/icons-react';
import { IconBarbell } from '@tabler/icons-react';
import { IconWashMachine } from '@tabler/icons-react';
import { IconGlassGin } from '@tabler/icons-react';
import { IconUsersGroup } from '@tabler/icons-react';

import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { FormattedMessage } from "react-intl";

// to edit the amenities
function EditAmenities({ open, onClose, amenities, id, setRender }: any) {
  const [arr, setArr]: any = React.useState([]);
  const amenitie = [
    { id: "parking", label: "Parking", icon: <IconParkingCircle stroke={2} />, index: '0' },
    { id: "wifi", label: "Wifi", icon: <IconWifi stroke={2} />, index: '1' },
    { id: "pool", label: "Pool", icon: <IconSwimming stroke={2} />, index: '2' },
    {
      id: "roomService",
      label: "Room Service",
      icon: <IconHotelService stroke={2} />,
      index: '3',
    },
    { id: "gym", label: "Gym", icon: <IconBarbell stroke={2} />, index: '4' },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <IconWashMachine stroke={2} />,
      index: '5',
    },
    { id: "bar", label: "Bar", icon: <IconGlassGin stroke={2} />, index: '6' },
    { id: "meeting", label: "Meeting", icon: <IconUsersGroup stroke={2} />, index: '7' },
    { id: "parking", label: "Parking", icon: <IconParkingCircle stroke={2} />, index: '8' },
    { id: "wifi", label: "Wifi", icon: <IconWifi stroke={2} />, index: '9' },
    { id: "pool", label: "Pool", icon: <IconSwimming stroke={2} />, index: '10' },
    {
      id: "roomService",
      label: "Room Service",
      icon: <IconHotelService stroke={2} />,
      index: '11',
    },
    { id: "gym", label: "Gym", icon: <IconBarbell stroke={2} />, index: '12' },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <IconWashMachine stroke={2} />,
      index: 13,
    },
    { id: "bar", label: "Bar", icon: <IconGlassGin stroke={2} />, index: '14' },
    { id: "meeting", label: "Meeting", icon: <IconUsersGroup stroke={2} />, index: '15' },
  ];


  const { request } = useAuth();
  useMemo(() => {
    amenities?.map((item: any) => arr.push(item));
  }, []);
  const { register, handleSubmit } = useForm();

  const change = (e: any) => {
    const value = (String(e));
    if (arr.find((item: any) => item === value)) {
      setArr(arr.filter((i: any) => i !== value));
    } else {
      // arr.push(value);
      setArr([...arr, value]);
    }
    console.log(arr)
  };

  const onSubmit = async (data: any) => {

   
    await request.post(`/updateAmeneties/${id}`, arr);
    setRender((prev: any) => prev + 1);
    onClose();
  };

//arr contains strings
  return (
    <Dialog onClose={onClose} open={open}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <DialogTitle maxWidth={"lg"}>
          <FormattedMessage defaultMessage="Edit Amenities" />
        </DialogTitle>
        <Stack sx={{ mr: 2, cursor: "pointer" }} onClick={onClose}>
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
                    {amenities.includes(String(index)) ? (
                      <FormControlLabel
                        control={
                          <Checkbox
                            value={index}
                            defaultChecked
                            onChange={() => {
                              change(index);
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
                            onChange={() => {
                              change(index);
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
          {arr.length === 0 ? (
            <Button
              type="submit"
              variant="contained"
              disabled
              sx={{
                fontSize: { xl: 15, md: 13, sm: 11 },
              }}
            >
              <FormattedMessage defaultMessage="Submit" />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              sx={{
                fontSize: { xl: 15, md: 13, sm: 11 },
              }}
            >
              <FormattedMessage defaultMessage="Submit" />
            </Button>
          )}
        </Stack>
      </form>
    </Dialog>
  );
}

export default EditAmenities;
