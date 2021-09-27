import React from "react";
import TopBar from "../TopBar";
import SideBar from "../SideBar";
import Info from "../pages/userHome";
import User from "./Users";
import "./userDash.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { userData } from '../../dummyData';
import Analytics from './analytics/Analtyics';
import Listgases from "./Info";

const Overview = () => {
  return (
    <Router>
      <SideBar />
      <TopBar />
      <div className="main-contentD">
        <Switch>
          <Route exact path="/userDashbord">
            <Info />
          </Route>
          <Route path="/userDashbord/user">
            <User />
          </Route>
          <Route path="/userDashbord/charts">
              <Analytics
              data={userData}
              title="Emission Analytics"
              grid
              dataKey="Active User"
              />
          </Route>
          <Route path="/userDashbord/gases">
            <Listgases />
          </Route>
        </Switch>
      </div>
        <label htmlFor="sidebar-toggle" className="body-label"></label>
    </Router>
  );
};

export default Overview;
