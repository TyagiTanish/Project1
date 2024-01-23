import React from 'react'
import './loader.css'
const Loader = () => {
  return (
    <div className="payment-loader">
    <div className="pad">
     <div className="chip"></div>
    <div className="line line1"></div>
    <div className="line line2"></div>
  </div>
  <div className="loader-text">
    Please wait while payment is loading
  </div>
</div>
  )
}

export default Loader
