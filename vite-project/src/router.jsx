import {createBrowserRouter} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home.jsx";
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

        ]

    },
    {
        path:'*',
        element:<NotFound/>
    }
])
export default router;
