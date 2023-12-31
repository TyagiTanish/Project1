import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
function RoomDialog(props: any) {
  return (
    <Dialog onClose={props.handleClose} open={props.open} maxWidth="lg">
      <Stack
        justifyContent={"space-between"}
        direction={"row"}
        alignItems={"center"}
      >
        <DialogTitle sx={{fontWeight:'bold'}}>{props.details.name}</DialogTitle>{" "}
        <Tooltip title="Close">
          <IconButton>
            <CloseIcon
              onClick={() => {
                props.handleClose();
              }}
            />
          </IconButton>
        </Tooltip>
      </Stack>
      <Divider />
      <Stack direction={"row"} padding={2} overflow={"hidden"}>
        <Stack width={"50%"}>
          <Stack direction={"column"} spacing={4}>
            <Box
              component="img"
              sx={{
                width: "97%",
                //  height:"100%",
                backgroundSize: "cover",
              }}
              alt="The house from the offer."
              src={props?.details?.src}
            />
          </Stack>
          <Stack
            direction={"column"}
            spacing={2}
            overflow={"scroll"}
            height={"55.5%"}
            marginTop={'2%'}
          >
            <Typography fontWeight={"bold"} fontSize={18}>
              Room Description
            </Typography>
            <Typography fontSize={14}>{props.details.description}</Typography>
            <Typography fontWeight={"bold"} fontSize={18}>
              Hotel Amenities
            </Typography>
            <Stack spacing={1}>
              <li>Ac</li>
              <li>42” LED Smart TV</li>
              <li>Coffee and tea maker</li>
              <li>Hair dryer</li>
              <li>Bath amenities</li>
              <li>Bath robes and slippers</li>
              <li>Minibar upon request</li>
            </Stack>
            <Stack spacing={1}>
              <li>24-hour room service</li>
              <li>Complimentary water bottles</li>
              <li>In-room safe</li>
              <li>Iron and ironing board</li>
              <li>Complimentary high-speed Wi-Fi</li>
              <li>Daily newspaper upon request</li>
              <li>Extra bed upon request</li>
            </Stack>
          </Stack>
        </Stack>
       
    
        <Stack width={"50%"}>
          <Stack height={"75%"}></Stack>
          <Divider />
          <Stack direction={"row"} spacing={2}>
            {" "}
            <Stack direction={"column"} padding={1}>
              <Typography sx={{ fontWeight: 300, fontSize: 12 }}>
                From
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>
                ₹12,150
              </Typography>
              <Typography sx={{ fontSize: 13, color: "gray" }}>
                Avg/Night
              </Typography>
            </Stack>
            <Stack
              direction={"column"}
              width={"100%"}
              spacing={1}
              paddingTop={1}
            >
              <Stack>
                <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
                  Cancelation Policy
                </Typography>
                <Typography sx={{ fontSize: 12 }}>
                  11:59pm Hotel Time 2 Days Before Arrival Or Pay 1 Night Fee
                  /Credit Card Required
                </Typography>
              </Stack>
              <Stack>
                <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
                  Deposit Policy
                </Typography>
                <Typography sx={{ fontSize: 12 }}>
                  Credit Card Guarantee Required
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack sx={{ ml: 2 }}>
            {" "}
            <Button
              sx={{
                backgroundImage: "linear-gradient(270deg,#D11450,#EE2A24)",
                color: "white",
                fontWeight: "bold",
                mt: "2%",
              }}
            >
              Book Now
            </Button>
          </Stack>
        </Stack>
      </Stack>
   
    </Dialog>
  );
}

export default RoomDialog;
