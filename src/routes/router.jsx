import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Protected from "../components/Protected";
import { LoginRoute } from "./LoginRoute";
import { RegisterRoute } from "./RegisterRoute";
import HomeRoute from "./home";
import ServiceRoute from "./service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomeRoute /> },
      { path: "/service/:slug", element: <Protected children={<ServiceRoute />} /> },
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
