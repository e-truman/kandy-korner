import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { NavBar } from './nav/NavBar';
import { ApplicationViews } from './ApplicationViews';
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import "./Kandy.css"

export const Kandy = () => (

    <>
      <Route
        render={() => {
          if (localStorage.getItem("kandy_customer")) {
            return (
              <>
                <NavBar />
                <h1> Kandy Korner</h1>
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
)

