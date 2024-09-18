import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../components/HomePage";
import Employee from "../components/Employee";
import Attendance from "../components/Attendance";
import WorkingRemotely from "../components/WorkingRemotely";
import Error from "./Error";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/employee",
        element: <Employee />,
      },
      {
        path: "/attendance",
        element: <Attendance />,
      },
      {
        path: "/workingRemotely",
        element: <WorkingRemotely />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
