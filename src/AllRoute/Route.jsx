import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import ServiceDetails from "../Service/ServiceDetails";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PriveteRoute from "../PriveteRoute/PriveteRoute";
import About from "../About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/service/:id',
        loader: () => fetch('/weaddingService.json') ,
        element: <PriveteRoute><ServiceDetails></ServiceDetails></PriveteRoute>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },
]);


export default router