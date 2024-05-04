import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Book from "../Pages/Book/Book";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/services/:id",
        element: <Book />,
        loader: ({ params }) => {
          const data = fetch(`http://localhost:5000/services/${params.id}`);
          console.log(data);

          return data;
        },
      },
    ],
  },
]);
export default router;
