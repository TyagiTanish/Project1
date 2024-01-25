import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
} from "react-router-dom";
import MainPage from "../../pages/MainPage";
import CustomerRoutes from "./Authentication/CustomerRoutes";
import HomePage from "../Home";
import HotelsPage from "../HotelsPage";
import Account from "../Account";
import Billing from "../Billing/Billing";

import MemberRegistrationPage from "../MemberRegistrationPage";
import AddHotelAftrLgn from "../AddHotelAftrLgn";
import ViewDeal from "../ViewDeal";
import HotelOwnerView from "../../layout/HotelOwnerView";
import MemberAccount from "../HotelOwner/MemberAccount";
import MemberRoute from "./Authentication/MemberRoutes";
import Allhotels from "../HotelOwner/Rooms/hotels/All-hotels";
import MyBookings from "../HotelOwner/Rooms/Booking/BookingRequests";
import Bookings from "../HotelOwner/Rooms/Booking/BookingRequests";
import AcceptedBookings from "../AcceptedBookings";

const router = [
  {
    path: "/",
    element: (
      <CustomerRoutes>
        <HomePage />
      </CustomerRoutes>
    ),
  },
  {
    path: "/login",
    element: <MainPage />,
  },
  {
    path: "/AddHotel",

    element: (
      <CustomerRoutes>
        <AddHotelAftrLgn />
      </CustomerRoutes>
    ),
  },
  {
    path: "/hotels",
    element: (
      // <CustomerRoutes>
      <HotelsPage />
      // </CustomerRoutes>
    ),
  },
  {
    path: "/profile",
    element: (
      <CustomerRoutes>
        <Account />
      </CustomerRoutes>
    ),
  },
  {
    path: "/billing",
    element: (
      <CustomerRoutes>
        <Billing />
      </CustomerRoutes>
    ),
  },
  {
    path: "/memberRegister",

    element: <MemberRegistrationPage />,
  },
  {
    path: "/profile",
    element: (
      <CustomerRoutes>
        <Account />
      </CustomerRoutes>
    ),
  },
  {
    path: "/viewDeal/:id",
    element: (
      <CustomerRoutes>
        <ViewDeal />
      </CustomerRoutes>
    ),
  },
  {
    path:'/billing',
    element:<Billing/>
  },
  {
    path: "/member",
    element: (
      <MemberRoute>
        <HotelOwnerView />
      </MemberRoute>
    ),
    children: [
      {
        path: "/member/hotels",
        element: (
          <MemberRoute>
            <Allhotels />
          </MemberRoute>
        ),
      },

      {
        path: "/member/profile",
        element: (
          <MemberRoute>
            <MemberAccount />
          </MemberRoute>
        ),
      },

      {
        path: "/member/hotels/:id",
        element: (
          <MemberRoute>
            <Allhotels />
          </MemberRoute>
        ),
      },
      {
        path:'/member/bookings',
        element:(<MemberRoute><Bookings/></MemberRoute>)
      },
      {
        path:'/member/acceptedBookings',
        element:(<MemberRoute><AcceptedBookings/></MemberRoute>)
      }
    ],
  },
];

function Routes() {
  return useRoutes(router);
}

export default Routes;
