import React from "react";
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import AllContact from "./AllContact";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    }, {
        path: "/allcontact",
        element: <AllContact />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);