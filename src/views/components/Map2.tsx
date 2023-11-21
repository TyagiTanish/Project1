import React from "react";
import GoogleMapReact from "google-map-react";
import { IconButton } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;
export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 30.733315,
      lng: 76.779419,
    },
    zoom: 11,
  };

  const handleChange = (value: any) => {
    console.log(value);
  };
  return (
    <div style={{ height: "200px", minWidth: "48vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChange={(value) => handleChange(value)}
      >
        <AnyReactComponent
          lat={30.733315}
          lng={76.779419}
          text={
            <IconButton sx={{ color: "red" }}>
              <LocationOnIcon />
            </IconButton>
          }
        />
      </GoogleMapReact>
    </div>
  );
}

// import React from "react";
// import GoogleMapReact from "google-map-react";
// import { useDispatch, useSelector } from "react-redux";
// import { userLocation } from "./redux/user/userSlice";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { IconButton } from "@mui/material";

// const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

// export default function SimpleMap() {
//   const location = useSelector((state: any) => state.userReducer.location);
//   const dispatch = useDispatch();
//   const defaultProps = {
//     center: {
//       lat: location?.latitude,
//       lng: location?.longitude,
//     },
//     zoom: 16,
//   };
//   const handleChange = (value: any) => {
//     console.log(value.center);

//     const data: any = {
//       latitude: value.center.lat,
//       longitude: value.center.lng,
//     };
//     dispatch(userLocation(data));
//   };
//   return (
//     <div style={{ height: "200px", minWidth: "48vw" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//         onChange={(value) => handleChange(value)}
//         center={defaultProps.center}
//         zoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={location?.latitude || 30.733315}
//           lng={location?.longitude || 76.779419}
//           text={
//             <IconButton sx={{ color: "red" }}>
//               <LocationOnIcon />
//             </IconButton>
//           }
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }
