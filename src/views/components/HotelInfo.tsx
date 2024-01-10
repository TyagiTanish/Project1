import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HotelAmenities from "./HotelAmenities";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";

function HotelInfo() {
    const [data,setData]=useState<any>({});
    const {id}=useParams();

    
console.log("id:",id);


    const { request } = useAuth();
   useEffect(()=>{
    if(!id)
    {
      const get=async()=>{
         const result= await request.get('/hotels');
          setData(result.data[0])
          console.log(result)
      }
        get();
   
    }
    else{
      const get=async()=>{
          const result= await request.get(`/getInfo/${id}`);
  
      }
      get();
    }
   
   },[])
   
  return (
    <>
   <Stack direction={'row'}   spacing={10}  boxShadow={2} borderRadius={'20px'} alignItems={'center'}> 
    <img src={`http://localhost:8000/${data?.photo}`} alt="Profile pic " style={{width:250, height:200,borderTopLeftRadius:'20px', borderBottomLeftRadius:'20x'}} />
    <Typography sx={{fontWeight:'bold' , fontSize:25}}>{data?.hotelName}</Typography>
    </Stack>
      <Stack spacing={4}>
        {" "}
        <Box
          sx={{ fontWeight: "bold", fontSize: 22 }}
          justifyItems={"space-evenly"}
        >
         Location Info:
        </Box>
        <Stack direction={'row'} justifyContent={'space-evenly'}>
          {" "}
          <Stack spacing={1} direction={"column"} >
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              City:
            </Typography>
            <Typography>
              {data?.city}
            </Typography>
          </Stack>
          <Stack spacing={1} direction={"column"} >
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                State:
            </Typography>
            <Typography>
              {data?.state}
              </Typography>
          </Stack>
        
        </Stack>
        <Stack direction={'row'} justifyContent={'space-evenly'}>
          {" "}
          <Stack spacing={1} direction={"column"} >
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                Country
            </Typography>
            <Typography>
              {data?.country}
              </Typography>
          </Stack>
          <Stack spacing={1} direction={"column"} >
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                Pin Code
            </Typography>
            <Typography>
              {data?.pinCode}
              </Typography>
          </Stack>
        
        </Stack>
      </Stack>
    </>
  );
}

export default HotelInfo;
