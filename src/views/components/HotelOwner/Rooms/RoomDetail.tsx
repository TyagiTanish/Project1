import { Box, Button, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@mui/x-date-pickers";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const RoomDetail = ({ room, index, setOpen, setDetailedRoom }: any) => {
  const [roomImage, setRoomImage] = useState(0);

  const HandleOpenModal = () => {
    setOpen(true);
    setDetailedRoom(index);
  };  

  return (
    <Grid item xs={1} sm={7} md={6} lg={6} xl={2} key={index}>
      <Item>
        <Stack direction={"column"} spacing={2} textAlign={"left"}>
          <Box>
            <Stack direction={"row"} spacing={0.2}>
              <img
                width={280}
                height={181.8}
                src={require(`../../${room?.src[roomImage]?.url}`)}
              />
              <>
                <Stack direction={"column"} spacing={0.2}>
                  {room?.src?.map((image: any, index: number) => {
                   return <>
                      {index > 0 && (
                        <img
                          width={100}
                          height={60}
                          src={require(`../../${image?.url}`)}
                          onClick={() => setRoomImage(index)}
                        />
                      )}
                    </>
                  })}
                </Stack>
              </>
            </Stack>
          </Box>
          <Stack fontSize={20}  >
            <Box>Hotel mountain Face By snow<br/><b>Type</b></Box>
            <IconButton
              onClick={() => HandleOpenModal()}
              style={{
                width:'40%',
                alignItems:'left',
                color: '#df293a',
                fontWeight: "bolder",
                fontSize:'10px',
                float:'left'
              }}      
            >
              Room Details <ArrowRightIcon/>
            </IconButton>
            <Button variant="contained" sx={{background: `linear-gradient(135.46deg,#d11450,#df293a)`}} >Status</Button>
          </Stack>
        </Stack>
      </Item>
    </Grid>
  );
};

export default RoomDetail;
