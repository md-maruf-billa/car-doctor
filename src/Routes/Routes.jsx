import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import Details from "../Pages/Details/Details";
import PrivetRoute from "../Pages/PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/details/:id",
                element:<PrivetRoute><Details/></PrivetRoute>
            }
        ]
    }
])


export default router;