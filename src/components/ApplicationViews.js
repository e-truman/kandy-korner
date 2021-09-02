import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from './locations/Locations.js'
import { ProductList } from './products/Products.js';
import { EmployeeList } from "./employees/Employees.js";
import { EmployeeForm } from "./employees/EmployeeForm.js";

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationList />
            </Route>
            <Route path="/products">
                <ProductList />
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/hiring">
                <EmployeeForm />
            </Route>
        </>
    )
}