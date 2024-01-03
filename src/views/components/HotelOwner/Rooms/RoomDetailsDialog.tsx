import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SimpleImageSlider from "react-simple-image-slider";

export default function RoomDetailBox({
  open,
  setOpen,
  Rooms,
  Detailedroom,
  setDetailedRoom,
}: any) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [roomImage, setRoomImage] = React.useState(0);
  const roomIndex = React.useMemo(() => {
    setDetailedRoom(Detailedroom);
  }, [Detailedroom]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="lg"
    >
   
      <DialogContent>
      <IconButton onClick={() => setOpen(false)} sx={{float:'right',mt:'-2%',mr:'-2%'}}>
            <CloseIcon />
          </IconButton>
        <Stack direction={"row"} spacing={4} >
          <Stack spacing={1} padding={1} margin={2}  width={'50%'} borderRight={'1px solid lightgray'} >
            <Stack direction={"row"} spacing={0.2}>
              <img
                width={400}
                height={350}
                src={require(`../../${Rooms[Detailedroom]?.src[roomImage]?.url}`)}
              />
              <>
                <Stack direction={"column"} spacing={0.2}>
                  {Rooms[Detailedroom]?.src?.map(
                    (image: any, index: number) => {
                      return (
                        <>
                          {index > 0 && (
                            <img
                              width={120}
                              height={116}
                              src={require(`../../${image?.url}`)}
                              onClick={() => setRoomImage(index)}
                            />
                          )}
                        </>
                      );
                    }
                  )}
                </Stack>
              </>
            </Stack>
            <Stack spacing={2}>
                <Box sx={{fontWeight:'bolder',fontSize:'25px'}}>Hotel Mountain Face </Box>
              <Typography style={{width:'40%',color:'gray', fontWeight:'bolder' }}>Room Description</Typography>
              <hr color="lightgray" />
              <Typography width={"100%"}  >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita tempore provident tempora quisquam fuga, nihil beatae
                voluptate veniam doloribus cum at omnis fugit qui perferendis
                laboriosam, reiciendis rerum consequatur neque?
              </Typography>
            </Stack>
          </Stack>
        <Stack padding={2} spacing={2} >
            <Typography sx={{fontWeight:'bolder',color:'gray'}} >Room Highlights</Typography>
            <hr color="lightgray" />
            <br/>
            <Stack direction={"row"} justifyContent={"space-between"} spacing={5}  alignItems={'center'}>
              <Stack spacing={1}>
                <li>Ac</li>
                <li>42” LED Smart TV</li>
                <li>Coffee and tea maker</li>
                <li>Hair dryer</li>
                <li>Bath amenities</li>
                <li>Bath robes and slippers</li>
                <li>Minibar upon request</li>
              </Stack>
              <Stack spacing={1}>
                <li>24-hour room service</li>
                <li>Complimentary water bottles</li>
                <li>In-room safe</li>
                <li>Iron and ironing board</li>
                <li>Complimentary high-speed Wi-Fi</li>
                <li>Daily newspaper upon request</li>
                <li>Extra bed upon request</li>
              </Stack>
            </Stack>
                <Stack>
                    <Box>
                        
                    </Box>
                </Stack>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
