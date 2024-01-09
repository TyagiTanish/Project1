import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


interface props {
    children:JSX.Element
}

const CustomerRoutes = ({children}:props) => {
  const user = useSelector((state: any) => state.userReducer.user);
  if (user) { 
    if(user.role==='customer'){
        return children
    }else{
      if(user.role==='member'){
        return <Navigate to='/member' />
      }else{
        return <Navigate to='/' />
      }
      
    }
  }
  else{
  return <Navigate to="/" />;
  }
};

export default CustomerRoutes;