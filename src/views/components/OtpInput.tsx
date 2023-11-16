import React from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'

const OtpInput = ({otp,setOtp}:any) => {
 

  const handleChange = (newValue:any) => {
    setOtp(newValue)
  }

  return (
    <MuiOtpInput value={otp} onChange={handleChange} />
  )
}
 export default OtpInput