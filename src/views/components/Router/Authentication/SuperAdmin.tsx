import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface props {
  children: JSX.Element;
}

const SuperAdminRoute = ({ children }: props) => {
  const user = useSelector((state: any) => state.userReducer.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user?.role === "customer") {
      navigate("/");
    } else {
      if (user && user?.role === "member") {
        navigate("/member");
      }
    }
  }, [user]);

  return children;
};

export default SuperAdminRoute;
