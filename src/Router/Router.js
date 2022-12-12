import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import ProjectDetails from "../components/ProjectDetails";
import Main from "../Layaout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path:'/project-details',
                element:<ProjectDetails/>
                
            }

        ]
    }
])