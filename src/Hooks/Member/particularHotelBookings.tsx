import React from "react";
import { useMutation } from "react-query";
import useAuth from "../useAuth/useAuth";

const useParticularHotelBookings = (id: any) => {
  const { request } = useAuth();
  const bookings = async () => {
    const booking: any = await request.get(
      `/particularHotelBookings/${id}`,
      data
    );
    return booking.data;
  };

  const {
    mutateAsync: AllBooking,
    isLoading,
    isError,
    data,
  } = useMutation(bookings);
  return { AllBooking, isLoading, isError, data };
};

export default useParticularHotelBookings;
