
import './App.css';

import SideBar from './components/SideBar/Index';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Accounts from "./Pages/Accounts";
import Admin from "./Pages/Admin_Page";
import Post from "./Pages/Post";
import Sales from "./Pages/SalesList";
import Totems from "./Pages/Totems";
import Reports from "./Pages/Reports";
import Events from "./Pages/Events";
import ServiceListings from "./Pages/ServiceListings";
import ShoppingList from "./Pages/ShoppingList";
import Layout from './components/Layout';
import RequireAuth from './components/RequireRoutes';
import { AuthProvider } from './context/AuthProvider';
import Login from './Pages/login';


function App() {



    return(
      <AuthProvider>
      <div className="App">
        <div className='sidemenuandpagecontent'>
          <SideBar />
          <div className="pagecontent">
            <Routes>
              <Route path='/' element={<Layout />}>
                  <Route path='/login' element={<Login></Login>}></Route>
                  <Route element={<RequireAuth />}>
                  <Route path="dash" element={<Dashboard />} />
                  <Route path="accounts" element={<Accounts />} />
                  <Route path="admin" element={<Admin />} />
                  <Route path="post" element={<Post />} />
                  <Route path="reports" element={<Reports />} />
                  <Route path="sales" element={<Sales />} />
                  <Route path="totems" element={<Totems />} />
                  <Route path="events" element={<Events />} />
                  <Route path="listings" element={<ServiceListings />} />
                  <Route path="shoppinglist" element={<ShoppingList />} />
                </Route>
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </AuthProvider>
    )
   
 
  
  
}

export default App;


