import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth/useAuth';
import { useSelector } from 'react-redux';
function Update() {



    const {register,handleSubmit}=useForm();

    const user = useSelector((state: any) => state.userReducer.user);
    console.log(user);
    
    const { request } = useAuth();
    const onSubmit1=async (data:any)=>{
    
  
      
     const result= await request.put(`/username/${user._id}`,{
            Name:data.name
        });
   
        console.log(result);
        
      }
    
   

  return (
    <form onSubmit={handleSubmit(onSubmit1)}>
      
      <Typography sx={{fontWeight:"bold", mt:2, fontSize:15}}>First Name:</Typography>  
      
      <TextField id="outlined-basic"  variant="outlined"  sx={{width:500,mt:1}} {...register("name")}/>
      
   
   
   <Box><Button variant="contained" sx={{width:250,mt:2,textTransform:"none", fontWeight:"bold",fontSize:15,backgroundImage: "linear-gradient(270deg,#D11450,#EE2A24)",}} type="submit">Update Personal Information</Button>
  
   </Box>
   </form>
  )
}

export default Update
