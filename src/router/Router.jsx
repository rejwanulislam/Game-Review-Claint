import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../paze/Home";
import Addreview from "../paze/Addreview";
import Signup from "../paze/Signup";
import Login from "../paze/Login";
import Detels from "../paze/Detels";
import Allreview from "../paze/Allreview";
import Myreview from "../paze/Myreview";
import Update from "../compoment/Update";
import WatchList from "../paze/WatchList ";
import PrivectRoute from "../paze/PrivectRoute";



const router =createBrowserRouter([
    {
      path:"/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('https://game-review-server-eight.vercel.app/addreview')
        },
        {
            path:"/addreview",
            element:<PrivectRoute> <Addreview></Addreview></PrivectRoute>
        },
        {
            path:"/signup",
            element:<Signup></Signup>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/detels/:id",
            element:<Detels></Detels>,
            loader:()=>fetch('https://game-review-server-eight.vercel.app/addreview')

        },
        {
            path:"/allreview",
            element:<Allreview></Allreview>,
            loader:()=>fetch('https://game-review-server-eight.vercel.app/addreview')

        },
        {
            path:"/myreview",
            element:<PrivectRoute><Myreview></Myreview></PrivectRoute>,
            loader:()=>fetch('https://game-review-server-eight.vercel.app/addreview')

        },
        {
            path:"/update/:id",
            element:<Update></Update>,
            loader:({params})=>fetch(`https://game-review-server-eight.vercel.app/addreview/${params.id}`)

        },
        {
            path:"/watchlist",
            element:<PrivectRoute><WatchList></WatchList></PrivectRoute>,
            loader:()=>fetch('https://game-review-server-eight.vercel.app/watchList')

        },
      ]
    }
])
export default router;