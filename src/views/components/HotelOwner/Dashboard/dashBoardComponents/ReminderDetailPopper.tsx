import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { Stack, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function TransitionsPopper({ open, anchorEl, value }: any) {
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <div>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        placement="right-end"
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box
              sx={{
                border: 1,
                p: 1,
                bgcolor: "background.paper",
                marginLeft: "30px",
              }}
            >
              <Stack>
                <Typography variant="h6" fontWeight={"bolder"}>
                  {value?.hotelId?.hotelName}
                </Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
            
                  fontSize={{ sm: "small", md: "medium" }}
                >
                  <Stack
                    fontWeight={"bolder"}
                    direction={"row"}
                    alignItems={"center"}
                    spacing={2}
                    color={'gray'}
                  >
                    <CalendarMonthIcon  />
                    {`${new Date(value?.bookFrom)}`} --{" "}
                    {`${new Date(value?.bookTo)}`}
                    
                    <Stack fontSize={{ sm: "small", md: "medium" }} >
                      {value?.totalRooms} Room {value?.totalGuests} Guest
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}
