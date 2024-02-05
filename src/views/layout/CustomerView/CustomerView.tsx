import { Box, Stack } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import OyoLogo from '../../../assets/OyoLogo'
import Logo from '../../components/Logo'
import Seachbar2 from '../../components/Seachbar2'
import ProfileIcons from './ProfileIcons'
import { Outlet, useParams } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth/useAuth'
import { useSelector } from 'react-redux'

const CustomerView = () => {
const URL = useParams()
const [url,setUrl] = useState<any>(URL)

useEffect(()=>{
  console.log(URL);
})


  return (
    <Stack><Stack  direction={'row'}  boxShadow={3} justifyContent={'space-between'} alignItems={'center'}     >
    <Box>
        <Logo/>
    </Box>
    <Box >
  {window.location.href === 'http://localhost:3000/' ? <></>  : <Seachbar2/>}
      </Box>
    <Box><ProfileIcons/></Box>
</Stack>
<Outlet/>
</Stack>
 
  )
}

export default CustomerView
