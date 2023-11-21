import { Box } from '@mui/material';
import "../../App.css"
import Loader from "react-js-loader";
function Loaders() {

const color="#EE2A24"
  return (
    <Box sx={{zIndex:1,position:"absolute",paddingTop:60 }} className='blur'>
      <center>  <Loader type="bubble-scale" bgColor={color} color={color} size={50} className='loader'/></center>
    

      </Box>
  )
}

export default Loaders
