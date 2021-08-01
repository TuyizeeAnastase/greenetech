import React  from 'react';
import './overview.css'
import TopBar from './components/topBar/topBar';
import SideBar from './components/sideBar/sideBar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import Newuser from './pages/newUser/Newuser';
import Products from './pages/products/Products';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Subscribers from './pages/subscribers/Subscribers';
import Admins from './pages/admins/Admins';
import Admin from './pages/admin/Admin';
import NewAdmin from './pages/createAdmin/createAdmin';

import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

function Dashbord(){
        return (
            <Router>
                <TopBar />
                <div className="container">
                    <SideBar/>
                    <Switch>
                        <Route exact path="/dashbord">
                           <Home/>
                        </Route>
                        <Route path="/dashbord/users">
                           <UserList/>
                        </Route>
                        <Route path="/dashbord/user/:userId">
                           <User/>
                        </Route>
                        <Route path="/dashbord/newUser/">
                           <Newuser/>
                        </Route>
                        <Route path="/dashbord/products/">
                           <Products/>
                        </Route>
                        <Route path="/dashbord/product/:productId">
                           <Product/>
                        </Route>
                        <Route path="/dashbord/newProduct">
                           <NewProduct/>
                        </Route>
                        <Route path="/dashbord/subscribers">
                           <Subscribers/>
                        </Route>
                        <Route path="/dashbord/admins">
                           <Admins/>
                        </Route>
                        <Route path="/dashbord/admin/:adminId">
                           <Admin/>
                        </Route>
                        <Route path="/dashbord/newAdmin">
                           <NewAdmin/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }

export default Dashbord;