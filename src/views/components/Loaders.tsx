import { Box } from '@mui/material';
import "../../App.css"
import Loader from "react-js-loader";
function Loaders() {

const color="#EE2A24"
  return (
    <Box sx={{zIndex:1,position:"absolute",paddingTop:{xl:60,md:50,sm:60},width:{xl:'1853px',md:'1200px',sm:'768px'},ml:{xl:'-1300px',md:'-700px'},height:{xl:'100vh',md:'100vh',sm:'100vw'},mt:{xl:'-70%',sm:'-29%',md:'-70%'}}} className='blur'>
      <center>  <Loader type="bubble-scale" bgColor={color} color={color} size={50} className='loader'/></center>
      </Box>
  )
}

export default Loaders
