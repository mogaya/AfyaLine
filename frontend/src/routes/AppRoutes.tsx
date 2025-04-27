import { createBrowserRouter } from "react-router";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Clients from "../pages/Clients";
import ClientDetails from "../pages/ClientDetails";
import Programs from "../pages/Programs";
import ProgramDetails from "../pages/ProgramDetails";
import ClientRegistration from "../pages/ClientRegistration";
import ProgramRegistration from "../pages/ProgramRegistration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/clients", element: <Clients /> },
      { path: "/clients/:id", element: <ClientDetails /> },
      { path: "/clients/register", element: <ClientRegistration /> },
      { path: "/programs", element: <Programs /> },
      { path: "/programs/:id", element: <ProgramDetails /> },
      { path: "/programs/register", element: <ProgramRegistration /> },
    ],
  },
]);

export default router;
