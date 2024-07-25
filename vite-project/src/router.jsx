import {createBrowserRouter} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home.jsx";
import Destination from "./pages/Destination.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
const router = createBrowserRouter( [
    {
        path:'/',
        element:<LandingPage/>,
        children:[
           {
            path:'/',
            element:<Home/>},
            
            {
            path:'/destination',
            element:<Destination/>},
            {
            path:'/about',
            element:<About/>},
            {
            path:'/contact',
            element:<Contact/>}
            

        ]

    },
    
    {
        path:'*',
        element:<NotFound/>
    }
])
export default router;
