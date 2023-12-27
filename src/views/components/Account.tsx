import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../../App.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useForm } from 'react-hook-form';
import Password from './Password';
import Update from "./Update"
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from './redux/user/userSlice';
import Logo from './Logo';
function Account() {

  const dispatch = useDispatch();


  const navigate = useNavigate()
  const handleLogOut=()=>{
    localStorage.removeItem("authToken");
    dispatch(userLogout());
        navigate('/');
  }
  return (
    <>
    <IconButton href="/" sx={{ ml:{md:0.5},width:"200px"}}>
    <Logo />
  </IconButton>
   <Box sx={{ ml:{md:25,xl:72}, mt:{md:10,xl:15},    fontFamily: "Proxima Vara,Arial,Helvetica,Sans,Sans-Serif",display:"flex",flexDirection:"row", }}>
    <Box sx={{display:"flex",flexDirection:"column",mt:1.5,fontSize:{md:14,xl:18}}}> 
    <Link style={{textDecoration:"none",color:"#D4164B"}} to="/" ><ArrowBackIosIcon sx={{fontSize:{md:12,xl:14}}}/>Back</Link>
    
    <Typography className='account' sx={{mt:2,    backgroundColor: "rgba(243,244,245)",padding:1,width:140,cursor:"pointer",fontSize:{xl:14,md:14}}} >Account Settings</Typography>
    <Box sx={{mt:2 ,paddingTop:2,fontSize:{xl:18,md:13},borderTop:"1px solid black",width:140,cursor:"pointer"}} onClick={ handleLogOut}>Log Out</Box> 
    
    </Box>
    <Box sx={{display:"flex", flexDirection:"column"}}> 

   <Typography sx={{fontSize:{xl:30,md:23}, fontWeight:"bold"}}>Account Settings</Typography><Typography sx={{width:300,mt:2,fontSize:{xl:18,md:16}}}>Personal Information</Typography> 
   
   
   <Update/>

   <Typography sx={{fontSize:{xl:18,md:16}, mt:5}}>Change Your Password</Typography>
          <Password />
        </Box>
      </Box>
    </>
  );
}

export default Account;
