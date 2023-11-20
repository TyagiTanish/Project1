import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }:any) => <div>{text}</div>;

export default function SimpleMap(){




  const defaultProps = {
    center: {
      lat: 30.733315,
      lng: 76.779419
    },
    zoom: 11
  };

const handleChange=(value:any)=>{
    console.log(value);
    
}
  return (
    <div style={{ height: '100vh',minWidth:'40vw' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChange={(value)=>handleChange(value)}
      >
        <AnyReactComponent
          lat={30.733315}
          lng={76.779419}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}