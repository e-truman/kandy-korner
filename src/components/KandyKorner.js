import React from 'react';
import { LocationList } from './locations/Locations.js'
import { ProductList } from './products/Products.js';

export const Kandy = () => {
  return (
    <>
    <h1> Kandy Korner</h1>
    <LocationList />
    <ProductList />
    </>
  )
}
