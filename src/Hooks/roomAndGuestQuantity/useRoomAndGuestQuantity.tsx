import React, { useEffect, useRef } from "react";

const UseRoomAndGuestQuantity = () => {
  const data: any = localStorage.getItem("Rooms&Guests");
  const parsedData = JSON.parse(data);
  const TotalRooms = useRef(0);
  const TotalGuests = useRef(0);
  useEffect(() => {
    var result = 0;
    var totalRooms = 0;
    parsedData.forEach((element: any) => {
      result = result + +element.guest;
      totalRooms = totalRooms + 1;
    });
    TotalRooms.current = totalRooms;
    TotalGuests.current = result;
  });

  return { TotalRooms, TotalGuests };
};

export default UseRoomAndGuestQuantity;
