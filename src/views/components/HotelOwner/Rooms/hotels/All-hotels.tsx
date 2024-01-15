import React, { useCallback, useEffect, useState } from 'react'

import { Stack } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import useAuth from '../../../../../Hooks/useAuth/useAuth';
import SearchHotels from '../../../SearchHotels';
import AboutHotel from '../../../AboutHotel';

const Allhotels = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [render,setRender] = useState(1)
  const { request } = useAuth();
  // const filterData = (searchTerm: any) => {
  //   const filteredData = hotels.filter((item: any) =>
  //     item.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredData(filteredData);
  // };
  const navigate=useNavigate();
const handleInputChange = useCallback((event: any)=>{
  const { value } = event.target;
  setSearchTerm(value);
},[])
  // const handleInputChange = (event: any) => {
  //   const { value } = event.target;
  //   setSearchTerm(value);
  //   // filterData(value);
  // };
useEffect(()=>{
  const get=(async()=>{
    const result= await request.get('/searchHotels');
  
    setFilteredData(result.data)
  })
  get();
  console.log(render);
},[render])
const handleClick = useCallback((data:any)=>{
  navigate(`/member/hotels/${data}`)
},[navigate])
// const handleClick=(data:any)=>{
//   navigate(`/member/hotels/${data}`)
// }
  return (
    <Stack direction={'row'} spacing={1}  >
        <SearchHotels filteredData={filteredData} handleClick={handleClick} handleInputChange={handleInputChange} seacrhTerm={searchTerm}/>
        <AboutHotel setRender={setRender}/>
    </Stack>
  )
}
export default Allhotels