
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddFood from "../pages/AddFood/AddFood";
import AllFood from "../pages/AllFood/AllFood";
import PrivateRoute from "./PrivateRoute";
import MyFood from "../pages/MyFood/MyFood";
import Update from "../pages/Update/Update";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/foods')
        },
        {
          path: '/adds',
          element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
          path:'/allFoods',
          element:<AllFood></AllFood>,
          loader: () => fetch('http://localhost:5000/foods')
        },
        {
          path:'/myFood',
          element: <PrivateRoute><MyFood></MyFood></PrivateRoute>
        },
        {
          path: '/updateFood/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);


  export default router