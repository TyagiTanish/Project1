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
import SuperAdminRoute from "./Authentication/SuperAdmin";
import MemberRegistrationPage from "../MemberRegistrationPage";
import AddHotelAftrLgn from "../AddHotelAftrLgn";
import ViewDeal from "../ViewDeal";
import HotelOwnerView from "../../layout/HotelOwnerView";
import MemberAccount from "../HotelOwner/MemberAccount";
import MemberRoute from "./Authentication/MemberRoutes";
import Allhotels from "../HotelOwner/hotels/All-hotels";
import MyBookings from "../HotelOwner/Rooms/Booking/BookingRequests";
import Bookings from "../HotelOwner/Rooms/Booking/BookingRequests";
import ShowCustomerBooking from "../ShowCustomerBooking";
import BookingDetails from "../BookingDetails";
import AcceptedBookings from "../HotelOwner/Rooms/Booking/AcceptedBookings";
import SuperAdminView from "../SuperAdmin/SuperAdminView/SuperAdminView";
import ShowAllUsers from "../SuperAdmin/SuperAdminView/ShowAllUsers";
import ShowAllMembers from "../SuperAdmin/SuperAdminView/ShowAllMembers";
import CustomerView from "../../layout/CustomerView/CustomerView";

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
        path: "/",
        element: (
          <CustomerRoutes>
            <HomePage />
          </CustomerRoutes>
        ),
      },
      {
        path: "/myBookings",
        element: <ShowCustomerBooking />,
      },
      {
        path: "/AddHotel",

        element: <AddHotelAftrLgn />,
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
        path: "/myBookings/:id",
        element: (
          <CustomerRoutes>
            <BookingDetails />
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
    ],
  },
  {
    path: "/login",
    element: <MainPage />,
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

function Routes() {
  return useRoutes(router);
}

export default Routes;
