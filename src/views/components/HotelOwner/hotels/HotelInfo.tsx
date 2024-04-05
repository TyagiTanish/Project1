import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditHotel from "../editHotels/EditHotel";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../editHotels/DeleteModal";
import { enqueueSnackbar } from "notistack";
import EditIcon from "@mui/icons-material/Edit";
import HotelAmenities from "./hotelAmenities/hotelAmenities";
import EditAmenities from "../editHotels/EditAmenities";
import { FormattedMessage } from "react-intl";
import { userLogout } from "../../redux/user/userSlice";
import Loaders from "../../loader/Loaders";

function HotelInfo({ setRender }: any) {
  const [data, setData] = useState<any>([]);
  const [ownerData, setOwnerData] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [handle, setHandle] = useState(0);
  const { request } = useAuth();
  const [open3, setOpen3] = useState(false);
  const [open2, setOpen2] = React.useState(false);
  const user = useSelector((state: any) => state.userReducer.user);
  const [render2, setRender2] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleCloseDelete = () => {
    setOpen2(false);
  };
  const handleClose2 = () => {
    setOpen3(false);
  };
  const handleDelete = async () => {
    if(data?._id){
    
      const result = await request.delete(`/deleteHotel/${data?._id}`);
      setRender((prev: any) => prev + 1);
      setHandle((prev: any) => prev + 1);
    
      if (result.data) {
        navigate("/member/hotels");
      }
      else{
       
       
    
          dispatch(userLogout())
          localStorage.clear();
     
       
      
        enqueueSnackbar("You No longer have any Hotel", {
          variant: "warning",
          autoHideDuration: 2000,
        });
      }
        
     
     
    }
    
  };
  const id = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(id).length === 0) {
      const get = async () => {
        const result = await request.get("/hotels");
        if (result.data.length) {
          setData(result?.data[0]);
        } else {
          // navigate('/')
        }
      };
      get();
    } else {
      const get = async () => {
        const result = await request.get(`/getInfo/${id.id}`);
        setData(result?.data[0]);
      };
      get();
    }
  }, [id, handle, render2]);
  const handleOpenEditBox = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
 
      <Stack marginLeft={-6}>
        <Stack direction={"row"} justifyContent={"space-around"}>
          <Stack margin={6} spacing={5} direction={"row"} width={"90%"}>
            <Box
              component="img"
              sx={{
                width: { lg: "40%", md: 500, sm: 300 },
                height: { xl: 300, lg: 200, md: 200, sm: 150 },
              }}
              alt="The house from the offer."
              src={`http://localhost:8000/${data?.photo}`}
            />
            <Stack direction={"column"} spacing={1}>
              <Typography sx={{ fontSize: { xl: 22, md: 16 } }}>
                {data?.hotelName}
              </Typography>
              <Stack direction={"row"} spacing={1}>
                <PlaceIcon fontSize="small" />
                <Typography fontSize={{ xl: 15, md: 12 }}>
                  {data?.city}-{data?.pinCode},{data?.state},{data?.country}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} spacing={2}>
              <Tooltip
                title={"Delete"}
                style={{ cursor: "pointer" }}
                onClick={handleClickOpen2}
              >
                <DeleteOutlineOutlinedIcon
                  fontSize="medium"
                  sx={{ color: "gray", "&:hover": { color: "black" } }}
                />
              </Tooltip>
              <Tooltip
                title={"Edit"}
                style={{ cursor: "pointer" }}
                onClick={() => handleOpenEditBox()}
              >
                <ModeEditOutlineOutlinedIcon
                  fontSize="medium"
                  sx={{ color: "gray", "&:hover": { color: "black" } }}
                />
              </Tooltip>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction={"column"}
          spacing={2}
          marginBottom={5}
          sx={{ width: { xl: 1000, md: 500, sm: 310 } }}
          marginLeft={6}
        >
          <Typography sx={{ fontSize: { xl: 22, md: 16 }, fontWeight: "bold" }}>
            <FormattedMessage defaultMessage="Description" />
          </Typography>
          <Box
            dangerouslySetInnerHTML={{ __html: data?.discription }}
            sx={{
              flex: 1,
              fontSize: { xl: 15, md: 12 },
              letterSpacing: 1,
              wordBreak: "break-word",
            }}
          />
        </Stack>
        <Stack>
          <Stack
            justifyContent={"space-between"}
            direction={"row"}
            alignItems={"center"}
          >
            <Typography
              sx={{ fontSize: { xl: 22, md: 16 }, fontWeight: "bold", ml: 6 }}
            >
              <FormattedMessage defaultMessage="Hotel Amenities" />
            </Typography>
            <Button onClick={() => setOpen3(true)} sx={{ color: "gray" }}>
              <EditIcon fontSize="small" sx={{ cursor: "pointer" }} />
            </Button>
          </Stack>
          <Box ml={{ xl: -50, lg: -40, md: -25, sm: -15 }}>
            <HotelAmenities amenities={String(data.amenities)} />
          </Box>
        </Stack>

        <Stack direction={"column"} spacing={2} marginLeft={6}>
          <Typography sx={{ fontSize: { xl: 22, md: 16 }, fontWeight: "bold" }}>
            <FormattedMessage defaultMessage="Owner Details" />
          </Typography>
          <Stack direction={"row"} spacing={10}>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: { xl: 18, md: 14 } }}>
                <FormattedMessage defaultMessage="Owner Name -" />
              </Typography>
              <Typography sx={{ fontSize: { xl: 15, md: 12 } }}>
                {user?.name}
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography sx={{ fontSize: { xl: 18, md: 14 } }}>
                <FormattedMessage defaultMessage="Owner Email -" />
              </Typography>
              <Typography sx={{ fontSize: { xl: 15, md: 12 } }}>
                {/* {ownerData?.user?.email} */}
                {user?.email}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        {open && (
          <EditHotel
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
            data={data}
            setData={setData}
            setOwnerData={setOwnerData}
            setRender={setRender}
          />
        )}
        {open2 && (
          <DeleteModal
            open2={open2}
            handleClickOpen2={handleClickOpen2}
            handleCloseDelete={handleCloseDelete}
            handleDelete={handleDelete}
          />
        )}
      </Stack>
      {/* EditAmeneties modal to edit ameneties by user */}
      {open3 && (
        <EditAmenities
          open={open3}
          onClose={handleClose2}
          amenities={data.amenities}
          id={data._id}
          setRender={setRender2}
        />
      )}
    </>
  );
}
export default HotelInfo;
