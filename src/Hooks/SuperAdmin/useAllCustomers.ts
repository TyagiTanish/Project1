import { useMutation } from "react-query";
import useAuth from "../useAuth/useAuth";

const useAllCustomers = () => {
  const { request } = useAuth();
  const AllCustomers = async () => {
    const customers: any = await request.get("/getAllUsers", data);
    return customers?.data;
  };

  const {
    mutateAsync: AllCustomer,
    isLoading,
    isError,
    data,
    isSuccess,
  } = useMutation("/getAllUsers", AllCustomers);
  return { AllCustomer, isLoading, isError, data, isSuccess };
};

export default useAllCustomers;
