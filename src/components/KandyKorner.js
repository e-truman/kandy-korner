import React from 'react';
import { NavBar } from './nav/NavBar';
import { ApplicationViews } from './ApplicationViews';
import "./Kandy.css"

export const Kandy = () => {
  return (
    <>
    <NavBar />
    <h1> Kandy Korner</h1>
    <ApplicationViews />
    </>
  )
}
