import useAuth from "../../useAuth/useAuth";
import { useMutation } from 'react-query';
const useUserLogin = () => {

  const { request } = useAuth();
  const loginUser = async ({ userId, loggedInUserId }) => {
    const data = {
      userId: userId,
      loggedInUserId: loggedInUserId
    }
    const auth = await request.post("/auth", data);
    return auth.data
  };
  const { mutateAsync: UserLogin, isLoading, isError, data } = useMutation('/auth', loginUser);

  return { UserLogin, isLoading, isError, data };
};
export default useUserLogin;
