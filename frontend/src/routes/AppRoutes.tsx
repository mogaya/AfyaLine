import { createBrowserRouter } from "react-router";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Clients from "../pages/Clients";
import ClientDetails from "../pages/ClientDetails";
import Programs from "../pages/Programs";
import ProgramDetails from "../pages/ProgramDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/clients", element: <Clients /> },
      { path: "/clients/:id", element: <ClientDetails /> },
      { path: "/programs", element: <Programs /> },
      { path: "/programs/:id", element: <ProgramDetails /> },
    ],
  },
]);

export default router;
