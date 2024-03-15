import "./App.css";
import { useNavigate } from "react-router-dom";
import LoginSystem from "./views/components/Router/LoginSystem";
import { SnackbarProvider } from "notistack";
import useAuth from "./Hooks/useAuth/useAuth";
import { useDispatch } from "react-redux";
import { userLogin } from "./views/components/redux/user/userSlice";
import Locales from "./views/components/Language/Locale";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const { request } = useAuth();
  const queryClient = new QueryClient();
  const dispatch = useDispatch();

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

  // useEffect(() => {
  //   getUser();
  // });

  // useEffect(() => {
  //   localStorage.clear();
  // }, []);

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
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
}

export default App;
