import React from "react";
import { Redirect,Route } from "react-router-dom";

function Protected({ component: Component, ...restOfProps}){
    const isAunthenticated=localStorage.getItem('isAuthenticated');
    console.log('this',isAunthenticated);

    return(
        <Route
          {...restOfProps}
          render={(props)=>
            isAunthenticated ? <Component {...props} /> : <Redirect to="/login"/>
          }
        />
    );
}

export default Protected;