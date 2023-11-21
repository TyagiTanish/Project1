import { Box } from '@mui/material';
import "../../App.css"
import Loader from "react-js-loader";
function Loaders() {

const color="gray"
  return (
    <Box sx={{zIndex:1, position:"absolute", left:"150px"}} className='blur'>
      <Loader type="bubble-scale" bgColor={color} color={color} size={50} className='loader'/>

      </Box>
  )
}

export default Loaders
