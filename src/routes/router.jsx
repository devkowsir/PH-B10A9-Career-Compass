import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Protected from "../components/Protected";
import { LoginRoute } from "./LoginRoute";
import ProfileRoute from "./ProfileRoute";
import { RegisterRoute } from "./RegisterRoute";
import BookingsRoute from "./bookings";
import HomeRoute from "./home";
import ServiceRoute from "./service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomeRoute /> },
      { path: "/service/:slug", element: <Protected children={<ServiceRoute />} /> },
      { path: "/bookings", element: <Protected children={<BookingsRoute />} /> },
      { path: "/profile", element: <Protected children={<ProfileRoute />} /> },
      { path: "*", element: <div>Not Found</div> },
    ],
  },
  {
    path: "/login",
    element: <LoginRoute />,
  },
  {
    path: "/register",
    element: <RegisterRoute />,
  },
]);

export default router;
