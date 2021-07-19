import React from 'react';
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
                        <Route path="/dashbord/:newProd">
                           <NewProduct/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }

export default Dashbord;