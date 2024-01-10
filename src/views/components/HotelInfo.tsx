import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';
import { Box, Stack, Typography } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
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
 
    //   <Stack direction={'row'} spacing={2}>  <Box
    //   component="img"
    //   sx={{
    //     width: { sm: "150px ", lg: "300px", md: "140px" },
    //     height: { lg: "200px", sm: "15vh", md: "20vh" },
    //     // borderTopLeftRadius: "20px",
    //     // borderBottomLeftRadius: "20px",
    //   }}
    //   alt="The house from the offer."
    //   src={`http://localhost:8000/${data[0]?.photo}`}
    // />
    // <Stack spacing={10} direction={'column'} >
    //   <Typography sx={{ fontSize:30}}>{data[0]?.hotelName}</Typography>
    //   <Typography></Typography>
    // </Stack>
    // </Stack>
  
  <Stack alignItems={"center"}>
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
        <Typography sx={{ fontSize: 22 }}>
          Hotel Mountain face by snow
        </Typography>
        <Stack direction={"row"} spacing={1}>
          <PlaceIcon fontSize="small" />
          <Typography fontSize={14}>Juhu Tara Road Mumbai</Typography>
        </Stack>
       
       
      </Stack>
    </Stack>
  </Stack>
     
  
  )
}

export default HotelInfo
