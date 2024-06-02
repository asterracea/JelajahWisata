import {createBrowserRouter} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
Home
const router = createBrowserRouter( [
    {
        path:'/',
        element:<LandingPage/>,
        children:[
           { 
            path:'/',
            element:<Home/>}
            
        ]

    },
    {
        path:'*',
        element:<NotFound/>
    }
])
export default router;