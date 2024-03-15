import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RoomDetail from "./RoomDetail";
import RoomDetailModal from "./RoomDetailsModal";
import RoomDetailBox from "./RoomDetailsDialog";
import { useParams } from "react-router-dom";
import useAuth from "../../../../../Hooks/useAuth/useAuth";
import AddRooms from "../../../OtherComponents/Rooms";
import { Stack } from "@mui/material";

export default function AllRooms() {
  const [render, setRender] = React.useState(0);
  const { request } = useAuth();
  const id = useParams();
  const [open, setOpen] = React.useState(false);
  const [Detailedroom, setDetailedRoom] = React.useState<number>(0);
  const [Rooms, setRooms] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [showCategories, setShowCategories] = React.useState<any>([]);
  const get = async () => {
    if (Object.keys(id).length === 0) {
      const result = await request.get("/hotels");
      setRooms(result?.data[0]?.rooms);
      const rooms = result?.data[0]?.rooms;
      setCategories(result?.data[0]?.categories);
      // filtering categories for showing while adding a room

      if (rooms?.length > 0) {
        const data = result?.data[0]?.categories?.filter(
          (category: any) =>
            !rooms?.map((room: any) => room.roomType).includes(category)
        );
        setShowCategories(data);
      } else {
        setShowCategories(result?.data[0]?.categories);
      }
    } else {
      const result = await request.get(`/getInfo/${id.id}`);
      setRooms(result?.data[0]?.rooms);
      const rooms = result?.data[0]?.rooms;
      setCategories(result?.data[0]?.categories);
      // filtering categories for showing while adding a room

      if (rooms?.length > 0) {
        const data = result?.data[0]?.categories?.filter(
          (category: any) =>
            !rooms?.map((room: any) => room.roomType).includes(category)
        );
        setShowCategories(data);
      } else {
        setShowCategories(result?.data[0]?.categories);
      }
    }
  };

  React.useEffect(() => {
    get();
  }, [render, id]);

  return (
    <>
      <AddRooms setRender={setRender} showCategories={showCategories} />
      <Box sx={{ flexGrow: 1 }} padding={9}>
        <Grid
          container
          // spacing={{ xs: 2, md: 2 }}
          gap={2}
          columns={{ xs: 1, sm: 5, md: 4, xl: 12 }}
        >
          {Rooms?.map((room, index) => (
            <RoomDetail
              room={room}
              index={index}
              setOpen={setOpen}
              setDetailedRoom={setDetailedRoom}
              setRender={setRender}
              showCategories={categories}
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
