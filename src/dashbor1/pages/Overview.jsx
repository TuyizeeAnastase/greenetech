import React from "react";
import TopBar from "../Components/TopBar";
import SideBar from "../Components/SideBar";
import Home from "./Home";
import Products from "./products/Products";
import NewProduct from "./newProduct/NewProduct";
import EditProduct from "./editProduct/EditProduct";
import Users from "./userList/UserList";
import NewUser from "./newuser/NewUser";
import Chart from "./charts/Chart";
import Account from "./account/Account";
import { userData } from "../../dummyData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Overview() {
  return (
    <Router>
      <TopBar />
      <div>
        <SideBar />
        <Switch>
          <Route exact path="/dashbord">
            <Home />
          </Route>
          <Route path="/dashbord/products">
            <Products />
          </Route>
          <Route path="/dashbord/users">
            <Users />
          </Route>
          <Route path="/dashbord/charts">
            <Chart
              data={userData}
              title="Emission Analytics"
              grid
              dataKey="Active User"
            />
          </Route>
          <Route path="/dashbord/newProduct" component={NewProduct}></Route>
          <Route
            path="/dashbord/product/:productId"
            component={EditProduct}
          ></Route>
          <Route path="/dashbord/newUser" component={NewUser}></Route>
          <Route path="/dashbord/account" component={Account}></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default Overview;
