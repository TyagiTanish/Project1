import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";


interface props {
    children:JSX.Element
}

const MemberRoute = ({children}:props) => {
  const user = useSelector((state: any) => state.userReducer.user);  
  const navigate = useNavigate();


  useEffect(()=>{
    if(user && user?.role!=="member")
    {
      navigate("/");
    }
  },[user])

  return children;

};

export default MemberRoute;