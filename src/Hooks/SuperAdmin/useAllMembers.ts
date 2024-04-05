import { useMutation } from "react-query";
import useAuth from "../useAuth/useAuth";

const useAllMembers = () => {
  const { request } = useAuth();
  const AllMembers = async () => {
    const booking: any = await request.get("/getAllMembers", data);
    return booking.data;
  };

  const {
    mutateAsync: AllMember,
    isLoading,
    isError,
    data,
    isSuccess,
  } = useMutation("/getAllMembers", AllMembers);
  return { AllMember, isLoading, isError, data, isSuccess };
};

export default useAllMembers;
