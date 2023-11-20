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

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '70%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
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