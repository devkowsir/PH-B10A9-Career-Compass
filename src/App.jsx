import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <div>Root</div> },
  { path: "*", element: <div>Not Found</div> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
