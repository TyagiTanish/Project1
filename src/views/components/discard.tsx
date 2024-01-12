import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HotelAmenities from "./HotelAmenities";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";

function HotelInfo() {
  const [data, setData] = useState<any>([]);
  const id = useParams();
  const { request } = useAuth();
  useEffect(() => {
    if (Object.keys(id).length === 0) {
      const get = async () => {
        const result = await request.get("/hotels");
        setData(result?.data[1]?.hotelInfo);
       
        
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

  console.log("data is ............", data);
  // console.log(data[0].photo);

  return (
    <>
      <Stack
        direction={"row"}
        spacing={6}
        boxShadow={2}
        borderRadius={"20px"}
        // alignItems={"center"}
      >
     
        <Box
          component="img"
          sx={{
            width: { sm: "150px ", lg: "220px", md: "140px" },
            height: { lg: "200px", sm: "15vh", md: "20vh" },
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
          alt="The house from the offer."
          src={`http://localhost:8000/${data[0]?.photo}`}
        />
        <Stack direction={'column'} padding={2} spacing={2} width={'80%'}>
           <Typography sx={{ fontWeight: "bold", fontSize: 25 }}>
          {data[0]?.hotelName}
        </Typography>
        {/* <Typography width={'100%'} sx={{fontSize:15}}>
          {data[0]?.discription}
        </Typography> */}
        <Box dangerouslySetInnerHTML={{ __html:data[0]?.discription }} sx={{ flex: 1 }} />
        </Stack>
     
      </Stack>
      <Stack spacing={4}>
        {" "}
        <Box
          sx={{ fontWeight: "bold", fontSize: 22 }}
          justifyItems={"space-evenly"}
        >
          Location Info:
        </Box>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          {" "}
          <Stack spacing={1} direction={"column"}>
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              City:
            </Typography>
            <Typography>{data[0]?.city}</Typography>
          </Stack>
          <Stack spacing={1} direction={"column"}>
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              State:
            </Typography>
            <Typography>{data[0]?.state}</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          {" "}
          <Stack spacing={1} direction={"column"}>
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              Country
            </Typography>
            <Typography>{data[0]?.country}</Typography>
          </Stack>
          <Stack spacing={1} direction={"column"}>
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              Pin Code
            </Typography>
            <Typography>{data[0]?.pinCode}</Typography>
          </Stack>
        </Stack>
      </Stack>
      {/* <Stack  spacing={2}>
        {" "}
        <Box
          sx={{ fontWeight: "bold", fontSize: 22 }}
          justifyItems={"space-evenly"}
        >
            Owner Details:
        </Box>
        <Stack></Stack>
        <Stack direction={'row'} justifyContent={'space-evenly'}>
          {" "}
          <Stack spacing={1} direction={"column"} >
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                Owner Name:
            </Typography>
            <Typography>
             
            </Typography>
          </Stack>
          <Stack spacing={1} direction={"column"} >
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              Owner Email:
            </Typography>
            <Typography>
      
              </Typography>
          </Stack>
        
        </Stack> */
      /* </Stack> */}
    </>
  );
}

export default HotelInfo;
