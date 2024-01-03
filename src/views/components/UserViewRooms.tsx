import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

function UserViewRooms() {
    const [data] = useState([
        {
          name: "king Bed Room",
          price: "8000/-",
          memberBedPrice:'₹12,150',
          bedAndBreakfastPrice:'₹13,900',
          description:'Enjoy the view of the Pawan Hans helipad from this spacious room where quirky décor and colourful designs echo the spirit of Mumbai. This modern space offers one king bed, a sitting area with sofa and coffee table, and a bathroom with walk-in shower and vanity.',
          src: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/f0/59/4e8aed8865804976696d186756580f2101ce75f5e850a95d5764d7a22376.jpeg",
        },
        {
          name: "Delux Rooom",
          price: "2000/-",
          description:'Enjoy the view of the Pawan Hans helipad from this spacious room where quirky décor and colourful designs echo the spirit of Mumbai. This modern space offers one king bed, a sitting area with sofa and coffee table, and a bathroom with walk-in shower and vanity.',
          src: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/ca/e5/8f98a5b561be94024ec63202de7a2b879ee977038e22977faea3318350ea.jpeg',
          memberBedPrice:'₹12,150',
          bedAndBreakfastPrice:'₹13,900',
        },
        {
          name: "Super Delux",
          price: "3000/-",
          memberBedPrice:'₹12,150',
          description:'Enjoy the view of the Pawan Hans helipad from this spacious room where quirky décor and colourful designs echo the spirit of Mumbai. This modern space offers one king bed, a sitting area with sofa and coffee table, and a bathroom with walk-in shower and vanity.',
          bedAndBreakfastPrice:'₹13,900',
          src: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partner-images/40/2d/6eb3dd7250cf1be30505ca5c14f0e6f995774ce250ae57a0c809666c4a27.jpeg",
        },
       
      ]);
  return (
    <Stack spacing={40} direction={"row"} marginLeft={'7%'} marginTop={'4%'}>
            {data?.map((item)=>(
                <Stack sx={{width:"18%",}} boxShadow={4} direction={"column"} spacing={1} padding={1}>      
                 <Box
                component="img"
                sx={{
                  width: "100%",
                 height:"100%",
                backgroundSize:"cover"
                }}
                alt="The house from the offer."
                src={item.src}
              />
            <Typography sx={{textAlign:'center',fontWeight:"bold",fontSize:18}}>{item.name}</Typography>
            <Typography sx={{fontSize:14}}>{item.description.slice(0,90)}...</Typography>
           <Stack direction={'row'} spacing={5} justifyContent={'space-between'}> <Typography sx={{fontSize:15}}>Member Bed and Breakfast</Typography><Typography sx={{fontWeight:"bold"}}>{item.memberBedPrice}</Typography></Stack>
           <Stack direction={'row'} spacing={5} justifyContent={'space-between'}> <Typography sx={{fontSize:15}}>Bed and Breakfast</Typography><Typography sx={{fontWeight:"bold"}}>{item.bedAndBreakfastPrice}</Typography></Stack>
           <Button sx={{textTransform:'capitalize'  ,backgroundImage: "linear-gradient(270deg,#D11450,#EE2A24)",color:'white',fontWeight:'bold'}}>Select & Book</Button>
              </Stack>
                   
                
                      
                         
                       
                         
                     
            ))}
 </Stack>
  );
}

export default UserViewRooms;
