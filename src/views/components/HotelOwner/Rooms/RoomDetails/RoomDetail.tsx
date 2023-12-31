import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@mui/x-date-pickers";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditRoomDetails from "../EditRoomDetails/EditRoomDetailsDialogBox";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const RoomDetail = ({ room, index, setOpen, setDetailedRoom,Rooms,Detailedroom,setRooms}: any) => {
  const [roomImage, setRoomImage] = useState(0);
const [editBox,setEditBox] = useState(false);
  const HandleOpenModal = () => {
    setOpen(true);
    setDetailedRoom(index);
  };

  const handleOpenEditBox = ()=>{
    setEditBox(true)
  }
  useEffect(()=>{
setRooms(Rooms)
console.log("Rooms");
  },[Rooms])

  return (
    <>
    <Grid item xs={2} sm={6} md={4} xl={4} key={index} >
      <Item>
        <Stack direction={"column"} spacing={{xl:2,md:4}} textAlign={"left"}>
          <Box>
            <Stack direction={"row"} spacing={0.2}  >
              <Box component={'img'}
                width={{xl:'75%',md:'60%',sm:'65%',xs:'50%'}}
                height={181.8}
                src={require(`../../../${room?.src[roomImage]?.url}`)}
              />
              <>
                <Stack direction={"column"} spacing={0.2}>
                  {room?.src?.map((image: any, index: number) => {
                    return (
                      <>
                        {index != roomImage && (
                          <Box component={'img'}
                            width={100}
                            height={60}
                            src={require(`../../../${image?.url}`)}
                            onClick={() => setRoomImage(index)}
                          />
                        )}
                      </>
                    );  
                  })}
                </Stack>
              </>
            </Stack>
          </Box>
          <Stack fontSize={20}>
            <Box>
              Hotel mountain Face By snow
              <br />
              <b>{room?.type}</b>
            </Box>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"right"}
            >
              <Tooltip title={"Delete"}>
                <IconButton style={{ fontSize: "14px",  }}>
                  <DeleteOutlineOutlinedIcon fontSize="medium" sx={{color: "lightgray",'&:hover':{color:'black'}}} />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Edit"}>
                <IconButton style={{ fontSize: "14px"}}  onClick={()=>handleOpenEditBox()}  >
                  <ModeEditOutlineOutlinedIcon fontSize="medium"  sx={{color: "lightgray",'&:hover':{color:'black'}}}  />
                </IconButton>
              </Tooltip>
              <Tooltip title={"View Details"}>
                <IconButton
                  onClick={() => HandleOpenModal()}
                  style={{
                    // width: "30%",
                    alignItems: "left",
                   
                    fontWeight: "bolder",
                    fontSize: "10px",
                  }}
                >
                  <VisibilityIcon sx={{color: "lightgray",'&:hover':{color:'black'}}} />
                </IconButton>
              </Tooltip>
            </Stack>

            <Button
              variant="contained"
              sx={{ background: `linear-gradient(135.46deg,#d11450,#df293a)` }}
            >
              Status
            </Button>
          </Stack>
        </Stack>
      </Item>
    </Grid>
    <EditRoomDetails  editBox={editBox} setEditBox={setEditBox} room={room}  Rooms={Rooms} Detailedroom={Detailedroom} setRooms={setRooms} />
    </>
  );
};

export default RoomDetail;
