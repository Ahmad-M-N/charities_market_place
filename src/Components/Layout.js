import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";
function Layout(){

    return(
        <div>
            <ResponsiveAppBar/>
            <Outlet/>
        </div>
    );

}

export default Layout;