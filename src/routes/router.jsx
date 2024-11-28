import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Protected from "../components/Protected";
import { LoginRoute } from "./LoginRoute";
import NotFoundRoute from "./NotFoundRoute";
import ProfileRoute from "./ProfileRoute";
import { RegisterRoute } from "./RegisterRoute";
import ServicesRoute from "./ServicesRoute";
import BookingsRoute from "./bookings";
import HomeRoute from "./home";
import ServiceRoute from "./service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomeRoute /> },
      { path: "/services", element: <ServicesRoute /> },
      { path: "/service/:slug", element: <Protected children={<ServiceRoute />} /> },
      { path: "/bookings", element: <Protected children={<BookingsRoute />} /> },
      { path: "/profile", element: <Protected children={<ProfileRoute />} /> },
      { path: "/not-found", element: <NotFoundRoute /> },
      { path: "*", element: <NotFoundRoute /> },
    ],
  },
  { path: "/login", element: <LoginRoute /> },
  { path: "/register", element: <RegisterRoute /> },
]);

export default router;
