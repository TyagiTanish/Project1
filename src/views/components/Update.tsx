import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth/useAuth';
import { useSelector } from 'react-redux';

import {useDispatch} from 'react-redux'
import { userLogin } from './redux/user/userSlice';
import { enqueueSnackbar } from 'notistack';
function Update() {



  const dispatch = useDispatch();

    const {register,handleSubmit}=useForm();

    const user = useSelector((state: any) => state.userReducer.user);
    console.log(user);
    
    const { request } = useAuth();
    const onSubmit1=async (data:any)=>{
    

      
     const result= await request.put(`/username/${user._id}`,{
            name:data.name
        });
     
      if(result.data){
        enqueueSnackbar("Username updated successfully", {
            variant:"success",
          autoHideDuration: 1000,
         
          
       })
      }
      
       const data2=await request.get('/getUserData');
       dispatch(userLogin(data2.data));
        
      }
    
   

  return (
    <form onSubmit={handleSubmit(onSubmit1)}>
      
      <Typography sx={{fontWeight:"bold", mt:2, fontSize:15}}>First Name:</Typography>  
      
      <TextField id="outlined-basic"  variant="outlined"  sx={{width:500,mt:1}} {...register("name")} defaultValue={user?.name}/>
      
   
   
   <Box><Button variant="contained" sx={{width:250,mt:2,textTransform:"none", fontWeight:"bold",fontSize:15,backgroundImage: "linear-gradient(270deg,#D11450,#EE2A24)",}} type="submit">Update Personal Information</Button>
  
   </Box>
   </form>
  )
}

export default Update
