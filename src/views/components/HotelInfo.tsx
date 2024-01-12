import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditHotel from "./EditHotel";
function HotelInfo() {
  const [data, setData] = useState<any>([]);
  const [ownerData, setOwnerData] = useState<any>([]);
  const [open,setOpen]=useState(false);
  const id = useParams();
  const { request } = useAuth();
  useEffect(() => {
    if (Object.keys(id).length === 0) {
      const get = async () => {
        const result = await request.get("/hotels");
        setData(result?.data[1]?.hotelInfo);

        setOwnerData(result?.data[0]);
      };
      get();
    } else {
      const get = async () => {
        const result = await request.get(`/getInfo/${id.id}`);
        setData(result?.data[1]?.hotelInfo);
      };
      get();
    }
  }, [id]);
  const handleOpenEditBox=()=>{
    setOpen(true);
  }
  console.log(ownerData);
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
            src={`http://localhost:8000/${data[0]?.photo}`}
          />
          <Stack direction={"column"} spacing={1}>
            <Typography sx={{ fontSize: 22 }}>{data[0]?.hotelName}</Typography>
            <Stack direction={"row"} spacing={1}>
              <PlaceIcon fontSize="small" />
              <Typography fontSize={15}>
                {data[0]?.city}-{data[0]?.pinCode},{data[0]?.state},
                {data[0]?.country}
              </Typography>
            </Stack>
          </Stack>
        
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <Tooltip title={"Delete"} style={{cursor:'pointer'}}>
              {/* <IconButton style={{ fontSize: "14px" }}> */}
                <DeleteOutlineOutlinedIcon
                  fontSize="medium"
                  sx={{ color: "lightgray", "&:hover": { color: "black" } }}
                />
              {/* </IconButton> */}
            </Tooltip>

            <Tooltip title={"Edit"} style={{cursor:'pointer'}} onClick={()=>handleOpenEditBox()}>
              {/* <IconButton style={{ fontSize: "14px" }}> */}
                <ModeEditOutlineOutlinedIcon
                  fontSize="medium"
                  sx={{ color: "lightgray", "&:hover": { color: "black" } }}
                />
              {/* </IconButton> */}
            </Tooltip>
          </Stack>
          </Stack>
    
      </Stack>
      <Stack direction={"column"} spacing={2} marginBottom={5}>
        <Typography sx={{ fontSize: 22, fontWeight: "bold" }}>
          Description
        </Typography>
        {/* <Typography sx={{fontSize:16}}>{data[0]?.discription}</Typography> */}
        <Box
          dangerouslySetInnerHTML={{ __html: data[0]?.discription }}
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
              {ownerData?.user?.name}
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography>Owner Email -</Typography>
            <Typography sx={{ fontSize: 14 }}>
              {ownerData?.user?.email}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      {/* <Box>  </Box> */}
      {open && <EditHotel open={open} setOpen={setOpen} handleClose={handleClose}  data={data} ownerData={ownerData}/>}
    </>
  );
}

export default HotelInfo;
