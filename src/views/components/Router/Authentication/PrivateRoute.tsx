import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

interface props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: props) => {
  const user = useSelector((state: any) => state.userReducer.user);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(location?.state?.from || "/");
    }
  }, [user]);

  return children;
};

export default PrivateRoute;
