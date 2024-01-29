import { Stack } from "@mui/material";
import React, { useMemo, useState } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector } from "react-redux";

import { ChildProcess } from "child_process";
import io from "socket.io-client";
import DialogBox from "./HotelOwner/Rooms/Booking/DialogBox";
import DialogBox2 from "./DialogBox2";
/**
 * To show all the accepted Bookings by the Hotel Owner. Markdown is *AcceptedBooking*.
 */
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const handleClick = (item: any) => {
  console.log(item?.hotelId?.photo);
};
function AcceptedBookings() {
  const [data, setData] = useState([]);
  const { request } = useAuth();
  const [open, setOpen] = React.useState(false);
  useMemo(async () => {
    const data = await request.get("/acceptedBookings");
    setData(data.data);
  }, []);
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const handleClickOpen = (data:any) => {
    setOpen(true);
    console.log(data);
    
  };
  const handleClose = (value: string) => {
    setOpen(false);
  
  };
  return (

    // <Stack>
    //   {data?.map((item: any) => (
    //     <Card sx={{ minWidth: 275,m:1 }} variant="outlined" >
    //       <CardContent>
    //         <Stack

    //            direction={'row'}
    //            justifyContent={'space-between'}
    //         >
    //          <Typography   sx={{ fontSize: 20, fontWeight: "bold", mb: 4 }}>Booking History</Typography>
    //          <Box sx={{ minWidth: 120 }}>
    //   <FormControl fullWidth>

    //     <Select

    //       size="small"
    //       onChange={handleChange}
    //     >
    //       <MenuItem value={10}>Checked Out</MenuItem>
    //       <MenuItem value={20}>Checked In</MenuItem>
    //       {/* <MenuItem value={30}>Thirty</MenuItem> */}
    //     </Select>
    //   </FormControl>
    // </Box>
    //         </Stack>
    //         <Stack spacing={45} direction={"row"}>
    //           <Stack direction={"row"} spacing={3}>
    //             <Box
    //               component="img"
    //               sx={{
    //                 width: { sm: "150px ", lg: "150px", md: "140px" },
    //                 height: { lg: "140px", sm: "10vh", md: "20vh" },
    //                 // borderTopLeftRadius: "20px",
    //                 // borderBottomLeftRadius: "20px",
    //                 borderRadius: 2,
    //               }}
    //               alt="The house from the offer."
    //               src={`http://localhost:8000/${item?.hotelId?.photo}`}
    //             />
    //             <Stack direction={"column"} spacing={1}>
    //               <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
    //                 {item?.hotelId?.hotelName}
    //               </Typography>
    //               <Stack direction={"row"} spacing={1}>
    //                 <LocationOnIcon fontSize="small" />
    //                 <Typography sx={{fontSize:15}}>
    //                   {item?.hotelId?.city}-{item?.hotelId?.pinCode},{item?.hotelId?.state},
    //                   {item?.hotelId?.country}
    //                 </Typography>
    //               </Stack>
    //               {/* <Typography sx={{fontSize:15}}>{item.hotelId.}</Typography> */}{" "}
    //               <Typography sx={{ fontSize: 15 }}>
    //                Room Type- {item?.hotelId?.rooms?.[0]?.roomType}
    //               </Typography>
    //               <Typography sx={{ fontSize: 15 }}>
    //                 {item?.totalGuests} Guest
    //               </Typography>
    //             </Stack>
    //           </Stack>
    //           <Stack>
    //             <Typography sx={{fontWeight:"bold"}}>Id:</Typography>
    //             <Typography sx={{fontWeight:"bold"}}>{item?._id.slice(14)}</Typography>
    //           </Stack>
    //           <Stack direction={"column"} spacing={0}>
    //             <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
    //              Booked by - {item?.fullName}
    //             </Typography>
    //             <Typography sx={{ fontSize: 15 }}>
    //               Pending Amount:0
    //             </Typography>
    //             <Typography sx={{ fontSize: 15 }}>
    //               {/* Paid Amount:{item?.} */}
    //             </Typography>
    //             <Typography sx={{ fontSize: 15 }}>
    //               {}
    //             </Typography>
    //             <Typography sx={{ color: "red", fontWeight: "bold",fontSize:15 }}>
    //               View Details
    //             </Typography>
    //           </Stack>
    //         </Stack>
    //       </CardContent>
    //     </Card>
    //   ))}
    // </Stack>
    <>
    
    <TableContainer
      component={Paper}
      sx={{ overflowY: "scroll", height: 750, width: "auto" }}
    >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bolder" ,fontSize:18}} align="center"> Hotel Name</TableCell>
            <TableCell align="center" style={{ fontWeight: "bolder" ,fontSize:18}}>
              Room Type
            </TableCell>
            <TableCell align="center" style={{ fontWeight: "bolder",fontSize:18 }}>
              Booked By
            </TableCell>
            <TableCell align="center" style={{ fontWeight: "bolder" ,fontSize:18}}>
              Address
            </TableCell>
            <TableCell align="center" style={{ fontWeight: "bolder",fontSize:18 }}>
             Status
            </TableCell>
            <TableCell align="center" style={{ fontWeight: "bolder",fontSize:18 }}>
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item: any) => (
            <TableRow
              key={item.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" sx={{fontSize:15}}>   {item?.hotelId?.hotelName}</TableCell>
              <TableCell align="center" sx={{fontSize:15}}>{item?.hotelId?.rooms?.[0]?.roomType}</TableCell>
              <TableCell align="center" sx={{fontSize:15}}>{item.fullName}</TableCell>

              <TableCell align="center" sx={{fontSize:15}}>  {item?.hotelId?.city}-{item?.hotelId?.pinCode},{item?.hotelId?.state},
                   {item?.hotelId?.country}</TableCell>
              <TableCell align="center" sx={{width:200}}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <Select size="small" onChange={handleChange} >
                      <MenuItem value={10}>Checked Out</MenuItem>
                      <MenuItem value={20}>Checked In</MenuItem>
                      {/* <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                  </FormControl>
                </Box>
              </TableCell>
              <TableCell align="center" sx={{fontSize:15}}><Button variant="contained" sx={{textTransform:"none"}} onClick={()=>{handleClickOpen(item)}}>View</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {open && <DialogBox2
        
        open={open}
        onClose={handleClose}
      />}
    </>
   



  );
}

export default AcceptedBookings;
