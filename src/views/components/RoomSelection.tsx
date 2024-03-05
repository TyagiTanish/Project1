import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";

export default function RoomSelection({
  anchorEl,
  setAnchorEl,
  rooms,
  setRooms,
  render,
  setRender,
}: any) {
  const { register, handleSubmit } = useForm();

  const handleClose = () => {
    setAnchorEl(null);
    window?.location?.reload();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleAddRoom = () => {
    setRooms([...rooms, { Room: 1, guest: 1 }]);
  };

  const handleDeleteRoom = () => {
    setRooms((oldRooms: any) => [...oldRooms.slice(0, oldRooms.length - 1)]);
  };

  const handleAddNumberOfGuests = (index: any) => {
    rooms[index].guest = +rooms[index].guest + 1;
    setRender((prev: any) => prev + 1);
  };

  const handleSubtractNumberOfGuests = (index: any) => {
    rooms[index].guest = +rooms[index].guest - 1;
    setRender((prev: any) => prev + 1);
  };

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ top: 5 }}
      >
        <Box>
          <>
            <Typography
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              {" "}
              <Typography sx={{ ml: 2, mr: 8 }}>
                <b>Rooms</b>
              </Typography>
              <Typography>
                {" "}
                <b>Guests</b>
              </Typography>
            </Typography>
            {rooms.map((Element: any, index: any) => (
              <Typography sx={{ display: "flex", mt: 4 }}>
                <Typography sx={{ ml: 1 }}>Room {index + 1} </Typography>
                {Element.guest !== 1 ? (
                  <Button
                    sx={{
                      border: "1px solid gray",
                      padding: 0,
                      minWidth: 30,
                      mr: 1,
                      ml: 7,
                      borderRadius: 0,
                      color: "black",
                      fontSize: 30,
                      maxHeight: 30,
                    }}
                    onClick={() => handleSubtractNumberOfGuests(index)}
                  >
                    -
                  </Button>
                ) : (
                  <Button
                    sx={{
                      border: "1px solid gray",
                      padding: 0,
                      minWidth: 30,
                      mr: 1,
                      ml: 7,
                      borderRadius: 0,
                      color: "black",
                      fontSize: 30,
                      maxHeight: 30,
                    }}
                    disabled
                  >
                    -
                  </Button>
                )}
                {Element.guest}
                {Element.guest !== 3 ? (
                  <Button
                    sx={{
                      border: "1px solid gray",
                      color: "black",
                      padding: 0,
                      minWidth: 30,
                      fontSize: 35,
                      maxHeight: 30,
                      ml: 1,
                      borderRadius: 0,
                    }}
                    onClick={() => handleAddNumberOfGuests(index)}
                  >
                    +
                  </Button>
                ) : (
                  <Button
                    sx={{
                      border: "1px solid gray",
                      color: "black",
                      padding: 0,
                      minWidth: 30,
                      fontSize: 35,
                      maxHeight: 30,
                      ml: 1,
                      borderRadius: 0,
                    }}
                    disabled
                  >
                    +
                  </Button>
                )}
              </Typography>
            ))}
            <Typography sx={{ ml: 1, mt: 2 }}>
              {" "}
              {rooms.length !== 1 ? (
                <Button
                  sx={{ mr: 2, color: "black" }}
                  onClick={handleDeleteRoom}
                >
                  Delete Room
                </Button>
              ) : (
                <Button disabled sx={{ mr: 2, color: "black" }}>
                  Delete Room
                </Button>
              )}
              {rooms.length !== 6 ? (
                <Button sx={{ color: "black" }} onClick={handleAddRoom}>
                  Add Room
                </Button>
              ) : (
                <Button
                  disabled
                  sx={{ color: "black" }}
                  onClick={handleAddRoom}
                >
                  Add Room
                </Button>
              )}
            </Typography>
          </>
        </Box>
      </Popover>
    </div>
  );
}
