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
import Locales from "./views/components/Locale";
import PaymentForm from "./views/components/Bookings/PaymentGateway/PaymentForm";
import Booking from "./views/components/Bookings/PaymentGateway/PaymentPage";
import HotelOwnerView from "./views/layout/HotelOwnerView";

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
      if (authToken) {
        const userData = (await request.get(`/getUserData`)).data;
        dispatch(userLogin(userData));
      }
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
          {/* <ShowCustomerBooking /> */}
          {/* <Billing /> */}
          {/* <AllRooms/> */}
          {/* <HotelOwnerView/> */}
          {/* <Rooms/> */}
        </SnackbarProvider>
        {/* <Outlet /> */}
      </Locales>
    </>
  );
}

export default App;
