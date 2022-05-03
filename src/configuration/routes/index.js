import { useRoutes } from "react-router";
import MainLayout from "../../layouts/landing";
import Main from "../../pages/main";

export default function Routes({ ...props }) {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Main /> },
        /*{ path: "simulation", element: <ROI /> },*/
      ],
    },
  ]);
}
