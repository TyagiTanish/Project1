import React, { useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";

const UseRoomAndGuestQuantity = () => {
  // const data: any = localStorage.getItem("Rooms&Guests");
  // const parsedData = JSON.parse(data);
  const data = useSelector((state: any) => state?.userReducer?.RoomsAndGuests);
  const TotalRooms = useRef(0);
  const TotalGuests = useRef(0);
  useMemo(() => {
    var result = 0;
    var totalRooms = 0;
    data?.forEach((element: any) => {
      result = result + +element.guest;
      totalRooms = totalRooms + 1;
    });
    TotalRooms.current = totalRooms;
    TotalGuests.current = result;
  }, [data]);

  return { TotalRooms, TotalGuests };
};

export default UseRoomAndGuestQuantity;
