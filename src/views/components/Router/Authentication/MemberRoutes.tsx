import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


interface props {
    children:JSX.Element
}

const MemberRoute = ({children}:props) => {
  const user = useSelector((state: any) => state.userReducer.user);  
  if (user) { 
    if(user?.role==='member'){
        return children
    }else{
        return <Navigate to='/' />
    }
  }
  else{
  return <Navigate to="/" />;
  }
};

export default MemberRoute;