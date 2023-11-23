import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../../pages/MainPage";

import HomePage from "../Home";
import HotelsPage from "../HotelsPage";
import Account from "../Account";
import Billing from "../Billing";
import MemberRegister from "../MemberRegister";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <MainPage />,
  },
  {
    path: "/hotels",
    element: <HotelsPage />,
  },
  {
    path:'/profile',
    element:<Account/>
  },{
    path:'/billing',
    element:<Billing/>
  },{
    path:'memberRegister',
    element:<MemberRegister/>
  }
]);

function Routes() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;
