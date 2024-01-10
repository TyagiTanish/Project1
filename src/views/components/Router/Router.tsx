import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import CustomerRoutes from "./Authentication/CustomerRoutes";
import HomePage from "../Home";
import HotelsPage from "../HotelsPage";
import Account from "../Account";
import Billing from "../Billing";

import MemberRegistrationPage from "../MemberRegistrationPage";
import AddHotelAftrLgn from "../AddHotelAftrLgn";
import ViewDeal from "../ViewDeal";
import HotelOwnerView from "../../layout/HotelOwnerView";

import MemberRoute from "./Authentication/MemberRoutes";
import Allhotels from "../HotelOwner/Rooms/hotels/All-hotels";

;

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage />,
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
    element: <CustomerRoutes>
        <HotelsPage />
      </CustomerRoutes>
    ,
  },
  {
    path: "/profile",
    element: <CustomerRoutes><Account /></CustomerRoutes>,
  },
  {
    path: "/billing",
    element:<CustomerRoutes><Billing /></CustomerRoutes> ,
  },
  {
    path: "/memberRegister",

    element: <MemberRegistrationPage />,
  },
  {
    path: "/profile",
    element: <CustomerRoutes><Account /></CustomerRoutes>,
  },
  {
    path: "/viewDeal",
    element: <CustomerRoutes><ViewDeal /></CustomerRoutes>,
  },
  {

    path:'/member',
    element:<MemberRoute><HotelOwnerView/></MemberRoute>,
    children:[
      {
        path:'/member/hotels',
        element:<MemberRoute><Allhotels/></MemberRoute>
      },
      {
        path:'/member/hotels/:id',
        element:<MemberRoute><Allhotels/></MemberRoute>
      }

    ]
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
