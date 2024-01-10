import React from 'react'
import SearchHotels from '../../../SearchHotels'
import AboutHotel from '../../../AboutHotel'
import { Stack } from '@mui/material'

const Allhotels = () => {
  return (
    <Stack direction={'row'} spacing={1}  >
        <SearchHotels/>  
        <AboutHotel/>
    </Stack>
  )
}

export default Allhotels
