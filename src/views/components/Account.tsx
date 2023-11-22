import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../../App.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useForm } from 'react-hook-form';
import Password from './Password';
import Update from "./Update"
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from './redux/user/userSlice';
function Account() {

  const dispatch = useDispatch();


  const navigate = useNavigate()
  const handleLogOut=()=>{
    localStorage.removeItem("authToken");
    dispatch(userLogout());
        navigate('/');
  }
  return (
   <Box sx={{  ml:60, mr:"auto", mt:20,    fontFamily: "Proxima Vara,Arial,Helvetica,Sans,Sans-Serif",display:"flex",flexDirection:"row"}}>
    <Box sx={{display:"flex",flexDirection:"column",width:200,mt:1.5}}> 
    <Link style={{textDecoration:"none",color:"#D4164B"}} to="/" ><ArrowBackIosIcon sx={{fontSize:12}}/>Back</Link>
    
    <Typography className='account' sx={{mt:2,    backgroundColor: "rgba(243,244,245)",padding:1,width:140,cursor:"pointer",fontSize:15}} >Account Settings</Typography>
    <Box sx={{mt:2 ,paddingTop:2,fontSize:16,borderTop:"1px solid black",width:140,cursor:"pointer"}} onClick={ handleLogOut}>Log Out</Box> 
    
    </Box>
    <Box sx={{display:"flex", flexDirection:"column"}}> 

   <Typography sx={{fontSize:30, fontWeight:"bold"}}>Account Settings</Typography><Typography sx={{width:300,mt:2}}>Personal Information</Typography> 
   
   
   <Update/>

   <Typography sx={{mt:5}}>Change Your Password</Typography>

   <Password/>

   </Box></Box>
   
 
  )
}

export default Account
