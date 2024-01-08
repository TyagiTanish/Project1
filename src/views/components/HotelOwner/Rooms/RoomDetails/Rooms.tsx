import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RoomDetail from "./RoomDetail";
import RoomDetailModal from "./RoomDetailsModal";
import RoomDetailBox from "./RoomDetailsDialog";

export default function AllRooms() {
  const [render,setRender] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [Detailedroom, setDetailedRoom] = React.useState<number>(0);
  const [Rooms, setRooms] = React.useState([
    {
      name: "Hotel mountain face by snow",
      price: "8000/-",
      rating: "excellent",
      src: [
        { url: "pic1.jpg" },
        { url: "pic4.jpeg" },
        { url: "pic3.jpg" },
        { url: "pic5.jpeg" },
      ],
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. In id ab sint
        vitae dolorum aliquam laboriosam voluptatibus cupiditate facilis
        recusandae corrupti iste perferendis magni vel, nam reiciendis error
        laborum ipsam.`,
      type: "Deluxe",
    },
    {
      name: "Bentewood Resort",
      price: "2000/-",
      rating: "excellent",
      src: [
        { url: "pic2.jpg" },
        { url: "pic3.jpg" },
        { url: "pic4.jpeg" },
        { url: "pic5.jpeg" },
      ],
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. In id ab sint
        vitae dolorum aliquam laboriosam voluptatibus cupiditate facilis
        recusandae corrupti iste perferendis magni vel, nam reiciendis error
        laborum ipsam.`,
      type: "Deluxe",
    },
    {
      name: "JW Marriot Mumbai Sahar",
      price: "3000/-",
      rating: "excellent",
      src: [
        { url: "pic3.jpg" },
        { url: "pic1.jpg" },
        { url: "pic4.jpeg" },
        { url: "pic5.jpeg" },
      ],
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. In id ab sint
        vitae dolorum aliquam laboriosam voluptatibus cupiditate facilis
        recusandae corrupti iste perferendis magni vel, nam reiciendis error
        laborum ipsam.`,
      type: "Deluxe",
    },
    {
      name: "Niranta Transit",
      price: "5000/-",
      rating: "excellent",
      src: [
        { url: "pic4.jpeg" },
        { url: "pic3.jpg" },
        { url: "pic4.jpeg" },
        { url: "pic5.jpeg" },
      ],
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. In id ab sint
        vitae dolorum aliquam laboriosam voluptatibus cupiditate facilis
        recusandae corrupti iste perferendis magni vel, nam reiciendis error
        laborum ipsam.`,
      type: "Deluxe",
    },
    {
      name: "Hotel Kohinoor Continental",
      price: "9000/-",
      rating: "excellent",
      src: [
        { url: "pic5.jpg" },
        { url: "pic3.jpg" },
        { url: "pic4.jpeg" },
        { url: "pic5.jpeg" },
      ],
      description: `Lorem Tanish sit amet, consectetur adipisicing elit. In id ab sint
        vitae dolorum aliquam laboriosam voluptatibus cupiditate facilis
        recusandae corrupti iste perferendis magni vel, nam reiciendis error
        laborum ipsam.`,
      type: "Deluxe",
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
              setRender={setRender}
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
