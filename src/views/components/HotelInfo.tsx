import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import { Box, Stack, Tooltip, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditHotel from "./EditHotel";
import {  useSelector } from "react-redux";
import DeleteModal from "./DeleteModal";
import { enqueueSnackbar } from "notistack";
function HotelInfo({setRender}:any) {
  const [data, setData] = useState<any>([]);
  const [ownerData, setOwnerData] = useState<any>([]);
  const [open,setOpen]=useState(false);
  const id = useParams();
  const { request } = useAuth();
  const [open2, setOpen2] = React.useState(false);
  const user = useSelector((state: any) => state.userReducer.user);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleCloseDelete = () => {
    setOpen2(false);
  };
  const handleDelete=async()=>{
    setRender((prev:any)=>prev+1)
    const result = await request.delete(`/deleteHotel/${data?._id}`);
    if(!result.data){
        navigate('/');
        enqueueSnackbar("You No longer have any Hotel", {
          variant: "warning",
          autoHideDuration: 2000,
        });
    }
  }
  const navigate= useNavigate();
  useEffect(() => {
 
    if (Object.keys(id).length === 0) {
      const get = async () => {
        const result = await request.get("/hotels");
       if(result.data.length){
        setData(result?.data[0])
       }
       else{
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
  }, [id,handleDelete]);
  const handleOpenEditBox=()=>{
    setOpen(true);
  }
const handleClose=()=>{
  setOpen(false)
}
  return (
    <>
      <Stack alignItems={"center"} marginLeft={-6}>
        <Stack direction={'row'} justifyContent={'space-around'}>
         <Stack margin={6} spacing={5} direction={"row"} width={"90%"}>
          <Box
            component="img"
            sx={{
              width: "30%",
              height: "auto",
            }}
            alt="The house from the offer."
            src={`http://localhost:8000/${data?.photo}`}
          />
          <Stack direction={"column"} spacing={1}>
            <Typography sx={{ fontSize: 22 }}>
              {data?.hotelName}
              </Typography>
            <Stack direction={"row"} spacing={1}>
              <PlaceIcon fontSize="small" />
              <Typography fontSize={15}>
                {data?.city}-{data?.pinCode},{data?.state},
                {data?.country}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <Tooltip title={"Delete"} style={{cursor:'pointer'}} onClick={handleClickOpen2}>
                <DeleteOutlineOutlinedIcon
                  fontSize="medium"
                  sx={{ color: "lightgray", "&:hover": { color: "black" } }}
                />
            </Tooltip>
            <Tooltip title={"Edit"} style={{cursor:'pointer'}} onClick={()=>handleOpenEditBox()}>
                <ModeEditOutlineOutlinedIcon
                  fontSize="medium"
                  sx={{ color: "lightgray", "&:hover": { color: "black" } }}
                />
            </Tooltip>
          </Stack>
          </Stack>
      </Stack>
      <Stack direction={"column"} spacing={2} marginBottom={5} width={1000}>
        <Typography sx={{ fontSize: 22, fontWeight: "bold" }}>
          Description
        </Typography>
        {/* <Typography sx={{fontSize:16}}>{data?.discription}</Typography> */}
        <Box
          dangerouslySetInnerHTML={{ __html: data?.discription }}
          sx={{ flex: 1, fontSize: 15, letterSpacing: 1 }}
        />
      </Stack>
      <Stack direction={"column"} spacing={2}>
        <Typography sx={{ fontSize: 22, fontWeight: "bold" }}>
          Owner Details
        </Typography>
        <Stack direction={"row"} spacing={10}>
          <Stack spacing={1}>
            <Typography>Owner Name -</Typography>
            <Typography sx={{ fontSize: 14 }}>
             {user?.name}
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography>Owner Email -</Typography>
            <Typography sx={{ fontSize: 14 }}>
              {/* {ownerData?.user?.email} */}
              {user?.email}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      {/* <Box>  </Box> */}
      {open && <EditHotel open={open} setOpen={setOpen} handleClose={handleClose}  data={data}  setData={setData} setOwnerData={setOwnerData} setRender={setRender}/>}
      {open2 && <DeleteModal open2={open2} handleClickOpen2={handleClickOpen2} handleCloseDelete={handleCloseDelete}  handleDelete={handleDelete}/>}
    </>
  );
}
export default HotelInfo;