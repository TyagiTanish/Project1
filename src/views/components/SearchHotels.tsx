import {
  Avatar,
  Box,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { object } from "yup";
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';
import AddHotelDialogBox from "./HotelOwner/hotels/AddHotel/AddHotelDialogBox";



function SearchHotels({
  filteredData,
  handleClick,
  handleInputChange,
  searchTerm,
  data,
}: any) {
  const { id } = useParams();

  const [selected, setSelected] = useState<any>(data);
  const [open, setOpen] = React.useState(false);
  const selectedID = useMemo(() => {
    if (id) {
      return id;
    } else {
      const Id = filteredData?.[0]?._id;
      return Id;
    }
  }, [filteredData, id]);




  return (
    <>
    <Box
      sx={{
        border: "1px solid lightgray",
        borderRadius: 1,
        width: { xl: "30%", md: "30%", sm: "30%" },
        overflowX: "hidden",
        overflowY: "auto",
        height:'90vh'
      }}
    >
      <Stack alignItems={"center"} padding={2} paddingLeft={4} direction={"row"} spacing={3} >
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
          onChange={(e)=>{handleInputChange(e.target.value)}}
        ></TextField>
        <Stack component={'div'} onClick={()=>setOpen(true)}  ><Tooltip title="Add hotel" sx={{cursor:'pointer'}}>
          <DomainAddOutlinedIcon  fontSize="large"  />  
        </Tooltip>
        </Stack>
      </Stack>
      <Stack
        direction={"column"}
        spacing={3}
        padding={1}
        alignItems={"center"}
        // paddingLeft={"5%"}
        // paddingBottom={"1%"}
      >
        {filteredData?.map((item: any, i: any) => (
          <Box width={"100%"} alignItems={'center'}>
            <Stack
              direction={"row"}
              spacing={4}
              sx={{ borderRadius:20 ,cursor: "pointer", p: 1 }}
              width={"100%"}
              alignItems={"center"}
              bgcolor={selectedID === item._id ? "lightGray" : "white"}
              onClick={() => {
                handleClick(item?._id);
                setSelected(item?._id);
              }}
            >
              {" "}
              <Avatar sx={{ width: 32, height: 32 }}>
                {item?.hotelName[0]?.toUpperCase()}
              </Avatar>
              <Typography sx={{ fontSize: 16 }}>{item?.hotelName}</Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
    <AddHotelDialogBox open={open} setOpen={setOpen}  />
    </>
  );
}
export default SearchHotels;
