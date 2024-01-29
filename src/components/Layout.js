import { Outlet } from "react-router-dom";
import LoginForm from "../Pages/login";
import Login from "../Pages/login";


function Layout (){

    return<>
    <div className="App">
      
        <Outlet></Outlet>
    </div>
    </>
}

export default Layout;

