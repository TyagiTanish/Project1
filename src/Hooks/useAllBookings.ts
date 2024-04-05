import React from "react";
import { useMutation } from "react-query";
import useAuth from "./useAuth/useAuth";

const useAllBookings = () => {
  const { request } = useAuth();
  const bookings = async () => {
    const booking: any = await request.get("/allBookings", data);
    return booking.data;
  };

  const {
    mutateAsync: AllBooking,
    isLoading,
    isError,
    data,
    isSuccess,
  } = useMutation("/allBookings", bookings);
  return { AllBooking, isLoading, isError, data, isSuccess };
};

export default useAllBookings;
