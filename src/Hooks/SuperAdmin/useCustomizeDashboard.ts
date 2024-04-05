import { useDispatch } from "react-redux";
import { useMutation, useQueries, useQuery } from "react-query";
import useAuth from "../useAuth/useAuth";
import { userLogin } from "../../views/components/redux/user/userSlice";

const useCustomizeDashboard = (item: any) => {
  const { request } = useAuth();
  const dispatch = useDispatch();
  const customizeDashboard = async () => {
    try {
      const arr = item?.map((value: any) => {
        return { id: value?.id, title: value?.title };
      });
      const CustomDashboard: any = await request.post(
        "/customizeDashboard",
        arr
      );
      return CustomDashboard.data;
    } catch (error) {
      return error;
    }
  };

  const {
    mutateAsync: customize,
    isLoading,
    isError,
    data,
    isSuccess,
  } = useMutation("/customizeDashboard", customizeDashboard, {
    onSuccess: () => {
      fetchUserData();
    },
  });

  const fetchUserData = async () => {
    const authToken = localStorage.getItem("authToken");
    try {
      //   if(!authToken)
      //   {
      //  return  navigate('/login');
      //   }
      if (authToken) {
        const userData = (await request.get(`/getUserData`)).data;
        dispatch(userLogin(userData));
      }
    } catch (error) {
      localStorage.removeItem("authToken");
    }
  };

  return { customize, isLoading, isError, data, isSuccess };
};

export default useCustomizeDashboard;
