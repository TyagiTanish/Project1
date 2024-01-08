import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../../pages/MainPage";

import HomePage from "../Home";
import HotelsPage from "../HotelsPage";
import Account from "../Account";
import Billing from "../Billing";
import MemberRegister from "../MemberRegister";
import MemberRegistrationPage from "../MemberRegistrationPage";
import AddHotelAftrLgn from "../AddHotelAftrLgn";
import ViewDeal from "../ViewDeal";

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
    path: "AddHotel",
    element: <AddHotelAftrLgn />,
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
    path:'/memberRegister',

    element:<MemberRegistrationPage/>
  },
  {
    path: "/profile",
    element: <Account />,
  },
  {
    path: "/billing",
    element: <Billing />,
  },
  {
    path:'/viewDeal',
    element:<ViewDeal/>
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
