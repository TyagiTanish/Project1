import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Checkbox, Dialog, DialogTitle, FormControlLabel, Grid, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import PlaceIcon from "@mui/icons-material/Place";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import PoolIcon from "@mui/icons-material/Pool";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import WineBarIcon from "@mui/icons-material/WineBar";
import GroupsIcon from "@mui/icons-material/Groups";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import required modules
import "../../../components/HotelOwner/hotels/hotelAmenities/styles2.css";
import { FreeMode, Pagination } from "swiper/modules";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props: any) {
  const handleClose = () => onClose(false);
  const { onClose, open, modalHotel } = props;
  console.log(modalHotel);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));


  const amenitie = [
    { id: "parking", label: "Parking", icon: <LocalParkingIcon />, index: 0 },
    { id: "wifi", label: "Wifi", icon: <NetworkWifiIcon />, index: 1 },
    { id: "pool", label: "Pool", icon: <PoolIcon />, index: 2 },
    {
      id: "roomService",
      label: "Room Service",
      icon: <RoomServiceIcon />,
      index: 3,
    },
    { id: "gym", label: "Gym", icon: <FitnessCenterIcon />, index: 4 },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <DryCleaningIcon />,
      index: 5,
    },
    { id: "bar", label: "Bar", icon: <WineBarIcon />, index: 6 },
    { id: "meeting", label: "Meeting", icon: <GroupsIcon />, index: "7" },
    { id: "parking", label: "Parking", icon: <LocalParkingIcon />, index: 8 },
    { id: "wifi", label: "Wifi", icon: <NetworkWifiIcon />, index: 9 },
    { id: "pool", label: "Pool", icon: <PoolIcon />, index: 10 },
    {
      id: "roomService",
      label: "Room Service",
      icon: <RoomServiceIcon />,
      index: 11,
    },
    { id: "gym", label: "Gym", icon: <FitnessCenterIcon />, index: 12 },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <DryCleaningIcon />,
      index: 13,
    },
    { id: "bar", label: "Bar", icon: <WineBarIcon />, index: 14 },
    { id: "meeting", label: "Meeting", icon: <GroupsIcon />, index: 15 },
  ];

  const ShowAmenities = amenitie.filter((item: any, index: any) =>
  modalHotel?.amenities?.includes(String(item.index))
  );

  return (
    // <div>
    //   <Modal
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <Box sx={style}>
    //       <Button
    //         sx={{ float: "right", mt: -2, color: "black" }}
    //         onClick={handleClose}
    //       >
    //         <CloseIcon fontSize="medium" />
    //       </Button>

    //       <Stack direction={"row"} spacing={10} mb={3}>
    //         <img
    //           src={`http://localhost:8000/${modalHotel?.photo}`}
    //           width={250}
    //         />

    //         <Box>
    //           <Typography sx={{ fontWeight: 800, fontSize: "25px" }}>
    //             {modalHotel?.hotelName}
    //           </Typography>
    //           <Stack direction={"row"} mt={3}>
    //             <PlaceIcon />
    //             <Typography>
    //               {`${modalHotel?.city}-${modalHotel?.pinCode}, ${modalHotel?.state}, ${modalHotel?.country}`}
    //             </Typography>
    //           </Stack>
    //         </Box>
    //       </Stack>
    //       <Divider sx={{ borderBottomWidth: 2, mb: 3 }} />
    //       <Typography sx={{ fontWeight: 800, fontSize: "large" }}>
    //         <FormattedMessage defaultMessage="Hotel's Discription" />
    //       </Typography>
    //       <Box
    //         sx={{
    //           pl: { sm: 3, lg: 4 },
    //           pr: { sm: 3, lg: 4 },
    //           pb: { sm: 3, lg: 4 },
    //           textAlign: "justify",
    //           fontSize: { sm: 10, lg: 17, md: 14 },
    //           lineHeight: { sm: 1.3, lg: 2, md: 1.5 },
    //           overflow: "hidden",
    //         }}
    //       >
    //         <Box
    //           dangerouslySetInnerHTML={{ __html: modalHotel?.discription }}
    //           sx={{ flex: 1 }}
    //         />
    //       </Box>
    //     </Box>
    //   </Modal>
    // </div>

    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth={"lg"}
      aria-labelledby="responsive-dialog-title"
      fullScreen={fullScreen}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {" "}
        <DialogTitle>Hotel Details</DialogTitle>{" "}
        <Box sx={{ cursor: "pointer" }} onClick={handleClose} mr={2}>
          <CloseIcon fontSize="small" />
        </Box>
      </Stack>
      <Divider />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack>
          <Stack direction={"column"} spacing={1} mb={3} padding={2}>
            <img
              src={`http://localhost:8000/${modalHotel?.photo}`}
              width={400}
            />

            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "22px", mt: 2 }}>
                {modalHotel?.hotelName}
              </Typography>
              <Stack direction={"row"} mt={1}>
                <PlaceIcon fontSize="small" />
                <Typography width={300}>
                  {`${modalHotel?.city}-${modalHotel?.pinCode}, ${modalHotel?.state}, ${modalHotel?.country}`}
                </Typography>
              </Stack>
            </Box>
          </Stack>
          {/* <Divider /> */}
          <Stack direction={"column"} sx={{ pl: 2,pb:2,pr:2 }} spacing={1}>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Hotel Description
            </Typography>
            <Box
              dangerouslySetInnerHTML={{ __html: modalHotel?.discription }}
              sx={{
                flex: 1,
                letterSpacing: "1px",
                wordWrap: "break-word",
                width: 600,
              }}
            />
          </Stack>
          <Divider />
          <Stack width={300} padding={2}>
            <Typography
              width={"100%"}
              sx={{ fontSize: 18, fontWeight: "bold" }}
            >
          {modalHotel?.rooms?.length ? <Typography width={200} color={'green'}>{`No. of rooms added - ${modalHotel?.rooms.length} `}</Typography> : <Typography color={'red'}>No Room is added</Typography>}  
            </Typography>
          
          </Stack>
        </Stack>
        <hr color="lightgray" />
        <Stack width={500}>
          <Stack spacing={2} width={300} padding={2}>
            <Typography width={"100%"} sx={{ fontSize: 20 }}>
              Categories Available
            </Typography>
            {modalHotel?.categories?.map((i: any, category: any) => {
              return (
                <Typography>
                  {category + 1}
                  {")"} {i}
                </Typography>
              );
            })}
          </Stack>
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
          
            
          >
            {ShowAmenities.map((item) => (
              <SwiperSlide  >
                    <Stack alignItems={"center"} fontSize={'small'} >
                      {item?.icon}
                      {item?.label}
                    </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Stack>
    </Dialog>
  );
}
