import {  Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Accounts from "../../Pages/Accounts";
import Admin from "../../Pages/Admin_Page";
import Post from "../../Pages/Post";
import Sales from "../../Pages/SalesList";
import Totems from "../../Pages/Totems";
import Reports from "../../Pages/Reports";
import Events from "../../Pages/Events";
import ServiceListings from "../../Pages/ServiceListings";
import ShoppingList from "../../Pages/ShoppingList";



function AppRoutes() {
    return <>
       
            <Routes>
            <Route path="/dash" element={<Dashboard/>}/>
            <Route path="/accounts" element={<Accounts/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/post" element={<Post/>}/>
            <Route path="/reports" element={<Reports/>}/>
            <Route path="/sales" element={<Sales/>}/>
            <Route path="/totems" element={<Totems/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/listings" element={<ServiceListings/>}/>
            <Route path="/shoppinglist" element={<ShoppingList/>}/>
        
            </Routes>
    
    </>
}
export default AppRoutes;



