import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import { Layout } from "../../components/Layout/Layout";
import { Profile } from "./imports";

import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <ProtectedRoute component={Profile} />,
      },
    ],
  },
]);

export default router;
