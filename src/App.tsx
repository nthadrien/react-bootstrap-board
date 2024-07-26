import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.css";

// security Routes Guards
import { AdminRoutes, ProtectedRoutes } from "./components/routerGuards";

// pages ----
import ErrorPage from "./pages/erreur";
import LoginsPage from "./pages/logins";
import Operateurs from "./pages/operateurs";
import {
  DashboardLayoutVersion2,
  DashboardLayoutVersion1,
  AuthLayout,
} from "./components/layouts";
// import Abonnements from "./pages/abonnements";
import Resumes from "./pages/resumes";
import Comptes from "./pages/comptes";
import Utilisateurs from "./pages/utilisateurs";
import Inscription from "./pages/inscription";
import { Feedbacks } from "./pages/feedbacks";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/auth/connexion" />
    },
    {
      path:"auth",
      element: <AuthLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <LoginsPage />

        },
        {
          path:"connexion",
          element: <LoginsPage />
        },
        {
          path:"inscription",
          element: <Inscription />
        },
        {
          path:"feedbacks",
          element: <Feedbacks />
        },
      ]
    },
    // Dashboard version 1 routes
    {
      path:"version1",
      element: <DashboardLayoutVersion1 />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Resumes />
        },
        {
          path:"parametrages",
          children: [
            {
              index: true,
              element: <Comptes />
            },
            {
              path:"comptes",
              element: <Comptes />
            },
            {
              path:"utilisateurs",
              loader: () => ProtectedRoutes(),
              element: <Utilisateurs />
            },
            {
              path:"operateurs",
              loader: () => ProtectedRoutes(),
              element: <Operateurs />
            }
          ]
            
        },
        {
          path: "historiques",
          element: <h2> Historiques</h2>,
        }
      ]
    },
    // Dashboard version 2
    {
      path:"version2",
      element: <DashboardLayoutVersion2 />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Resumes />
        },
        {
          path:"parametrages",
          children: [
            {
              index: true,
              element: <Comptes />
            },
            {
              path:"comptes",
              element: <Comptes />
            },
            {
              path:"utilisateurs",
              loader: () => AdminRoutes(),
              element: <Utilisateurs />
            },
            {
              path:"operateurs",
              loader: () => ProtectedRoutes(),
              element: <Operateurs />
            }
          ]
        },
        {
          path: "historiques",
          element: <h2> Historiques</h2>,
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
