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
import { Button, Stack, Typography } from "@mui/material";
import DialogBox from "./DialogBox";


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
  const [open, setOpen] = React.useState(false);
 const [handle,sethandle]=React.useState("");
  const { request } = useAuth();                   
  const [data,setData]=React.useState<any>([])
  React.useEffect(()=>{
    socket.on("recieved",(data)=>{
      if(data)
      {
            const get=async()=>{
            const data=await  request.get('/bookingDetails');
            console.log(data.data)
            setData(data.data);
            
            }
           get();
      }
      
    })
},[socket])
const handleClickOpen = (data:any) => {
  setOpen(true);
  console.log(data)
};

const handleClose = (value: string) => {
  setOpen(false);

};

const handleClick=async(id:any)=>{
  const data=await request.delete(`/bookingDelete/${id}`);
  setData(data.data)
  console.log(id)
}
React.useMemo(async()=>{
   const data= await request.get('/bookingDetails');
   
   setData(data.data)
},[]);


  return (
    <>
    <Stack direction={'column'} spacing={4}>



    <Typography sx={{fontWeight:"bold",fontSize:30}}>Requests-</Typography>
    {data.length===0 ? <Typography sx={{width:400,color:'red'}}>No Bookings till now*</Typography> 
    :
    <TableContainer component={Paper} sx={{overflowY:"scroll",height:750,width:'auto'}}>
      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bolder" }}>Customer Name-</TableCell>
            <TableCell align="left" style={{ fontWeight: "bolder" }}>
          Customer  Email-
            </TableCell>
            <TableCell align="left" style={{ fontWeight: "bolder" }}>
           Customer Phone-
            </TableCell>
           
            <TableCell align="left" style={{ fontWeight: "bolder" }}>
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
             
              <TableCell align="left">{item.fullName}</TableCell>
              <TableCell align="left">{item.email}</TableCell>
              <TableCell align="left">{item.phone}</TableCell>
            
              {/* <TableCell align="left"></TableCell> */}
              <TableCell align="left">
                <Button  variant="contained" sx={{textTransform:'capitalize', backgroundImage: "linear-gradient(270deg,green,green)",marginRight:5}} onClick={()=>{handleClick(item._id)}}>Accept</Button>
                <Button  variant="contained" sx={{textTransform:'capitalize',    backgroundImage: "linear-gradient(270deg,#d11450,#ee2a24)",}} onClick={()=>{handleClick(item._id)}}>Reject</Button>
                <Button  variant="contained" sx={{textTransform:'capitalize',ml:5}} onClick={()=>{handleClickOpen(item)}}>View</Button>
                </TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}
    
         </Stack>
       {open && <DialogBox

        open={open}
        onClose={handleClose}
      />}
    </>
   
  );
}
