import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RoomDetail from "./RoomDetail";
import RoomDetailModal from "./RoomDetailsModal";
import RoomDetailBox from "./RoomDetailsDialog";

export default function AllRooms() {
  const [open, setOpen] = React.useState(false);
  const [Detailedroom, setDetailedRoom] = React.useState<number>(0);
  const [images, setImages] = React.useState([]);
  const [Rooms] = React.useState([
    {
      name: "Hotel mountain face by snow",
      price: "8000/-",
      rating: "excellent",
      src: [
        { url: "pic1.jpg" },
        { url: "pic4.jpg" },
        { url: "pic3.jpg" },
        { url: "pic5.jpg" },
      ],
    },
    {
      name: "Bentewood Resort",
      price: "2000/-",
      rating: "excellent",
      src: [
        { url: "pic2.jpg" },
        { url: "pic3.jpg" },
        { url: "pic4.jpg" },
        { url: "pic5.jpg" },
      ],
    },
    {
      name: "JW Marriot Mumbai Sahar",
      price: "3000/-",
      rating: "excellent",
      src: [
        { url: "pic3.jpg" },
        { url: "pic3.jpg" },
        { url: "pic4.jpg" },
        { url: "pic5.jpg" },
      ],
    },
    {
      name: "Niranta Transit",
      price: "5000/-",
      rating: "excellent",
      src: [
        { url: "pic4.jpg" },
        { url: "pic3.jpg" },
        { url: "pic4.jpg" },
        { url: "pic5.jpg" },
      ],
    },
    {
      name: "Hotel Kohinoor Continental",
      price: "9000/-",
      rating: "excellent",
      src: [
        { url: "pic5.jpg" },
        { url: "pic3.jpg" },
        { url: "pic4.jpg" },
        { url: "pic5.jpg" },
      ],
    },
  ]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }} padding={10}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 10, md: 12, xl: 8 }}
        >
          {Rooms?.map((room, index) => (
            <RoomDetail
              room={room}
              index={index}
              setOpen={setOpen}
              setDetailedRoom={setDetailedRoom}
            />
          ))}
        </Grid>
      </Box>
      <RoomDetailBox
        open={open}
        setOpen={setOpen}
        Rooms={Rooms}
        Detailedroom={Detailedroom}
        setDetailedRoom={setDetailedRoom}
      />
    </>
  );
}
