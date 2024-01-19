import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import io from "socket.io-client";
import useAuth from "../../../../../Hooks/useAuth/useAuth";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";


const socket = io("http://localhost:8000", {transports: ['websocket', 'polling', 'flashsocket']});
function createData(
  BookingDate: string,
  RoomType: string,
  CustomerName: string,
  NoOfRooms: string
) {
  return { BookingDate, RoomType, CustomerName, NoOfRooms };
}

const rows: any = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
];


export default function Bookings() {
 
  const { request } = useAuth();
  const [data,setData]=React.useState<any>([])
  React.useEffect(()=>{
    socket.on("recieved",(data)=>{
      if(data)
      {
            const get=async()=>{
            const data=await  request.get('/bookingDetails');
            console.log(data.data)
            setData(data.data)
            }
           get();
      }
  
    })
},[socket])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bolder" }}>Customer Name-</TableCell>
            <TableCell align="right" style={{ fontWeight: "bolder" }}>
          Customer  Email-
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bolder" }}>
           Customer Phone-
            </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item: any) => (
            <TableRow
              key={item.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th">{item.fullName}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.phone}</TableCell>
              <TableCell align="right"><Button  variant="contained" sx={{textTransform:'capitalize',backgroundColor:'green'}}>Accept</Button></TableCell>
              <TableCell align="right"><Button  variant="contained" sx={{textTransform:'capitalize',    backgroundImage: "linear-gradient(270deg,#d11450,#ee2a24)",}}>Reject</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
