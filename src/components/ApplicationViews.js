import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from './locations/Locations.js'
import { ProductList } from './products/Products.js';

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationList />
            </Route>
            <Route path="/products">
                <ProductList />
            </Route>
        </>
    )
}