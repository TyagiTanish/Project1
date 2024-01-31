import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

import RoomDialog from "./RoomDialog";

/**
 * To Show all the rooms of the Hotel. Markdown is *View Deal*.
 */

function UserViewRooms({ hotels }: any) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [details, setDetails] = useState({});
  const handleOpen = () => {
    setOpen(true);
  };
  // console.log(hotels);
  const handleDialog = (item: any) => {
    setOpen2(true);
    setDetails(item);
  };
  const handleClose = () => {
    setOpen2(false);
  };


  return (
    <>
      <Stack
        justifyContent={"space-evenly"}
        direction={"row"}
        marginTop={"4%"}
        marginBottom={"4%"}
      >
        {hotels[0]?.rooms?.map((item: any, i: any) => (
          <Stack
            sx={{ width: "18%" }}
            boxShadow={4}
            direction={"column"}
            spacing={1}
            padding={1}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
              }}
              alt="The house from the offer."
              // src={item?.photos[0]}
              src={`http://localhost:8000/${item?.photos[i].path}`}
            />
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: { xl: 18, md: 15, sm: 14 },
              }}
            >
              {item?.roomType}
            </Typography>
            <Typography sx={{ fontSize: { xl: 14, md: 13, sm: 12 } }}>
              {/* {item?.description.slice(0, 90)}... */}

              <Box
                dangerouslySetInnerHTML={{
                  __html: item?.discription.slice(0, 90),
                }}
                sx={{ flex: 1,wordBreak:'break-word'}}
              />
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"}>
              {" "}
              <Typography sx={{ fontSize: { xl: 15, md: 14, sm: 13 } }}>
                Member Bed and Breakfast
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xl: 15, md: 14, sm: 13 },
                }}
              >
                {item?.price}/-
              </Typography>
            </Stack>
            {/* // <Stack direction={"row"} justifyContent={"space-between"}>
            //   {" "}
            //   <Typography sx={{ fontSize: { xl: 15, md: 14, sm: 13 } }}>
            //     Bed and Breakfast
            //   </Typography>
            //   <Typography
            //     sx={{
            //       fontWeight: "bold",
            //       fontSize: { xl: 15, md: 14, sm: 13 },
            //     }}
            //   >
            //     {item.bedAndBreakfastPrice}
            //   </Typography>
            // </Stack> */}
            <Button
              sx={{
                textTransform: "capitalize",
                // backgroundImage: "linear-gradient(270deg,#D11450,#EE2A24)",
                // color: "white",
                fontWeight: "bold",
              }}
              variant="contained"
              color="error"
              onClick={() => {
                handleOpen();
                handleDialog(item);
              }}
            
            >
              Select & Book
            </Button>
          </Stack>
        ))}
      </Stack>
      {open && (
        <RoomDialog open={open2} handleClose={handleClose} details={details} />
      )}
    </>
  );
}

export default UserViewRooms;
