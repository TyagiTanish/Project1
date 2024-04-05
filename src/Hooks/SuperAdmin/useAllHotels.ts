import { useMutation } from "react-query";
import useAuth from "../useAuth/useAuth";

const useAllHotels = () => {
  const { request } = useAuth();
  const AllHotels = async () => {
    const booking: any = await request.get("/getHotels", data);
    return booking.data;
  };

  const {
    mutateAsync: AllHotel,
    isLoading,
    isError,
    data,
    isSuccess,
  } = useMutation("/getHotels", AllHotels);
  return { AllHotel, isLoading, isError, data, isSuccess };
};

export default useAllHotels;
