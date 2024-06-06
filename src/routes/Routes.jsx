import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";

 import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import House from "../pages/House/House";
 

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        error: <div>Error</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>, 
                loader: () => fetch('/residential.json')
            }, 
            {
                path: '/house/:id', 
                 element: <PrivateRoute><House></House></PrivateRoute>,
                 loader: () => fetch('/residential.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }    
]);

export default router;