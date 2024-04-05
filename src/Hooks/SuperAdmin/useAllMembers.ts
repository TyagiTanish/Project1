import { useMutation } from "react-query";
import useAuth from "../useAuth/useAuth";

const useAllMembers = () => {
  const { request } = useAuth();
  const AllMembers = async () => {
    try {
      const booking: any = await request.get("/getAllMembers");
      return booking.data;
    } catch (error) {
      return error;
    }
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
