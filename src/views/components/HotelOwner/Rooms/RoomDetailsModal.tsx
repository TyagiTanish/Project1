import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { IconButton, List, ListItem, Stack, Typography } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 30,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function RoomDetailModal({
  open,
  setOpen,
  Rooms,
  Detailedroom,
  setDetailedRoom,
}: any) {

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const Images = React.useMemo(() => {
    return Rooms[Detailedroom].src.map((image: any) => ({
      url: require(`../../${image.url}`),
    }));
  }, [Detailedroom]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            border: "none",
            borderRadius: "10px",
          }}
        >
          <Box sx={{ float: "right" }}>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Stack direction={"row"} justifyContent={"space-evenly"} spacing={1}>
            <Box  border={"1px solid"}>
              <Stack spacing={1} padding={"1%"} margin={2}>
                <Box>
                  <SimpleImageSlider
                 
                    width={400}
                    height={350}
                    images={Images}
                    showBullets={true}
                    showNavs={true}
                  />
                </Box>
                <Stack>
                  <b>Room Description</b>
                  <Typography fontSize={"15px"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Expedita tempore provident tempora quisquam fuga, nihil
                    beatae voluptate veniam doloribus cum at omnis fugit qui
                    perferendis laboriosam, reiciendis rerum consequatur neque?
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <Box padding={3}>
              <b>Room Highlights</b>
              <Stack
                direction={"row"}
                spacing={3}
                alignItems={"center"}
                justifyContent={"space-between"}
                margin={2}
              >
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
            </Box>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
