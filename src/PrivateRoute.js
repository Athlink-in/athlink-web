import React from "react";
import {Outlet, Navigate} from "react-router-dom";
import {useAuth} from "./contexts/authContext";


export default function PrivateRoute({component : Component, ...rest}) {   
    const {currentUser} = useAuth();
    console.log(currentUser)
    return (
    //    <Route
    //       {...rest}
    //       render={props => {
    //          return currentUser ? <Component {...props}></Component> : <Navigate to = "/login"/>; 
    //       }}>
    //    </Route>
        currentUser ?  <Outlet></Outlet> : <Navigate to="/login" />
    );
 }