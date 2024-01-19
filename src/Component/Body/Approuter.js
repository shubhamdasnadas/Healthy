import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Calculate from "./Calculator";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Mainbody from "./Mainbody";
import EPC from "./DropdownEle/Epc";
import INC from "./DropdownEle/Inc";
import SERVICES from "./DropdownEle/services";
import MAINT from "./DropdownEle/maint";     

const AppRouter = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
         {
            path:"Calculator",
            element: <Calculate/>
         },
         {
            path:"about",
            element:<About/>
         },
         {
            path:"career",
            element:<Career/>
         },
         {
            path:"contact",
            element:<Contact/>
         },
         {
            path:"",
            element:<Mainbody/>
         },
         {
            path:"epc",
            element:<EPC/>
         },
         {
            path:"inc",
            element:<INC/>
         },
         {
            path:"maint",
            element:<MAINT/>
         },
         {
            path:"services",
            element:<SERVICES/>
         }
    
        ]
    }
])


export default AppRouter;