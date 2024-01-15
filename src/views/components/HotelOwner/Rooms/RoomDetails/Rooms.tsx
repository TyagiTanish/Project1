import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RoomDetail from "./RoomDetail";
import RoomDetailModal from "./RoomDetailsModal";
import RoomDetailBox from "./RoomDetailsDialog";
import { useParams } from "react-router-dom";
import useAuth from "../../../../../Hooks/useAuth/useAuth";
import AddRooms from "../../../Rooms";


export default function AllRooms() {
  const [render, setRender] = React.useState(0);
  const {request} = useAuth()
  const id = useParams()
  const [open, setOpen] = React.useState(false);
  const [Detailedroom, setDetailedRoom] = React.useState<number>(0);
  const [Rooms, setRooms] = React.useState([]);
 
    const get = async () =>{
      if(Object.keys(id).length === 0){
      const result = await request.get('/hotels');
      setRooms(result?.data[1].hotelInfo[0].rooms);
    }else{
      const result = await request.get(`/getInfo/${id.id}`)
      setRooms(result?.data[1].hotelInfo[0].rooms)
  }}



  React.useEffect(() => {
    setRooms(Rooms);
   
  }, [Rooms,render]);

React.useEffect(()=>{
    get()
},[id])

  return (
    <>
    <AddRooms/>
      <Box sx={{ flexGrow: 1 }} padding={10}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 10, md: 8, xl: 8 }}
        >
          
          {Rooms?.map((room, index) => (
            <RoomDetail
              room={room}
              index={index}
              setOpen={setOpen}
              setDetailedRoom={setDetailedRoom}
              Rooms={Rooms}
              Detailedroom={Detailedroom}
              setRooms={setRooms}
              setRender={setRender}
              render={render}
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
