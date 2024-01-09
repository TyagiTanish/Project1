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
function SearchHotels() {
  const [searchTerm, setSearchTerm] = useState("");
  const [hotels,setHotels] = useState([])
  const [filteredData, setFilteredData] = useState(hotels);

  const filterData = (searchTerm: any) => {
    const filteredData = hotels.filter((item: any) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  console.log(filteredData);

  const handleInputChange = (event: any) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
  };

  return (
    <Box sx={{ border: "1px solid lightgray", borderRadius: 1, width: "30%" }}>
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
        {filteredData.map((item: any) => (
          <Stack
            direction={"row"}
            spacing={4}
            width={"70%"}
            alignItems={"center"}
            sx={{ cursor: "pointer" }}
            // onClick={() => {
            //   props.setToGet(item);
            // }}
          >
            {" "}
            <Avatar sx={{ width: 32, height: 32 }}>
              {item.name[0].toUpperCase()}
            </Avatar>
            <Typography sx={{ fontSize: 16 }}>{item?.name}</Typography>
          </Stack>
        ))}{" "}
      </Stack>
    </Box>
  );
}

export default SearchHotels;
