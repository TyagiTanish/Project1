import {
  Avatar,
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useNavigate } from "react-router-dom";

function SearchHotels() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { request } = useAuth();
  // const filterData = (searchTerm: any) => {
  //   const filteredData = hotels.filter((item: any) =>
  //     item.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredData(filteredData);
  // };
  const navigate=useNavigate();
  console.log(filteredData);

  const handleInputChange = (event: any) => {
    const { value } = event.target;
    setSearchTerm(value);
    // filterData(value);
  };

useEffect(()=>{
  const get=(async()=>{
    const result= await request.get('/searchHotels');
    
    // console.log(result?.data[1]);
   
    console.log(result.data);
    setFilteredData(result.data)
    
  })
  get();
  ;
},[])
console.log(filteredData);
const handleClick=(data:any)=>{
  navigate(`/member/hotels/${data}`) 
  // console.log(data);
  
  
}
  return (
    <Box sx={{ border: "1px solid lightgray", borderRadius: 1 , width:{xl:'30%', md:'5%'},overflowX:'hidden', overflowY:'scroll'}} >
      <Stack alignItems={"left"} padding={2} paddingLeft={4}>
        <TextField
          variant="outlined"
          placeholder="Search Hotels"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: {
              borderRadius: "50",
            },
          }}
          inputProps={{
            style: {
              height: "10px",
            },
          }}
          sx={{ width: "80%", borderRadius: 30 }}
          value={searchTerm}
          onChange={handleInputChange}
        ></TextField>
      </Stack>
      <Stack
        direction={"column"}
        spacing={3}
        alignItems={"left"}
        paddingLeft={"5%"}
        paddingBottom={"1%"}
      >
        {filteredData?.map((item: any,i:any) => (
          <Stack
            direction={"row"}
            spacing={4}
            width={"70%"}
            alignItems={"center"}
            sx={{ cursor: "pointer" }}
            onClick={() => {
             handleClick(item?._id);
          
            }}
          >
            {" "}
            <Avatar sx={{ width: 32, height: 32 }}>
              {item?.hotelName[0]?.toUpperCase()}
            </Avatar>
            <Typography sx={{ fontSize: 16 }}>
              {item?.hotelName}
            </Typography>
          </Stack>
        ))}{" "}
      </Stack>
    </Box>
  );
}

export default SearchHotels;
