import AddVehicles from "./AddVehicles";
import Home from "./Home";
import NotFound from "./NotFound";
import Society from "./Society";

export const routes = [
    {
        path:"/",
        element: <Home/>
    },
 
    {
        path:"/create",
        element: <AddVehicles />
    },
    {
        path:"/society",
        element: <Society />
    },
    {
        path:`*`,
        element: <NotFound />
    },
]
