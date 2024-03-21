import { useRoutes } from "react-router-dom";
import MainPage from "../Customer/Login-Register/MainPage";
import CustomerRoutes from "./Authentication/CustomerRoutes";
import HomePage from "../Customer/Header/Navbar/HotelLocations/Home";
import HotelsPage from "../Customer/Hotels/HotelsPage";
import Account from "../Customer/AccountSettings/Account";
import Billing from "../Customer/Billing/Billing";
import SuperAdminRoute from "./Authentication/SuperAdmin";
import MemberRegistrationPage from "../Register/MemberRegister/MemberRegistrationPage";
import AddHotelAftrLgn from "../Register/MemberRegister/AddHotelAftrLgn";
import ViewDeal from "../Customer/Hotels/ViewDeal";
import HotelOwnerView from "../../layout/HotelOwnerView";
import MemberAccount from "../HotelOwner/MemberAccount";
import MemberRoute from "./Authentication/MemberRoutes";
import Allhotels from "../HotelOwner/hotels/All-hotels";

import Bookings from "../HotelOwner/Rooms/Booking/BookingRequests";

import AcceptedBookings from "../HotelOwner/Rooms/Booking/AcceptedBookings";
import SuperAdminView from "../SuperAdmin/SuperAdminView/SuperAdminView";
import ShowAllUsers from "../SuperAdmin/SuperAdminView/ShowAllUsers";
import ShowAllMembers from "../SuperAdmin/SuperAdminView/ShowAllMembers";
import CustomerView from "../../layout/CustomerView/CustomerView";
import CustomerBooking from "../Customer/AccountSettings/CustomerBooking";
import AdminDashboard from "../HotelOwner/Dashboard/AdminDashboard";
import ProfileBox from "../OtherComponents/ProfileBox";
import BookingDetails from "../Customer/AccountSettings/BookingDetails";
import ShowCustomerBooking from "../Customer/AccountSettings/ShowCustomerBooking";
import PrivateRoute from "./Authentication/PrivateRoute";

/**
 * Contains all the routers used within the webApp , Markdown is *Router*.
 */

const router = [
  {
    path: "/superAdmin",
    element: (
      <SuperAdminRoute>
        <SuperAdminView />
      </SuperAdminRoute>
    ),
    children: [
      {
        path: "/superAdmin/users",
        element: (
          <SuperAdminRoute>
            <ShowAllUsers />
          </SuperAdminRoute>
        ),
      },
      {
        path: "/superAdmin/members",
        element: (
          <SuperAdminRoute>
            <ShowAllMembers />
          </SuperAdminRoute>
        ),
      },
      {
        path: "/superAdmin/profile",
        element: (
          <SuperAdminRoute>
            <MemberAccount />
          </SuperAdminRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <CustomerView />,
    children: [
      {
        index: true,
        element: (
          <CustomerRoutes>
            <HomePage />
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
            {/* <Account /> */}
            <ProfileBox />
          </CustomerRoutes>
        ),
        children: [
          {
            path: "/profile/myBookings/:id",
            element: (
              <CustomerRoutes>
                <BookingDetails />
              </CustomerRoutes>
            ),
          },
          {
            path: "/profile/myBookings",
            element: <ShowCustomerBooking />,
          },
          {
            path: "/profile/accountSetting",
            element: (
              <CustomerRoutes>
                <Account />
              </CustomerRoutes>
            ),
          },
        ],
      },

      {
        path: "/billing/:id/:hid",
        element: (
          <CustomerRoutes>
            <Billing />
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
    ],
  },
  {
    path: "/AddHotel",

    element: <AddHotelAftrLgn />,
  },
  {
    path: "/login",
    element: (
      // <PrivateRoute>
      <MainPage />
      // {/* </PrivateRoute> */}
    ),
  },
  {
    path: "/customer",
    element: <CustomerView />,
  },
  {
    path: "/memberRegister",
    element: <MemberRegistrationPage />,
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
        index: true,
        element: (
          <MemberRoute>
            <AdminDashboard />
          </MemberRoute>
        ),
      },
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
        path: "/member/bookings",
        element: (
          <MemberRoute>
            <Bookings />
          </MemberRoute>
        ),
      },
      {
        path: "/member/acceptedBookings",
        element: (
          <MemberRoute>
            <AcceptedBookings />
          </MemberRoute>
        ),
      },
    ],
  },
];
// This is ,y foile
// kdjrgkfssdelk
// console.log(dflvkd;flop)
function Routes() {
  return useRoutes(router);
}

export default Routes;
