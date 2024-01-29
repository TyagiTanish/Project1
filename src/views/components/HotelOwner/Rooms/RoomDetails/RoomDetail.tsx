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
import React, { useEffect, useMemo, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { Link, useParams } from "react-router-dom";
import { ArrowRightIcon } from "@mui/x-date-pickers";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditRoomDetails from "../EditRoomDetails/EditRoomDetailsDialogBox";
import OnDeleteDialogBox from "../EditRoomDetails/DeleteRoomDialogBox";
import useAuth from "../../../../../Hooks/useAuth/useAuth";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const RoomDetail = ({
  room,
  index,
  setOpen,
  setDetailedRoom,
  setRender,
}: any) => {
  const [roomImage, setRoomImage] = useState(0);
  const [editBox, setEditBox] = useState(false);
  const [deleteOpen, setdeleteOpen] = useState(false);
  const [roomId, setRoomId] = useState(room?._id);
  const [photos, setPhotos] = useState(room?.photos);
  const { request } = useAuth();
  const HandleOpenModal = () => {
    setOpen(true);
    setDetailedRoom(index);
  };
  const id = useParams();
  const Availablity = async (e: any) => {
    if (Object.keys(id).length === 0) {
      await request.put("/availability", {
        isAvailable: e.target.checked,
        roomId: roomId,
      });
    } else {
      await request.put(`/availability/${id.id}`, {
        isAvailable: e.target.checked,
        roomId: roomId,
      });
    }
    setRender((prev:any)=>prev+1)
  };
  const handleOpenEditBox = () => {
    setEditBox(true);
  };

  const handleDeleteRoom = () => {
    setdeleteOpen(true);
  };

useMemo(()=>{
  setRoomId(room?._id)
  console.log(roomId)
},[room,roomId])


console.log(room)


  return (
    <>
      <Grid item xs={2} sm={6} md={4} xl={4} key={index}>
        <Item>
          <Stack
            direction={"column"}
            spacing={{ xl: 2, md: 4 }}
            textAlign={"left"}
          >
            <Box>
              <Stack direction={"row"} spacing={0.2}>
                <Box
                  component={"img"}
                  width={{ xl: "75%", md: "60%", sm: "65%", xs: "50%" }}
                  height={181.8}
                  src={`http://localhost:8000/${room?.photos[roomImage]?.path}`}
                />
                <>
                  <Stack direction={"column"} spacing={0.2}>
                    {room?.photos?.map((image: any, index: number) => {
                      return (
                        <>
                          {index != roomImage && (
                            <Box
                              component={"img"}
                              width={100}
                              height={60}
                              src={`http://localhost:8000/${image?.path}`}
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
                <b>{room?.roomType}</b>
              </Box>
              <Stack
                alignItems={"center"}
                direction={"row"}
                justifyContent={"space-between"}
              >
                  <Switch checked={room?.isAvailable==='true'} onChange={(e) => Availablity(e)} />
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"right"}
                >
                  <Tooltip title={"Delete"}>
                    <IconButton
                      style={{ fontSize: "14px" }}
                      onClick={handleDeleteRoom}
                    >
                      <DeleteOutlineOutlinedIcon
                        fontSize="medium"
                        sx={{
                          color: "lightgray",
                          "&:hover": { color: "black" },
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={"Edit"}>
                    <IconButton
                      style={{ fontSize: "14px" }}
                      onClick={() => handleOpenEditBox()}
                    >
                      <ModeEditOutlineOutlinedIcon
                        fontSize="medium"
                        sx={{
                          color: "lightgray",
                          "&:hover": { color: "black" },
                        }}
                      />
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
                      <VisibilityIcon
                        sx={{
                          color: "lightgray",
                          "&:hover": { color: "black" },
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Stack>
              {room?.isAvailable == "true" ? (
                <Button
                  variant="contained"
                  // sx={{
                  //   background: `linear-gradient(135.46deg,#d11450,#df293a)`,
                  // }}
                  color="success"
                >
                  Available
                </Button>
              ) : (
                <Button
                  variant="contained"
                  // sx={{
                  //   background: `linear-gradient(135.46deg,#d11450,#df293a)`,
                  // }}
                  color="error"
                >
                  Not Available
                </Button>
              )}
            </Stack>
          </Stack>
        </Item>
      </Grid>
      <EditRoomDetails
        editBox={editBox}
        setEditBox={setEditBox}
        room={room}
        setRender={setRender}
      />
      <OnDeleteDialogBox
        deleteOpen={deleteOpen}
        setdeleteOpen={setdeleteOpen}
        roomId={roomId}
        setRender={setRender}
        photos={photos}
      />
    </>
  );
};

export default RoomDetail;
