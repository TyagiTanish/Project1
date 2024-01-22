import "./App.css";
import {
  Navigate,
  Outlet,
  Router,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import LoginSystem from "./views/components/LoginSystem";
import { SnackbarProvider } from "notistack";
import useAuth from "./Hooks/useAuth/useAuth";
import { useDispatch } from "react-redux";
import { userLogin } from "./views/components/redux/user/userSlice";
import { useEffect } from "react";
import { IntlProvider } from "react-intl";
import Locales from "./views/components/Locale";
import AllRooms from "./views/components/HotelOwner/Rooms/RoomDetails/Rooms";
import HotelOwnerView from "./views/layout/HotelOwnerView";
import Rooms from "./views/components/Rooms";
import Billing from "./views/components/Billing";
import PayementPage from "./views/components/Bookings/PaymentGateway/payement";
import PayByRazorPay from "./views/components/Bookings/PaymentGateway/payement";
import PaymentGateway from "./views/components/Bookings/PaymentGateway/payement";
import Booking from "./views/components/Bookings/PaymentGateway/payement";
import Bookings from "./views/components/HotelOwner/Rooms/Booking/BookingRequests";
import Client from "./views/components/client";

function App() {
  const { request } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUser = async () => {
    const authToken = localStorage.getItem("authToken");
    try {
      //   if(!authToken)
      //   {
      //  return  navigate('/login');
      //   }
      // const userData = (await request.get(`/getUserData`)).data;
      // dispatch(userLogin(userData));
    } catch (error) {
      localStorage.removeItem("authToken");
    }
  };

  useEffect(() => {
    getUser();
  });

  // interface IntlConfig {
  //   locale: string
  //   formats: CustomFormats
  //   messages: Record<string, string> | Record<string, MessageFormatElement[]>
  //   defaultLocale: string
  //   defaultFormats: CustomFormats
  //   timeZone?: string
  //   textComponent?: React.ComponentType | keyof React.ReactHTML
  //   wrapRichTextChunksInFragment?: boolean
  //   defaultRichTextElements?: Record<string, FormatXMLElementFn<React.ReactNode>>
  //   onError(err: string): void
  // }
  return (
    <>
      <Locales>
        <SnackbarProvider>
          <LoginSystem />
          {/* <Billing /> */}
          {/* <PayementPage/> */}
          {/* <AllRooms/> */}
          {/* <HotelOwnerView/> */}
          {/* <Rooms/> */}
          {/* <Client/> */}
        </SnackbarProvider>
        {/* <Outlet /> */}
      </Locales>
    </>
  );
}

export default App;
