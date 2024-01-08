import "./App.css";
import { Outlet, Router, RouterProvider } from "react-router-dom";
import LoginSystem from "./views/components/LoginSystem";
import { SnackbarProvider } from "notistack";
import useAuth from "./Hooks/useAuth/useAuth";
import { useDispatch } from "react-redux";
import { userLogin } from "./views/components/redux/user/userSlice";
import { useEffect } from "react";
import { IntlProvider } from "react-intl";
import Locales from "./views/components/Locale";
import AllRooms from "./views/components/HotelOwner/Rooms/Rooms";
import Rooms from "./views/components/Rooms";
import HotelOwnerView from "./views/layout/HotelOwnerView";

function App() {
  const { request } = useAuth();
  const dispatch = useDispatch();

  const getUser = async () => {
    const authToken = localStorage.getItem("authToken");
    try {
      const userData = (await request.get(`/getUserData`)).data;
      dispatch(userLogin(userData));
    } catch (error) {
      localStorage.removeItem("authToken");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      getUser();
    }
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
      {/* <LoginSystem />  */}
        <HotelOwnerView/>

      </SnackbarProvider>
      <Outlet />
      </Locales>
    </>
  );
}

export default App;
