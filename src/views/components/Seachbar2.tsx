import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DateRangePickers from "./DatePicker";
import MyLocationIcon from '@mui/icons-material/MyLocation';

import "../../App.css"


function Seachbar2(props:any) {


    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
      );
      const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
      const [rooms, setRooms] = React.useState<any>([{ Room: 1, guest: 1 }]);
      const [guests, setGuests] = useState(0);
      const [render,setRender] = React.useState(0)
     


      const handleInputChange = (event:any) => {
        const { value } = event.target;
        props.setSearchTerm(value);
        props.filterData(value);
      };
    
    
    useEffect(()=>{
        var result=0;
        rooms.forEach((element:any) => {
            result = result + +element.guest
        })
        setGuests(result)
        setRooms(rooms);
    },[render,rooms])
    
    
 



  return (
    <Box sx={{marginLeft:"-120px"}}>
    <Typography sx={{ mt: 2, display: "flex", alignContent: "center" }}>
    <Box className="nearby" sx={{marginTop:"-120px" , marginLeft:"-60px"}}>
     <Box className='nearby2 ripple' sx={{mt:"30px",ml:"70px"}} >
       <Typography className="nearby3" sx={{mr:0}} 
    ><MyLocationIcon/></Typography>
       <Typography>Near me</Typography>
     </Box>
    </Box>
     <TextField
       sx={{
         backgroundColor: "white",
         position:"relative",
         width: "30%",
         ml: "20%",
         height: "20%",
         mt: 2,
         borderRadius: 3,
       }}
       placeholder="Search by city,hote, or neighborhood"
       value={props.searchTerm}
       onChange={handleInputChange}
     
     />
    
     <Typography sx={{ position: "relative" }}>
       <DateRangePickers />
     </Typography>
     <TextField
       id="outlined-basic"
       variant="outlined"
       sx={{
         width: "15%",
         bgcolor: "white",
         ml: 0,
         height: "20%",
         mt: 2,
         fontWeight: "bolder",
     
       }}
       value={`${rooms.length} Room , ${guests} guest`}
       onClick={(event: any) => handleClick(event)}
     />
{/* 
     <Button
       variant="contained"
       sx={{
         bgcolor: "green",
         "&:hover": { bgcolor: "#1ab64f" },
         color: "white",
         fontWeight: "bolder",
         height: "55px",
         width: "10%",
       
         mt: 2,
       }}
     >
       Search
     </Button> */}
   </Typography>
   </Box>
  )
}

export default Seachbar2
